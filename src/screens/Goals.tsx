/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  Button,
} from 'react-native';


interface GoalsProps {
  navigation: any;
}

const Goals: React.FC<GoalsProps> = ({ navigation }) => {
 
  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BaseContainer: {
    backgroundColor: '#rgb(255, 250, 245)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#rgb(255, 250, 245)',
  },
  BorderContainer: {
    backgroundColor: '#rgb(255, 255, 255)',
    width: 365,
    height: 545,
    borderRadius: 25,
    marginTop: 5,
    marginLeft: 5,
    padding: 27,
    paddingBottom: 50,
  },
  Row: {
    width: 340,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Title: {
    color: 'black',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 26,
    marginLeft: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  dday: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginRight: 'auto',
  },
});

export default Goals;
