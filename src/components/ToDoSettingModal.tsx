import { useTodoData } from 'hooks/todoDataHooks';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Modal from 'react-native-modal';

interface ToDoSettingModalProps {
  todoId: string;
  todoTitle: string;
  selectedDate: string;
  setEditingTodoId: (type: string) => void;
  setEditedTodoName: (type: string) => void;
}

const ToDoSettingModal: React.FC<ToDoSettingModalProps> = ({
  todoId,
  todoTitle,
  selectedDate,
  setEditingTodoId,
  setEditedTodoName,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const { handleDeleteTodo } = useTodoData(selectedDate); // 커스텀 훅 사용

  const handleEditButton = (todoId: string) => {
    setEditingTodoId(todoId);
    setModalVisible(false);
    setEditedTodoName(todoTitle);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.TodoDetail}>{'● ● ●'}</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{todoTitle}</Text>
            <View style={styles.modalActions}>
              <Button
                title="수정하기"
                onPress={() => handleEditButton(todoId)}
                color="#0000ff"
              />
              <Button
                title="삭제하기"
                onPress={() => {
                  handleDeleteTodo(todoId);
                  setModalVisible(!isModalVisible);
                }}
                color="#ff0000"
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#FDF5EF',
  },
  TodoDetail: {
    fontSize: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalActions: {
    flexDirection: 'row',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuIcon: {
    marginRight: 10,
  },
  menuLabel: {
    fontSize: 16,
  },
});

export default ToDoSettingModal;
