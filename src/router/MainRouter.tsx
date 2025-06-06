import 'react-native-gesture-handler';
import { TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '@/types';
import { DataProvider } from 'context/DataContext';
import ToDo from 'screens/ToDo';
import CategoryList from 'components/CategoryList';
import CategorySetting from 'components/CategorySetting';
import RouterStyles from '../css/RouterStyles';

const Stack = createStackNavigator<RootStackParamList>();
// const Recyclebin = require('../assets/icons/Recyclebin.png');
const BackArrow = require('../assets/icons/BackArrow.png');

const AddCategoryButton: React.FC<{ navigation: any }> = ({ navigation }) => (
  <TouchableOpacity
    style={RouterStyles.iconBackGround}
    onPress={() =>
      navigation.navigate('CategorySetting', {
        category: null,
        isGoal: false,
      })
    }>
    <Text style={{ fontSize: 18, alignSelf: 'center' }}>+</Text>
  </TouchableOpacity>
);
/* */
const BackButton: React.FC<{ navigation: any }> = ({ navigation }) => (
  <TouchableOpacity
    style={RouterStyles.iconBackGround}
    onPress={() => navigation.goBack()}>
    <Image source={BackArrow} style={{ width: 22, height: 22 }} />
  </TouchableOpacity>
);

const MainRouter = () => {
  return (
    <DataProvider>

          <Stack.Navigator initialRouteName="ToDo">
            <Stack.Screen
              name="ToDo"
              component={ToDo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CategoryList"
              component={CategoryList}
              options={({ navigation }) => ({
                title: 'Categorie',
                // Header 블록에 대한 스타일
                headerStyle: {
                  backgroundColor: '#FFF0E6',
                },
                // 타이틀 텍스트의 스타일
                headerTitleStyle: {
                  fontWeight: 'normal',
                  fontSize: 20,
                },
                // 타이틀을 가운데 정렬
                headerTitleAlign: 'center',
                headerRight: () => (
                  <AddCategoryButton navigation={navigation} />
                ),
                headerLeft: () => <BackButton navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="CategorySetting"
              component={CategorySetting}
              options={({ navigation }) => ({
                title: 'CategorySetting', // Header 블록에 대한 스타일
                headerStyle: {
                  backgroundColor: '#FFF0E6',
                },
                // 타이틀 텍스트의 스타일
                headerTitleStyle: {
                  fontWeight: 'normal',
                  fontSize: 20,
                },
                // 타이틀을 가운데 정렬
                headerTitleAlign: 'center',
                headerLeft: () => <BackButton navigation={navigation} />,
              })}
            />
          </Stack.Navigator>
        
    </DataProvider>
  );
};

export default MainRouter;
