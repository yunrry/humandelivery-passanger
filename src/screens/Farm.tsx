/* eslint-disable @typescript-eslint/no-unused-vars */
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { FarmStackParamList } from '@/types';

// Define Props for the Farm component
type FarmScreenNavigationProp = StackNavigationProp<FarmStackParamList, 'Farm'>;
type FarmScreenRouteProp = RouteProp<FarmStackParamList, 'Farm'>;

interface FarmProps {
  navigation: FarmScreenNavigationProp;
  route: FarmScreenRouteProp;
}

const Farm: React.FC<FarmProps> = ({ navigation, route }) => {
  const initialIndex = route?.params?.initialIndex ?? -1;

  return (
    <SafeAreaView style={styles.BaseContainer}>
      <View style={styles.BorderContainer}>
        <Text style={styles.Title}>MY FARM</Text>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BaseContainer: {
    backgroundColor: '#rgb(255, 250, 245)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  BorderContainer: {
    backgroundColor: 'white',
    height: 1000,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 50,
  },
  scrollView: {
    height: 5000,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    width: 375,
  },
  Row: {
    width: 340,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 5,
  },
  Title: {
    color: 'black',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 26,
    marginLeft: 20,
  },
});

export default Farm;
