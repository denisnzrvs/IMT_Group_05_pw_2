import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World from Group 05: Lidziya Kamynina!</Text>
      <Text>This is my Lidziya Kamynina first React Native application!</Text>
      <Image
        source = {require('/Users/lidiakamunina/mobProject/assets/event.png')}
        style={styles.tinyicon} />
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
    height: 200,
    width: 200,
  },
});
