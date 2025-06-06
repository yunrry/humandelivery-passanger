// src/hooks/todoDataHooks.tsx

import { useEffect } from 'react';
import {
  fetchData,
  // fetchUserData,
  fetchNewData,
  updateGoalCategoryAchievements,
} from 'utils/dataUtils';
import { useUser } from 'context/UserContext';
import { useData } from '../context/DataContext';

export const useTodoData = (selectedDate: string) => {
  const { user } = useUser();
  const { data, setData } = useData();

  /* 로그인시 데이터베이스에 초기 사용자 데이터 or 샘플 데이터 패치*/
  // useEffect(() => {
  //   if (user) {
  //     fetchUserData(user.id);
  //   }
  // }, [user]);

  /* 데이터 베이스 없데이트 시 data state상태 변경*/


  /**
   * 투두 토글 핸들러 (CategoryTodos에 사용)
   */
  const handleToggleComplete = async (todoId: string, completed: boolean) => {
    if (!data) return;
    const newCategories = data.categories.map(category => ({
      ...category,
      todos: category.todos.map(todo =>
        todo.todo_id === todoId ? { ...todo, completed } : todo,
      ),
    }));

    const goalCategoryUpdates: { categoryId: string; increment: boolean }[] =
      [];

    newCategories.forEach(category => {
      const allTodosCompleted = category.todos.every(todo => todo.completed);
      if (allTodosCompleted !== category.completed) {
        category.completed = allTodosCompleted;
        if (category.categoryId[0] === 'G') {
          goalCategoryUpdates.push({
            categoryId: category.categoryId,
            increment: allTodosCompleted,
          });
        }
      }
    });

    const newData = { categories: newCategories };
    setData(newData);
    if (user) {
      await fetchNewData(user.id, selectedDate, newData);
    }

    // GoalCategoryDetail achievements 업데이트
    if (goalCategoryUpdates.length > 0) {
      if (user) {
        await updateGoalCategoryAchievements(user.id, goalCategoryUpdates);
      }
    }
  };

  /**
   * 투두 삭제 핸들러 (ToDoSetting에 사용)
   */
  const handleDeleteTodo = async (todoId: string) => {
    if (!data) return;
    const newCategories = data.categories.map(category => ({
      ...category,
      todos: category.todos.filter(todo => todo.todo_id !== todoId),
    }));
    const newData = { categories: newCategories };
    setData(newData);
    if (user) {
      fetchNewData(user.id, selectedDate, newData);
    }
  };

  /**
   * 투두 수정 핸들러 (ToDoSetting에 사용)
   */
  const handleEditTodo = async (todoId: string, editedTodo: string) => {
    if (!data) return;
    const newCategories = data.categories.map(category => ({
      ...category,
      todos: category.todos.map(todo =>
        todo.todo_id === todoId ? { ...todo, title: editedTodo } : todo,
      ),
    }));

    const newData = { categories: newCategories };
    setData(newData);
    if (user) {
      fetchNewData(user.id, selectedDate, newData);
    }
  };

  return {
    data,
    handleToggleComplete,
    handleDeleteTodo,
    handleEditTodo,
  };
};
