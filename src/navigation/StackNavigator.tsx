import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StacksParamList } from "./types/navigation";
import { NeoList } from "../screens/exampleDonki";

const Stack = createNativeStackNavigator<StacksParamList>();

export default function StackLayout() {
    return(
        <Stack.Navigator>
            <Stack.Screen  name="donki" component={NeoList}/>
        </Stack.Navigator>
    )
}
