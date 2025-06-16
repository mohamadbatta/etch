import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Profile validation schema
const profileSchema = z.object({
  username: z
    .string()
    .min(1, 'Username is required') // Username is required
    .refine((val) => val.toLowerCase() !== 'etch', {
      message: 'This username is already taken.',
    }), // Prevent the username "etch"
  bio: z.string().optional(), // Bio is optional
});

export default function ProfileScreen() {
  const router = useRouter();
  const { login } = useAuth(); // Accessing the login function from context

  // Go back to the previous screen
  const goBack = () => {
    router.back();
  };

  // Form setup with react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema), // Using the profile schema for validation
    defaultValues: {
      username: '', // Default username value
      bio: '', // Default bio value
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    login(data); // Save user data in the AuthContext
    router.replace('/(tabs)'); // Redirect to the main tab screen after login
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      
      {/* Back button */}
      <TouchableOpacity
        onPress={goBack}
        className="absolute top-10 left-6 p-2  rounded-full"
      >
        <MaterialCommunityIcons name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
      
      {/* Title */}
      <Text className="text-2xl font-bold text-center mb-2">Create your Profile</Text>
      <Text className="text-gray-500 text-center mb-6">Let others know who you are</Text>

      {/* Username input field */}
      <Text className="mb-1 font-medium">Username</Text>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="e.g. travel_lover"
            className="w-full border border-gray-300 rounded-md p-3 text-lg mb-2"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.username && (
        <Text className="text-red-500 mb-2">{errors.username.message}</Text> // Display error message for username
      )}

      {/* Bio input field */}
      <Text className="mb-1 font-medium">Bio (optional)</Text>
      <Controller
        control={control}
        name="bio"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="A short bio about yourself"
            multiline
            className="w-full border border-gray-300 rounded-md p-3 text-lg mb-2"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      {/* Submit button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)} // Handle form submission
        className="bg-black px-6 py-3 rounded-md mt-6"
      >
        <Text className="text-white font-semibold text-center">Create Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
