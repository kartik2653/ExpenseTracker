import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View} from 'react-native';
import { Screena } from './Stack.screena';
import { Screenb } from './Stack.screenb';


const settingStack=createNativeStackNavigator();
const GetScreenA=({navigation})=>{
    return(
      <Screena navigation={navigation}/>
    
    );
}
const GetScreenB=({route,navigation})=>{
    const {id} = route.params;
    return(
        <Screenb id={id}/>
    )
}

export const SettingStack=()=>{
    return(
        <settingStack.Navigator initialRouteName="ScreenA" screenOptions={{ headerShown: false }}>
            <settingStack.Screen name ='ScreenA' component={GetScreenA} />
            <settingStack.Screen name='ScreenB' component={GetScreenB}/>
        </settingStack.Navigator>
    );
}