/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

interface SettingProps {
  navigation: any;
}

const Setting: React.FC<SettingProps> = ({ navigation }) => {
  return (
    <View>
      <Text> Setting </Text>
    </View>
  );
};

export default Setting;
