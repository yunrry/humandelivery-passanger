/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Rout from './src/router';
import { UserProvider } from 'context/UserContext';


export default function App() {
  return (


        <Rout />


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});