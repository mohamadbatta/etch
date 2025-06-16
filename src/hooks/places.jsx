// src/hooks/places.js
import { useQuery } from '@tanstack/react-query';


const fetchPlaces = async () => {
  return [
    {
      id: 1,
      name: 'Café Mocha',
      location: 'Jeddah,Saudi Arabia',
      image_url: require('../../assets/cafe-mocha.jpg'),
      category: 'Cafes',
      isLiked: false,
    },
    {
      id: 2,
      name: 'Central Park',
      location: 'Jeddah,Saudi Arabia',
      image_url: require('../../assets/central-park.jpg'),
      category: 'Attractions',
      isLiked: false,
    },
    {
      id: 3,
      name: 'Sahara Mall',
      location: 'Jeddah,Saudi Arabia',
      image_url: require('../../assets/sahara-mall.jpg'),
      category: 'Shopping',
      isLiked: false,
    },
  ];
};

export const usePlaces = () => {
  return useQuery({
    queryKey: ['places'],  // مفتاح الاستعلام
    queryFn: fetchPlaces,  // الدالة لجلب البيانات
  });
};
