import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Code validation schema
const codeSchema = z.object({
  code: z
    .string()
    .min(4, 'Code must be 4 digits')
    .max(4, 'Code must be 4 digits')
    .regex(/^\d{4}$/, 'Code must contain only numbers'),
});

export default function VerifyCodeScreen() {
  const router = useRouter();
  const [timer, setTimer] = useState(599); // 9:59 in seconds

  const goBack = () => {
    router.back(); // Go back to the previous screen
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(codeSchema),
    defaultValues: { code: '' },
  });

  // Handle code submission
  const onSubmit = ({ code }) => {
    if (code === '0000') {
      router.push('/auth/password'); // Navigate to the password creation page
    } else {
      alert('Invalid code. Try 0000.'); // Alert for invalid code
    }
  };

  // Resend code functionality
  const resendCode = () => {
    setTimer(599); // Reset timer
  };

  // Timer effect for countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  // Format time for display (mm:ss)
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <View className="flex-1 justify-center items-center px-6 bg-white">
      
      {/* Back button */}
      <TouchableOpacity
        onPress={goBack}
        className="absolute top-10 left-6 p-2  rounded-full"
      >
        <MaterialCommunityIcons name="arrow-left" size={30} color="black" />
      </TouchableOpacity>

      {/* Title and message */}
      <Text className="text-2xl font-bold mb-4 text-center">Enter Verification Code</Text>
      <Text className="text-gray-500 mb-6 text-center">We sent a 4-digit code to your email</Text>

      {/* Code input field */}
      <Controller
        control={control}
        name="code"
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="w-full border border-gray-300 rounded-md p-3 text-center text-xl tracking-widest"
            placeholder="0000"
            keyboardType="number-pad"
            maxLength={4}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      
      {/* Error message for invalid code */}
      {errors.code && (
        <Text className="text-red-500 mt-2 mb-4">{errors.code.message}</Text>
      )}

      {/* Next button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-black px-6 py-3 rounded-md mt-4"
      >
        <Text className="text-white font-semibold">Next</Text>
      </TouchableOpacity>

      {/* Resend code button */}
      <TouchableOpacity onPress={resendCode} disabled={timer > 0} className="mt-4">
        <Text className={`text-sm ${timer > 0 ? 'text-gray-400' : 'text-blue-500'}`}>
          {timer > 0 ? `Resend code in ${formatTime(timer)}` : 'Resend Code'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
