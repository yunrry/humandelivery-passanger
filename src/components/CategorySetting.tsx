import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import styles from '../css/CategorySettingStyles';
import {
  CategoryDetail,
  GoalCategoryDetail,
  RootStackParamList,
} from '../types';

import { useUser } from 'context/UserContext';
import OptionList from './OptionList';
import RouterStyles from '../css/RouterStyles';

type CategorySettingRouteProp = RouteProp<
  RootStackParamList,
  'CategorySetting'
>;

const Recyclebin = require('../assets/icons/Recyclebin.png');
/**
 * 카테고리 생성, 수정, 삭제 컴포넌트
 */

const CategorySetting: React.FC = () => {
  

  return (
    <View style={styles.backGround}>
      
    </View>
  );
};

export default CategorySetting;
