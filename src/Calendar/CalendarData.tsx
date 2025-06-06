// src/Calendar/CalendarData.tsx
/**
 * 날짜 데이터로 달력 만들기
 * 일(day) 선택은 여기서
 */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../css/CalendarDataStyles'; // 달력 스타일

interface CalendarProps {
  year: number;
  month: number;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  selectedDate: string;
}


const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1
const currentYear = today.getFullYear();

const CalendarData: React.FC<CalendarProps> = ({
  year,
  month,
  setSelectedDate,
  selectedDate,
}) => {
  

  return (
    <View style={styles.calendarContainer}>
     
    </View>
  );
};

export default CalendarData;
