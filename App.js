import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World from Group 05: Denis Nazarovs!</Text>
<Text>This is my Denis Nazarovs first React Native application!</Text>
      <Image
      source = {require('./assets/favicon.png')}
      style={styles.tinyicon}
      />
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
  tinyicon: {
    height: 50,
    width: 50,
  },
});
