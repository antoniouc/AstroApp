import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StacksParamList } from "./types/navigation";
import { NeoList } from "../screens/exampleDonki";
import { FavoritesScreen } from "../screens/FavoritesGallery";

const Stack = createNativeStackNavigator<StacksParamList>();

export default function StackLayout() {
    return(
        <Stack.Navigator>
            <Stack.Screen  name="donki" component={NeoList}/>
            <Stack.Screen name="favoritos" component={FavoritesScreen}/>
        </Stack.Navigator>
    )
}
