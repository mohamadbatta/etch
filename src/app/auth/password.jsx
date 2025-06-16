import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Password validation schema
const passwordSchema = z.object({
  password: z
    .string()
    .min(8, 'Must be at least 8 characters') // Minimum length of 8
    .max(20, 'Must be at most 20 characters') // Maximum length of 20
    .regex(/[A-Za-z]/, 'Must include at least one letter') // Must contain at least one letter
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Must include at least one special character'), // Must contain at least one special character
});

export default function CreatePasswordScreen() {
  const router = useRouter();
  
  // Go back to the previous page
  const goBack = () => {
    router.back();
  };

  // Form handling with react-hook-form
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: '' },
  });

  // Watch for password input change
  const password = watch('password');

  // Handle form submission
  const onSubmit = ({ password }) => {
    console.log('Password saved:', password); // Log the password (save logic can be added later)
    router.push('/auth/profile'); // Navigate to the profile screen
  };

  // Real-time validation checks
  const isValidLength = password.length >= 8 && password.length <= 20;
  const hasLetter = /[A-Za-z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <View className="flex-1 justify-center items-center px-6 bg-white">
      
      {/* Back button */}
      <TouchableOpacity
        onPress={goBack}
        className="absolute top-10 left-6 p-2  rounded-full"
      >
        <MaterialCommunityIcons name="arrow-left" size={30} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-2xl font-bold mb-4 text-center">Create Password</Text>
      <Text className="text-gray-500 mb-6 text-center">Choose a secure password for your account</Text>

      {/* Password input */}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="w-full border border-gray-300 rounded-md p-3 text-lg"
            placeholder="Enter password"
            secureTextEntry
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      
      {/* Error message for invalid password */}
      {errors.password && (
        <Text className="text-red-500 mt-2">{errors.password.message}</Text>
      )}

      {/* Real-time validation feedback */}
      <View className="w-full mt-4">
        <Text className={`${isValidLength ? 'text-green-600' : 'text-gray-400'}`}>
          • 8-20 characters
        </Text>
        <Text className={`${hasLetter ? 'text-green-600' : 'text-gray-400'}`}>
          • Contains at least one letter
        </Text>
        <Text className={`${hasSpecialChar ? 'text-green-600' : 'text-gray-400'}`}>
          • Contains at least one special character
        </Text>
      </View>

      {/* Next button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-black px-6 py-3 rounded-md mt-6"
      >
        <Text className="text-white font-semibold">Next</Text>
      </TouchableOpacity>
    </View>
  );
}
