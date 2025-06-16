import { Tabs } from "expo-router";
import MaterialCommunitIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";
import { 
  Ionicons, 
  MaterialCommunityIcons, 
  FontAwesome, 
  Feather 
} from '@expo/vector-icons';




export default function TabsLayout() {
    return <Tabs>
<Tabs.Screen
  name="index"
  options={{
    headerShown: false,
    title: "Home",
    tabBarIcon: ({ focused }) => (
      <Image
        source={
      
            require("../../../assets/home-icon.png") // active image
          
        }
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? "#000" : "#999", // optional tint
        }}
        resizeMode="contain"
      />
    ),
    tabBarActiveTintColor: "#000", // optional for text label
  }}
/>



<Tabs.Screen
        name="create"
        options={{
           title: "Create",
           tabBarIcon:({ color, size,focused  }) => (
            <Feather  name="plus-square" size={size} color={focused ? "#000" : "#999"} />
           ),

             tabBarActiveTintColor: "#000",
         
        }}/>
        

        
<Tabs.Screen
        name="profile"
        options={{
           title: "My Profile",
           tabBarIcon:({ focused }) => (
      <Image
        source={
      
            require("../../../assets/profile.jpg") // active image
          
        }
        style={{
          width: 30,
          height: 30,
            borderRadius: 10, // Slightly rounded corners
    //marginBottom: 16,
        }}
        resizeMode="contain"
      />
    ),
    tabBarActiveTintColor: "#000", // optional for text label
         
        }}/>
        
 
    </Tabs>
}