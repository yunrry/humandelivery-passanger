// Calendar.tsx의 css
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /* 캘린더 전체 배경 - Calendar.tsx */
  backGround: {
    backgroundColor: '#FFF0E6',
    flex: 6,
  },

  /* 캘린더 bar - CalendarNav.tsx */
  calendarNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF0E6',
    padding: 10,
  },

  /* 투두 페이지 작은 로고 이미지 */
  SmallLogo: {
    width: 75,
    height: 20,
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
  categoryBtn: {
    width: 25,
    height: 25,
  },

  /* 달력 컨테이너 - CalendarData에서 사용 */
  calendarContainer: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  /* 달력 상단 바를 스타일링 */
  calendarBar: {
    flexDirection: 'row',
    justifyContent: 'center', // 가운데 정렬
    alignItems: 'center',
    marginBottom: 10,
  },

  /* 이전, 이후 달 이동 버튼 */
  MonthMoveBtn: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10, // 버튼 간 간격을 줄여줌
  },

  /* 2024년 N월 텍스트 */
  monthText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 10, // 버튼과 텍스트 간 간격을 줄여줌
    color: 'black',
  },

  /* 요일 이름 */
  dayNames: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  dayName: {
    width: 40,
    textAlign: 'center',
    fontWeight: 'semibold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 3,
  },

  /* 1, 2일... */
  dateNum: {
    textAlign: 'center',
    paddingTop: 2,
    fontSize: 12,
    color: 'black',
  },

  /* 1, 2일... 해당 달이 아닌 일... */
  noneDateNum: {
    textAlign: 'center',
  },

  /* 월 날짜 동그라미 */
  cell: {
    width: 30,
    height: 30,
    borderRadius: 20,
    textAlign: 'center',
    lineHeight: 40,
    backgroundColor: '#FDF5EF',
  },

  /* 월에 해당하지 않는 날짜 동그라미 */
  noneCell: {
    width: 35,
    height: 35,
    borderRadius: 20,
    textAlign: 'center',
    lineHeight: 40,
    backgroundColor: '#FFF',
  },

  /* 선택된 월 날짜 */
  selectedCell: {
    borderColor: '#E1602A',
    borderWidth: 3,
  },

  /* 오늘 날짜 */
  todayCell: {
    backgroundColor: '#DFE287',
  },
});

export default styles;
