/* 목표 페이지의 상위 네비게이션 부분 */
import React from 'react';
import { View, Image } from 'react-native';
import styles from '../css/CategoryNavStyles';

const CategoryNav = () => {
  return (
    <View style={styles.Nav}>
      <View style={styles.categoryBtnBack}>
        <Image
          source={require('../assets/icons/BackArrow.png')}
          style={styles.Back}
        />
      </View>
      <View style={styles.categoryBtnBack}>
        <Image
          source={require('../assets/icons/Recyclebin.png')}
          style={styles.Recyclebin}
        />
      </View>
    </View>
  );
};
export default CategoryNav;
