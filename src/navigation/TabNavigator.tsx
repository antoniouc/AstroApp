import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "./types/navigation";
import HomeScreen from "../screens/ApodScreen";
import RoverScreen from "../screens/rover";
import EarthAssetScreen from "../screens/EarthAssetScreen";
import { NeoList } from "../screens/exampleDonki";
import { Ionicons } from "@expo/vector-icons";

const Tab  = createBottomTabNavigator<TabsParamList>();

export default function TabLayout() {
    return(
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#007bff",
          }}
        >
            <Tab.Screen options={{
                title: "imagen day",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="image" color={color} size={size} />
                )
             }} name="imagenDay" component={ HomeScreen } />
            <Tab.Screen options={{
                title: "imagen satelital",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="location" color={color} size={size} />
                )
             }} name="EarthAsset" component={ EarthAssetScreen } />
           
             <Tab.Screen options={{
                title: "Objetos cercanos",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="telescope" color={color} size={size} />
                )
             }} name="NearEarthObjects" component={ NeoList } />   
        </Tab.Navigator>
    );
}