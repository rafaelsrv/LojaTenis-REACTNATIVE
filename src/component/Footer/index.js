import React from 'react';
import { View,Text,StyleSheet, ScrollView } from 'react-native';

import Shoes from '../Shoes';


export default function Footer() {
 return (

    <View>
   <Text style={styles.title}>VOcê também pode gostar</Text>
   <View style={{flexDirection:'row'}}>
    <ScrollView horizontal={true}>
    <Shoes img={require('../../assets/1.png')} cost="R$199,90" onClick={()=> navigation.navigate('Detail')}>
          Nike Bbob
        </Shoes>
        <Shoes img={require('../../assets/3.png')} cost="R$199,90" onClick={()=> navigation.navigate('Detail')}>
          Nike Bbob
        </Shoes>
        <Shoes img={require('../../assets/5.png')} cost="R$199,90" onClick={()=> navigation.navigate('Detail')}>
          Nike Bbob
        </Shoes>
    </ScrollView>
    
   </View>
    </View>
  );
}

const styles = StyleSheet.create({

    title:{
        fontSize:24,
        fontFamily:'Anton_400Regular',
        marginVertical:'2%',
        paddingHorizontal:'2%',
    }


})
