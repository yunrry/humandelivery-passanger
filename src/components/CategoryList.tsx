/** 카테고리 리스트 화면 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';
import {
  RootStackParamList,
  CategoryDetail,
  GoalCategoryDetail,
} from '@/types';

type CategoryListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CategoryList'
>;

const CategoryList: React.FC = () => {
 

  return (
    <View style={styles.container}>
      <View style={styles.App}>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0E6',
    flexDirection: 'row',
  },
  /* 둥근 모달 스타일 */
  App: {
    flex: 4,
    backgroundColor: '#FDF5EF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 }, // x:offset, y:offset
    shadowOpacity: 0.5, //투명도
    shadowRadius: 5,
    elevation: 15, // for Android
  },
  /** categoryItem을 감싸는 View*/
  categoryItemContainer: {
    marginTop: 40,
  },
  categoryItem: {
    backgroundColor: '#F4E7DF',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    width: 350,
    alignItems: 'center',
  },
});

export default CategoryList;
