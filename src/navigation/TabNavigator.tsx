import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "./types/navigation";
import HomeScreen from "../screens/ApodScreen";
import RoverScreen from "../screens/rover";
import EarthAssetScreen from "../screens/EarthAssetScreen";

const Tab  = createBottomTabNavigator<TabsParamList>();

export default function TabLayout() {
    return(
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#007bff",
          }}
        >
            <Tab.Screen name="imagenDay" component={ HomeScreen } />
            <Tab.Screen name="EarthAsset" component={ EarthAssetScreen } />
        </Tab.Navigator>
    );
}