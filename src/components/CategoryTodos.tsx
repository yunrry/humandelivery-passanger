import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import { Category } from '@/types';
import styles from '../css/CalendarTodoStyles';
import ToDoSettingModal from './ToDoSettingModal';
import { useTodoData } from 'hooks/todoDataHooks';

interface CategoryTodosProps {
  category: Category;
  selectedDate: string;
}

/**
 * 카테고리별 todo리스트 렌더링
 */
const CategoryTodos: React.FC<CategoryTodosProps> = ({
  category,
  selectedDate,
}) => {
  const { handleToggleComplete, handleEditTodo } = useTodoData(selectedDate); // 커스텀 훅 사용
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [editedTodoName, setEditedTodoName] = useState('');

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      async () => {
        if (editingTodoId) {
          await handleEditTodo(editingTodoId, editedTodoName);
          setEditingTodoId(null); // Exit editing mode
          console.log('handleEditTodo keyboardDidHide');
        }
      },
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, [editedTodoName, editingTodoId, handleEditTodo]);

  const handleEditTodoSubmit = async (todoId: string) => {
    if (editedTodoName.trim() !== '') {
      await handleEditTodo(todoId, editedTodoName);
      setEditingTodoId(null); // Exit editing mode
      setEditedTodoName('');
    }
  };

  if (!category.todos || category.todos.length === 0) {
    return null;
  }

  return (
    <>
      {category.todos.map(todo => {
        if (todo.todo_id.trim() === '') {
          return null;
        }

        return (
          <View key={todo.todo_id} style={styles.TodoList}>
            <View style={styles.Todo}>
              <TouchableOpacity
                onPress={() =>
                  handleToggleComplete(todo.todo_id, !todo.completed)
                }>
                <Text style={styles.TodoComplete}>
                  {todo.completed ? '✅' : '💧'}
                </Text>
              </TouchableOpacity>
              {editingTodoId === todo.todo_id ? (
                <TextInput
                  style={styles.TodoContents}
                  value={editedTodoName}
                  onChangeText={setEditedTodoName}
                  onSubmitEditing={() => handleEditTodoSubmit(todo.todo_id)}
                  autoFocus={true}
                />
              ) : (
                <Text style={styles.TodoContents}>{todo.title}</Text>
              )}
            </View>
            <ToDoSettingModal
              todoId={todo.todo_id}
              todoTitle={todo.title}
              selectedDate={selectedDate}
              setEditingTodoId={setEditingTodoId}
              setEditedTodoName={setEditedTodoName}
            />
          </View>
        );
      })}
    </>
  );
};

export default CategoryTodos;
