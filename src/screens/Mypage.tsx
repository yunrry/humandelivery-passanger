import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useUser } from '../context/UserContext';


interface MypageProps {
  navigation: any;
}

const Mypage: React.FC<MypageProps> = ({ navigation }) => {
  const { user, setUser } = useUser();

  // 카카오 로그아웃 버튼 핸들러 함수
  const handleLogout = async () => {
 
  };

  // 구글 로그아웃 버튼 핸들러 함수
  const handleGoogleSignOut = async () => {
  
  };

  return (
    <SafeAreaView style={styles.BaseContainer}>
      <Text style={styles.Title}>My Page</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home으로 돌아가기</Text>
      </TouchableOpacity>

      {/* 사용자 프로필 */}
      <Text>{user?.id}</Text>
      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>
      {user?.profileImageUrl && (
        <Image
          source={{
            uri: user?.profileImageUrl,
          }}
          style={styles.profileImg}
        />
      )}

      {/* 카카오 로그아웃 버튼 */}
      <TouchableOpacity style={styles.buttonStyle} onPress={handleLogout}>
        <Text style={styles.buttonText}>카카오 로그아웃</Text>
      </TouchableOpacity>
      {/* 구글 로그아웃 버튼 */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={handleGoogleSignOut}>
        <Text style={styles.buttonText}>구글 로그아웃</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BaseContainer: {
    backgroundColor: '#rgb(255, 250, 245)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  Title: {
    color: 'black',
    fontSize: 28,
    fontWeight: '800',
    marginVertical: 20,
    marginLeft: 20,
  },
  buttonStyle: {
    backgroundColor: 'grey',
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  profileImg: {
    width: 100,
    height: 100,
  },
});

export default Mypage;
