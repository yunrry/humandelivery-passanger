import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /* 캘린더 bar - CalendarNav.tsx */
  Nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4E7DF',
    padding: 10,
  },

  /* 뒤로가기 이미지 */
  Back: {
    width: 22,
    height: 22,
  },

  /* 투두 페이지 카테고리 목록 버튼 이미지 뒷배경 */
  categoryBtnBack: {
    backgroundColor: '#E7D3C5',
    width: 35,
    height: 35,
    borderRadius: 20,
    //이미지 가운데 정렬
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* 투두 페이지 카테고리 목록 버튼 이미지 */
  Recyclebin: {
    width: 23,
    height: 23,
  },
});

export default styles;
