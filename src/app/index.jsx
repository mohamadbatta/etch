import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

/**
 * WelcomeScreen is the landing screen for first-time users or logged-out users.
 * It offers an option to continue with email and navigate to the sign-in screen.
 */
export default function WelcomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      {/* App Logo */}
      <Image
        source={require('../../assets/logo.png')}
        className="w-32 h-32 rounded-full mb-5"
        resizeMode="cover"
      />

      {/* Welcome Text */}
      <Text className="text-3xl font-bold mb-8 text-center text-black">
        Welcome to Etch
      </Text>

      {/* Continue with Email Button */}
      <Link href="/auth/email" asChild>
        <TouchableOpacity className="bg-blue-600 px-6 py-3 rounded-full mb-4">
          <Text className="text-white text-base font-semibold">
            Continue with Email
          </Text>
        </TouchableOpacity>
      </Link>

      {/* Navigate to Sign In Page */}
      <Link href="/auth/signin" asChild>
        <TouchableOpacity>
          <Text className="text-blue-500 underline mt-4 text-sm">
            Already have an account? Sign in
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
