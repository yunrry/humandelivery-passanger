import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../css/HomeStyles';


//import { Image } from 'react-native-reanimated/lib/typescript/Animated';

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.Home}>
      <View style={styles.LogoImageView}>
        <Image
          source={require('../assets/icons/AppLogo.png')}
          style={styles.Logo}
        />
        <Image
          source={require('../assets/icons/AppLogoImage.png')}
          style={styles.LogoImage}
        />
      </View>

      {/* 로그인 버튼 */}
      <View style={styles.LoginView}>

      </View>
      {/* 홈 화면 이동 버튼 */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Root')}>
        <Text style={styles.buttonText}>Go to Tabs</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
