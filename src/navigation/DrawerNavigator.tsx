// aqui vamos a crear el drawernavigator
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamList } from "./types/navigation";
import TabLayout from "./TabNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StackLayout from "./StackNavigator";
import { MarsGallery } from "../screens/Marsgallery";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerLayout() {
  return (
    <SafeAreaView style={Styles.container}>

      <Drawer.Navigator
        screenOptions={{
          drawerStyle: { backgroundColor: "#fff", width: 250 },
          drawerType: "slide",
        }}
        initialRouteName="Home"
      >
        <Drawer.Screen
          options={{
            title: "Inicio",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="rocket" color={color} size={22} />
            ),
          }}
          name="Home"
          component={TabLayout}
          />
            <Drawer.Screen options={{
                title: "donki",
                drawerIcon: ({color, size}) => (
                    <Ionicons name="planet" color={color} size={22}/>
                )
            }} name="about" component={StackLayout} />
            <Drawer.Screen name="config" component={MarsGallery} />
          {/* 
            <Drawer.Screen name="news" component={HelpScreen} />
         */}
      </Drawer.Navigator>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
