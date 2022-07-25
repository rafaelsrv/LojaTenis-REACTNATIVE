
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts, Anton_400Regular} from '@expo-google-fonts/anton'
import Routesss from './src/router';


export default function App() {
  
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={true}/>
      <Routesss/>
      </>
  );
}




