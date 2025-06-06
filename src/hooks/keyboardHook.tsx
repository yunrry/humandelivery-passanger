import { useEffect, useRef } from 'react';
import { TextInput, Keyboard } from 'react-native';

export const HandleKeyboard = (
  showInput: { [key: string]: boolean },
  onKeyboardHide: () => void,
) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        onKeyboardHide();
      },
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, [onKeyboardHide]);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  return inputRef;
};
