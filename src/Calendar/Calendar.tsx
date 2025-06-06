import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CalendarData from './CalendarData'; // 달력 데이터
import styles from '../css/CalendarDataStyles'; // 달력 스타일
import { ScrollView } from 'react-native-gesture-handler';

const currentDate = new Date();

interface CalendarProps {
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  selectedDate: string;
}

// 현재 날짜를 기반으로 초기 상태 설정
const initialYear = currentDate.getFullYear(); // 현재 연도
const initialMonth = currentDate.getMonth() + 1; // 현재 월 (getMonth()는 0부터 시작하므로 +1)
const initialDay = currentDate.getDate(); // 현재 일

console.log('현재연도:', initialYear);
console.log('현재월:', initialMonth);
console.log('현재일:', initialDay);

const Calendar: React.FC<CalendarProps> = ({
  setSelectedDate,
  selectedDate,
}) => {
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);
  // const [day, setDay] = useState(initialDay); 일 단위는 아직 사용하지 않음

  const handlePrevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <View style={styles.backGround}>
      <ScrollView>
        <View style={styles.calendarBar}>
          <TouchableOpacity onPress={handlePrevMonth}>
            <Text style={styles.MonthMoveBtn}>{'◂'}</Text>
          </TouchableOpacity>
          <Text style={styles.monthText}>{`${year}년 ${month}월`}</Text>
          <TouchableOpacity onPress={handleNextMonth}>
            <Text style={styles.MonthMoveBtn}>{'▸'}</Text>
          </TouchableOpacity>
        </View>
        <CalendarData
          year={year}
          month={month}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
      </ScrollView>
    </View>
  );
};
export default Calendar;
