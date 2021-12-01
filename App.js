import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World from Group 05 : Maryia Brauer! This is my Maryia Brauer first React Native application!</Text>
      <Image
        source = {require('./assets/imt.jpg')}
        style={styles.privet} />
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
  privet: {
    height: 400,
    width: 450,
  },
});
