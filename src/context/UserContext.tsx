import { User } from '@/types';
import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Context 상태의 타입을 정의합니다.
 */
export type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

/**
 * 초기값으로 undefined를 가진 UserContext 생성합니다.
 */
const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

/**
 * 앱의 필요한 부분에 UserContext를 제공하는 Provider 컴포넌트입니다.
 * @param {UserProviderProps} props - 자식 노드를 포함하는 props 객체.
 */
export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * UserContext를 사용하는 커스텀 훅입니다. UserProvider 내부에서 사용해야 합니다.
 * @returns {UserContextType} 사용자 데이터와 setter 함수를 포함하는 UserContext 객체.
 */
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
