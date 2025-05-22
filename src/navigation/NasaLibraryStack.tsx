import { NasaLibraryStackParamList } from "./types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NasaLibraryScreen } from "../features/NasaLibrary/Screens/NasaLibraryScreen";
import { FavoritesScreen } from "../screens/FavoritesGallery";

const Stack = createNativeStackNavigator<NasaLibraryStackParamList>();
export default function NasaLibraryStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="NasaGallery" component={NasaLibraryScreen} />
            <Stack.Screen name="FavoritesNasa" component={FavoritesScreen} />
        </Stack.Navigator>
    )
}