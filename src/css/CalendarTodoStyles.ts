// Calendar.tsx의 css
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /* 둥근 모달 스타일 */
  App: {
    backgroundColor: '#FDF5EF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 }, // x:offset, y:offset
    shadowOpacity: 0.5, //투명도
    shadowRadius: 5,
    elevation: 15, // for Android
  },

  backGround: {
    backgroundColor: '#FFF0E6',
    flexDirection: 'column',
    flex: 6,
  },

  /* 카데고리 별 Todo View */
  TodoBlock: {
    marginBottom: 20,
    marginLeft: 10,
    paddingBottom: 20,
    paddingLeft: 10,
  },

  /* Todo 카테고리 제목과 Todo 추가버튼을 가지는 View */
  TodoHeader: {
    flexDirection: 'row', // 영역 내 요소들을 가로로 정렬
    justifyContent: 'flex-start', // 왼쪽 시작
    backgroundColor: '#FDF5EF', // 나중에 삭제
  },

  TodoSubject: {
    flexDirection: 'row',
    backgroundColor: '#F4E7DF',
    // padding: 7,
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 38,
    fontWeight: '500',
  },

  categoryName: {
    width: 100,
    borderRadius: 20,
    paddingLeft: 20,
    textAlignVertical: 'center',
    fontSize: 15,
    fontWeight: '600',
  },

  addBtn: {
    // backgroundColor: 'white',
    borderRadius: 20,
    width: 35,
    height: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: 10,
    marginRight: 5,
    fontSize: 20,
    fontWeight: '400',
  },

  /* Todo와 TodoDetail을 space-between으로 설정 */
  TodoList: {
    flexDirection: 'row', // 영역 내 요소들을 가로로 정렬
    justifyContent: 'space-between', // 왼쪽 시작
    backgroundColor: '#FDF5EF', // 나중에 삭제
  },

  /* Todo 완료 버튼과 Todo 내용을 가진 View */
  Todo: {
    flexDirection: 'row',
  },

  TodoComplete: {
    padding: 10,
  },

  TodoContents: {
    padding: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  /* Todo 설정을 가진 View */
  TodoDetail: {
    fontSize: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },

  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  slideBar: {
    backgroundColor: 'rgba(255, 200, 200, 0.2)',
    height: 20,
    width: '97%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default styles;
