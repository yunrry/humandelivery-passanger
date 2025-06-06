// Calendar.tsx의 css
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    backgroundColor: '#FFF0E6',
  },
  Category: {
    flex: 1,
    marginTop: 20,
    paddingTop: 30,
    paddingHorizontal: 30,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#FDF5EF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 }, // x:offset, y:offset
    shadowOpacity: 0.5, //투명도
    shadowRadius: 5,
    elevation: 15, // for Android
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    margin: 15,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center', // 가로 정렬
    justifyContent: 'center', // 세로 정렬
    width: 150,
    height: 100,
  },
  selectedButton: {
    backgroundColor: '#DFE287',
  },
  toggleButtonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  CategoryDef: {
    padding: 10,
    marginBottom: 10,
    fontSize: 15,
    color: '#A36464',
    fontWeight: 'semibold',
    //backgroundColor: 'red',
  },

  // 카테고리 페이지 입력폼 제목
  FormDef: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
  },
  input: {
    height: 40,
    fontSize: 15,
    backgroundColor: 'white',
    borderRadius: 3,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center', // 가로 정렬
    justifyContent: 'center', // 세로 정렬
  },
  CategorySaveBtn: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 100,
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow
    shadowOpacity: 0.25, // iOS shadow
    shadowRadius: 3.84, // iOS shadow
    elevation: 5, // for Android
  },

  // 목표 카테고리 디자인
  StartDateSelect: {
    fontSize: 15,
    fontWeight: 'bold',
    //텍스트 수직 수평 정렬
    // textAlign: 'center',
  },

  disabledButton: {
    backgroundColor: '#ccc', // Or any other color indicating disabled state
    opacity: 0.5,
  },
});

export default styles;
