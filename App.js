import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform,StatusBar as nativeStatusBar} from 'react-native';
import { HomeStacks } from './src/Stacks/Stack.home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import { ContextDataProvider } from './src/Contextjs/DataContext';
import { SettingStack } from './src/Stacks/Stack.Settings/Stack.root';


const GetHome=()=>(<HomeStacks/>);
 const GetSetting=()=>{
   return(
    <SettingStack/>
   );
 }
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <ContextDataProvider>
    <NavigationContainer style={styles.container}>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Setting') {
                iconName = focused ? 'settings' : 'settings-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'tomato',
            tabBarShowLabel:false,
            headerShown:false,
          })}

        >
            <Tab.Screen name="Home" component={GetHome}/>
            <Tab.Screen name="Setting" component={GetSetting}/>
        </Tab.Navigator>
    </NavigationContainer>
    </ContextDataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    marginTop: Platform.OS==='android'? nativeStatusBar.currentHeight :0,
  },
});
