import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FarmStackParamList } from '@/types';
const Stack = createStackNavigator<FarmStackParamList>();
// Screens

import Goals from '@screens/Goals';
import Farm from '@screens/Farm';

export default function GoalsRouter() {
  return (
    <Stack.Navigator initialRouteName="Goals">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Goals"
        component={Goals}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Farm"
        component={Farm}
      />
    </Stack.Navigator>
  );
}
