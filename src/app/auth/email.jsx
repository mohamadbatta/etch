import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Schema validation using Zod
const emailSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
});

export default function EmailScreen() {
  const router = useRouter();

  // React Hook Form setup with Zod schema validation
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  // Navigate to verification screen after form submission
  const onSubmit = (data) => {
    console.log('Email submitted:', data.email);
    router.push('/auth/verify');
  };

  // Go back to the previous screen
  const goBack = () => {
    router.back();
  };

  return (
    <View className="flex-1 justify-center items-center px-6 bg-white">
      {/* Back Button */}
      <TouchableOpacity
        onPress={goBack}
        className="absolute top-10 left-6 p-2 rounded-full"
      >
        <MaterialCommunityIcons name="arrow-left" size={30} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-2xl font-bold mb-6">Enter your email</Text>

      {/* Email Input Field */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="w-full border border-gray-300 rounded-md p-3 mb-2 text-base"
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      {/* Validation Error */}
      {errors.email && (
        <Text className="text-red-500 mb-4">{errors.email.message}</Text>
      )}

      {/* Submit Button */}
      <TouchableOpacity
        className="bg-black px-6 py-3 rounded-md"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-white font-semibold">Next</Text>
      </TouchableOpacity>
    </View>
  );
}
