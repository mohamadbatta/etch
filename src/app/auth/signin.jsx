import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Dummy account credentials
const DUMMY_EMAIL = 'etch@etch.com';
const DUMMY_PASSWORD = '123456';

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email').min(1, 'Email is required'),
  password: z.string().min(6, 'Password should be at least 6 characters'),
});

export default function SignInScreen() {

     const goBack = () => {
    router.back(); // يرجع للصفحة السابقة
  };

  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    // Check if the email and password match the dummy account
    if (data.email === DUMMY_EMAIL && data.password === DUMMY_PASSWORD) {
      // Successfully signed in with dummy account
      setErrorMessage('');
      router.replace('/(tabs)'); // Navigate to the home screen
    } else {
      // Invalid credentials
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
         <TouchableOpacity
        onPress={goBack}
        className="absolute top-10 left-6 p-2  rounded-full"
      >
        <MaterialCommunityIcons name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
      <Text className="text-2xl font-bold text-center mb-2">Sign In</Text>

      {/* Email Field */}
      <Text className="mb-1 font-medium">Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="etch@etch.com"
            className="w-full border border-gray-300 rounded-md p-3 text-lg mb-2"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && <Text className="text-red-500 mb-2">{errors.email.message}</Text>}

      {/* Password Field */}
      <Text className="mb-1 font-medium">Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="123456"
            secureTextEntry
            className="w-full border border-gray-300 rounded-md p-3 text-lg mb-2"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password && <Text className="text-red-500 mb-2">{errors.password.message}</Text>}

      {/* Error Message */}
      {errorMessage && <Text className="text-red-500 mb-2">{errorMessage}</Text>}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-black px-6 py-3 rounded-md mt-6"
      >
        <Text className="text-white font-semibold text-center">Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
