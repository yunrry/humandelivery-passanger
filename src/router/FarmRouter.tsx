import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Farm from '@screens/Farm';
import { FarmStackParamList } from '@/types';
const Stack = createStackNavigator<FarmStackParamList>();
export default function FarmbRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Farm"
        component={Farm}
      />
    </Stack.Navigator>
  );
}
