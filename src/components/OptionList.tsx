import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../css/CategorySettingStyles';

interface OptionListProps {
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
  fruitType: string;
  setFruitType: (type: string) => void;
  goalNum: number;
  setGoalNum: (num: number) => void;
}

const OptionList: React.FC<OptionListProps> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  fruitType,
  setFruitType,
  goalNum,
  setGoalNum,
}) => {
 

  return (
    <>
     
    </>
  );
};

export default OptionList;
