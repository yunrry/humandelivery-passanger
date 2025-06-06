import React from 'react';
import {} from 'react-native';
import {
  ToDoItem,
  GoalCategoryDetail,
  CategoryDetail,
  Category,
  User,
} from '../types';

import { fetchNewData } from 'utils/dataUtils';

// DB todos 업데이트 함수
export const addTodoInCategory = async (
  user: User | null,
  setData: React.Dispatch<
    React.SetStateAction<{
      categories: Category[];
    } | null>
  >,
  data: { categories: Category[] } | null,
  category: GoalCategoryDetail | CategoryDetail,
  newTodo: ToDoItem,
  selectedDate: string,
  isExistingData: boolean,
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (isExistingData && data) {
    console.log('Updating category data for', category.categoryName);

    const updatedCategories = data.categories.map(cat => {
      if (cat.categoryId === category.categoryId) {
        console.log(`${selectedDate} : <${cat.categoryName}>에 todo 추가!`);
        return { ...cat, todos: [...cat.todos, newTodo] };
      }
      return cat;
    });

    const newData = {
      categories: updatedCategories,
    };
    setShowInput(false);
    setData(newData);
    fetchNewData(user?.id, selectedDate, newData);
  } else {
    const newCategory: Category = {
      categoryName: category.categoryName,
      categoryId: category.categoryId,
      completed: false,
      todos: [newTodo],
    };

    const allCategories = data?.categories ?? [];

    const newCategories = [...allCategories, newCategory];

  }
};
