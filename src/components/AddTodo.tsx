import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { ToDoItem, GoalCategoryDetail, CategoryDetail } from '../types';
import { useData } from '../context/DataContext';
import { useUser } from 'context/UserContext';
import { addTodoInCategory } from 'utils/addTodoInCategory';
import { HandleKeyboard } from 'hooks/keyboardHook';

interface AddTodoProps {
  category: GoalCategoryDetail | CategoryDetail;
  selectedDate: string;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
  showInput: { [key: string]: boolean };
}

const AddTodo: React.FC<AddTodoProps> = ({
  category,
  selectedDate,
  setShowInput,
  showInput,
}) => {
  const [newTodoText, setNewTodoText] = useState('');
  const { setData, data } = useData();
  const { user } = useUser();
  const inputRef = useRef<TextInput>(null);

  const handleAddTodo = async () => {
    if (newTodoText.trim() === '') {
      setShowInput(false);
      return;
    }

    const isExistingData = !!(
      data &&
      data.categories.some(cat => cat.categoryId === category.categoryId)
    );
    // Date.now()를 사용하여 고유한 ID를 생성하도록 변경
    const newId = `${category.categoryId}_${selectedDate}_${Date.now()}`;
    const newTodo: ToDoItem = {
      todo_id: newId,
      title: newTodoText,
      completed: false,
    };

    await addTodoInCategory(
      user,
      setData,
      data,
      category,
      newTodo,
      selectedDate,
      isExistingData,
      setShowInput,
    );
    setNewTodoText('');
  };

  HandleKeyboard(showInput, handleAddTodo);

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.TodoContents}
        placeholder="Add new todo..."
        value={newTodoText}
        onChangeText={setNewTodoText}
        onSubmitEditing={handleAddTodo}
        autoFocus={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  addBtn: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 60,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: 10,
    fontSize: 25,
    fontWeight: '400',
  },
  addText: {
    padding: 10,
  },
  TodoContents: {
    padding: 10,
    // textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default AddTodo;
