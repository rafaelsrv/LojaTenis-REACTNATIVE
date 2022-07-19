import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./pages/Home";
import Detail from "./pages/Detail";


const Stack = createNativeStackNavigator();

function Routesss(){
    return(
        
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home"
                component={Home}
                options={{headerShown : false }}
                />
                
                <Stack.Screen
                name="Detail"
                component={Detail}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routesss;