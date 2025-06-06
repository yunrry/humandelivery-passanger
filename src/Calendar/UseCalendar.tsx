/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * 날짜로 달력 표현하기
 * 이 파일 무슨 코드였더라
 */

import React from 'react';

const DATE_MONTH_FIXER = 1;
const CALENDER_LENGTH = 35;
const DEFAULT_TRASH_VALUE = 0;
const DAY_OF_WEEK = 7;
const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

export const UseCalendar = () => {
  //useState로 currentDate(현재 날짜) 관리. 초기 값은 현재 날짜 new Date()
  const [currentDate, setCurrentDate] = React.useState(new Date());
  // 현재 날짜 currentDate를 가져와 해당 월의 총 일수를 구한다.
  

  /**
   * currentDate.getDay()는 현재 날짜의 요일을 반환(0부터 시작하므로 일요일은 0, 월요일은 1).
   * Math.max(0, currentDate.getDay() - 1)은 현재 달의 시작 요일 전까지의 일수를 계산
   * 만약 달의 첫 날이 화요일이면, 이전 달의 마지막 두 일(일요일과 월요일)이 필요
   */
  const prevDayList = Array.from({
    length: Math.max(0, currentDate.getDay() - 1),
  }).map(() => DEFAULT_TRASH_VALUE);

  /**
   * Array.from({ length: totalMonthDays })를 사용하여 현재 달의 일수만큼 배열을 생성하고, 각 날짜를 1부터 시작하여 매핑
   */


  


  /**
   * 훅 반환 값
   * weekCalendarList는 주 단위로 분할된 달력 데이터,
   * currentDate는 현재 날짜,
   * setCurrentDate는 날짜를 설정하는 함수
   */
  return {

    currentDate: currentDate,
    setCurrentDate: setCurrentDate,
  };
};
