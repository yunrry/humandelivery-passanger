import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Home: {
    backgroundColor: '#FFF0E6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // 로고 영역
  LogoImageView: {
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'white',
    // 로고의 위치를 고정
    position: 'absolute',
    top: 170,
  },
  Logo: {
    width: 200,
    height: 54,
  },
  LogoImage: {
    width: 140,
    height: 130,
    marginTop: 20,
  },

  // 로그인 영역
  LoginView: {
    padding: 10,
    margin: 10,
    //backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    // 위치를 고정
    position: 'absolute',
    bottom: 170,
  },
  KakaoLogin: {
    backgroundColor: '#F9EB00',
    padding: 10,
    margin: 5,
    width: 325,
    height: 55,
    borderRadius: 15,
    lineHeight: 40,
    justifyContent: 'center', // 추가: 수직 정렬을 위해 justifyContent 사용
    alignItems: 'center', // 추가: 수평 정렬을 위해 alignItems 사용
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // x:offset, y:offset
    shadowOpacity: 0.5, //투명도
    shadowRadius: 5,
    elevation: 2, // for Android
  },
  KakaoLoginText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'semibold',
  },
  GoogleLogin: {
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    width: 325,
    height: 55,
    borderRadius: 15,
    lineHeight: 40,
    justifyContent: 'center', // 추가: 수직 정렬을 위해 justifyContent 사용
    alignItems: 'center', // 추가: 수평 정렬을 위해 alignItems 사용
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // x:offset, y:offset
    shadowOpacity: 0.5, //투명도
    shadowRadius: 5,
    elevation: 2, // for Android
  },
  GoogleLoginText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'semibold',
  },

  // 임시 탭 영역
  buttonStyle: {
    backgroundColor: 'white',
    padding: 10,
    //위치를 고정
    position: 'absolute',
    bottom: 50,
    borderRadius: 15,
    lineHeight: 40,
    justifyContent: 'center', // 추가: 수직 정렬을 위해 justifyContent 사용
    alignItems: 'center', // 추가: 수평 정렬을 위해 alignItems 사용
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // x:offset, y:offset
    shadowOpacity: 0.5, //투명도
    shadowRadius: 5,
    elevation: 2, // for Android
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
