import "../../global.css";
import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from '../context/AuthContext';


const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
       <AuthProvider>
        <Slot />
       </AuthProvider>
      
    </QueryClientProvider>
  );
}
