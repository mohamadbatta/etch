import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext'; // Importing the AuthContext to access user data and logout function
import { router } from 'expo-router'; // Importing router for navigation

export default function ProfileScreen() {
  const { user, logout } = useAuth(); // Access user data and logout function from AuthContext

  // If no user is logged in, display a message
  if (!user) return <Text className="text-center mt-10">No user data</Text>;

  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      {/* User profile picture */}
      <Image
        source={require('../../../assets/profile.jpg')} // Profile image path
        className="w-24 h-24 rounded-full mb-9" // Rounded image with margin bottom
      />

      {/* Username display */}
      <Text className="text-xl font-bold">{user.username}</Text>

      {/* Bio display */}
      <Text className="text-gray-500 text-center mt-2">{user.bio}</Text>

    
    </View>
  );
}
