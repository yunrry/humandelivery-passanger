/* Todo 페이지의 상위 네비게이션 부분 */
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../css/CalendarDataStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types';
type ToDoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ToDo'>;

const CalendarNave = () => {
  const nav = useNavigation<ToDoScreenNavigationProp>();
  return (
    <View style={styles.calendarNav}>
      <Image
        source={require('../assets/icons/AppLogo.png')}
        style={styles.SmallLogo}
      />
      <TouchableOpacity
        onPress={() => nav.navigate('CategoryList')}
        style={styles.categoryBtnBack}>
        <Image
          source={require('../assets/icons/Category.png')}
          style={styles.categoryBtn}
        />
      </TouchableOpacity>
    </View>
  );
};
export default CalendarNave;
