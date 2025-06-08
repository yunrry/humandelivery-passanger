/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

//hide warning
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

//stacks
import MainStack from './MainRouter';
import MypageStack from './MypageRouter';
import FarmStack from './FarmRouter';
import GoalsStack from './GoalsRouter';

const Tab = createBottomTabNavigator();

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Root = ({ navigation }: RouterProps) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
       >
        <Tab.Screen name="MainContent" component={MainStack} options={{}} />
        <Tab.Screen name="목표" component={GoalsStack} />
        <Tab.Screen name="팜" component={FarmStack} options={{}} />
        <Tab.Screen name="마이페이지" component={MypageStack} options={{}} />
      </Tab.Navigator>
    </View>
  );
};

export default Root;

//router/Root.js
