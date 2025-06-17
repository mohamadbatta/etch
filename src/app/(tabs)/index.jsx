import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import { usePlaces } from '../../hooks/places'; // Custom hook to fetch places
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); // Get screen width
const CARD_WIDTH = (width - 32 - 16) / 2; // Calculate card width, considering padding

// Categories for filtering places
const categories = [
  { name: 'All', icon: 'apps' },
  { name: 'Cafes', icon: 'coffee' },
  { name: 'Attractions', icon: 'ferris-wheel' },
  { name: 'Shopping', icon: 'shopping' },
];

export default function HomeScreen() {
  const [filter, setFilter] = useState('All'); // State to manage the selected category filter
  const { data: places, isLoading } = usePlaces(); // Fetch places using custom hook

  // If the data is still loading, show a loading text
  if (isLoading) return <Text className="text-center mt-10">Loading...</Text>;

  // Filter places based on the selected category
  const filteredPlaces = places.filter(
    (place) => filter === 'All' || place.category === filter
  );

  // Render each place card
  const renderPlace = ({ item }) => (
    <View className="mb-4 mr-4" style={{ width: CARD_WIDTH }}>
      <ImageBackground
        source={item.image_url} // Image for the place
        style={{ height: 350, borderRadius: 12, overflow: 'hidden' }}
        imageStyle={{ borderRadius: 12 }}
      >
        <View className="bg-black/40 flex-1 justify-end p-2">
          <Text className="text-white font-bold text-base">{item.name}</Text>
          <Text className="text-white text-xs">{item.location}</Text>
        </View>
      </ImageBackground>

      {/* Like button */}
      <TouchableOpacity className="mt-2" onPress={() => alert(`Liked ${item.name}`)}>
        <Text className="text-black-500 text-xl">♥ Like</Text>
      </TouchableOpacity>
    </View>
  );

  // Render category filter button
 const renderCategory = ({ item: cat }) => {
  const isSelected = filter === cat.name;
  return (
    <TouchableOpacity
      onPress={() => setFilter(cat.name)}
      className={`flex-row items-center px-4 py-22 rounded-full mr-3 ${
        isSelected ? 'bg-black' : 'bg-gray-200'
      }`}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
      }}
    >
      <MaterialCommunityIcons
        name={cat.icon}
        size={20}
        color={isSelected ? '#fff' : '#374151'} // gray-700
      />
      <Text
        className={`ml-2 text-base ${isSelected ? 'text-white font-semibold' : 'text-gray-700'}`}
      >
        {cat.name}
      </Text>
    </TouchableOpacity>
  );
};

  return (
    <View className="flex-1 p-3 pt-10 bg-white">
      {/* Logo */}
      <Image
        source={require('../../../assets/logo.png')} // Path to the logo
        className="w-24 h-24 rounded-full mb-3 mx-auto"
      />

      {/* Category filter slider */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories} // Categories for filtering
        keyExtractor={(item) => item.name}
        renderItem={renderCategory} // Render each category button
        contentContainerStyle={{ paddingVertical: 8, paddingHorizontal: 4 }}
      />

      {/* Places grid */}
      <FlatList
        data={filteredPlaces} // Filtered list of places
        keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
        renderItem={renderPlace} // Render each place card
        numColumns={2} // Display in two columns
        key={'grid-2'}
        columnWrapperStyle={{ justifyContent: 'space-between' }} // Spacing between columns
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
      />
    </View>
  );
}
