import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../Screens/Screen.Home";
import { Details } from "./Stack.Details";

const Stack=createNativeStackNavigator();
export const HomeStacks=()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    );
}