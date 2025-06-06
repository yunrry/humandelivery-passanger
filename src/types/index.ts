export interface DataStructure {
  User: UserData;
  CategoryDetail: CategoryDetail[];
  GoalCategoryDetail: GoalCategoryDetail[];
  ToDo: TodoDate;
}

export interface UserData {
  user_id: string;
  name: string;
  profile_picture: string;
}

export interface TodoDate {
  [date: string]: Category[];
}

export interface TodoDataStructure {
  ToDo: TodoDate;
}

export interface Category {
  categoryName: string;
  categoryId: string;
  completed: boolean; // This might represent if all todos in the category are completed
  todos: ToDoItem[]; // Array of ToDoItem
}

export interface ToDoItem {
  todo_id: string; // Ensuring each todo item has a unique ID for React keys and management
  title: string;
  completed: boolean;
}

export interface CategoryDetail {
  categoryName: string;
  categoryId: string;
}

export interface GoalCategoryDetail extends CategoryDetail {
  achievements: number;
  categoryId: string;
  categoryName: string;
  endDate: string;
  fruitType: string;
  goalCount: number;
  startDate: string;
}

// type GoalCategory = {
//   achievements: number;
//   categoryId: string;
//   categoryName: string;
//   endDate: string;
//   fruitType: string;
//   goalCount: number;
//   startDate: string;
// };

export interface ContextType extends Record<string, unknown> {
  startY: number;
}

export interface NavigationProps {
  navigation: {
    navigate: (route: string, params?: any) => void;
    goBack: () => void;
  };
}

export type RootStackParamList = {
  ToDo: undefined;
  CategoryList: undefined;
  CategorySetting: {
    category?: CategoryDetail | GoalCategoryDetail;
    isGoal: boolean;
  };
};

// Define the ParamList for the StackNavigator
export type FarmStackParamList = {
  Goals: undefined;
  Farm: { initialIndex: number };
};

/**
 * 사용자 객체의 형태를 정의합니다.
 */
export type User = {
  id: number | string;
  name: string | null;
  email: string;
  profileImageUrl: string | null;
};
