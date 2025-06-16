import { useQuery } from '@tanstack/react-query';

const mockProfile = {
  username: 'mohammed_dev',
  bio: 'Loves traveling and sharing cool places!',
  avatarUrl: 'https://i.pravatar.cc/150?img=12',
};

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 500)); // Simulate delay
      return mockProfile;
    },
  });
}
