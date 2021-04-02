import React ,{useEffect} from 'react';
import {useObserver} from "mobx-react-lite";
import {I18nManager, StatusBar} from 'react-native';

import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from "react-native-splash-screen";

import StoreProvider from "./Stores";
import {Home , Detail} from './Screens'
import { COLORS } from './constants';

const Stack = createStackNavigator();
function App() {
    useEffect(() => {
      I18nManager.allowRTL(false)
      SplashScreen.hide();
    }, [])
    return useObserver(() =>
    <StoreProvider>
      <SafeAreaProvider>
        <StatusBar backgroundColor={COLORS.primary} />
        <SafeAreaView style={{ backgroundColor: COLORS.primary}}/>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName={'Home'}>

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />

            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      </StoreProvider>  
  );
};


export default App;
