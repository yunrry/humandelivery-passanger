import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Category } from '@/types';

interface DataContextProps {
  data: { categories: Category[] } | null;
  setData: React.Dispatch<
    React.SetStateAction<{ categories: Category[] } | null>
  >;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<{ categories: Category[] } | null>(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextProps => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
