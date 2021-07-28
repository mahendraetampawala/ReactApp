import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       

        <View style={styles.carcontainer}>
           <ImageBackground source={require('./assets/images/bmw.jpeg')}style={styles.image}/>
          <View style={styles.titles}>
          <Text style={styles.title}>BMW paradise</Text>
          <Text style={styles.subtitle}>DESIGNED BY</Text>
          <Text style={styles.subtitle}>MAHENDRA ETAMPAWALA</Text>
          </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  carcontainer: {
    width:'100%',
    height:'100%',

  },
  titles: {
    marginTop:'20%',
    width:'100%',
    alignItems:'center',

  },
  title: {
    fontSize:40,
    fontWeight:'600',
    color:'#FFFAFA',
  },
  subtitle: {
    fontSize:16,
    color:'#AFEEEE',
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    position:'absolute',

  }



});
