
import { Category, GoalCategoryDetail } from '@/types';

// DB 날짜 노드 업데이트 함수
export const fetchData = async (uid: string | number, selectedDate: string) => {
  try {
   
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
};

// 유저 데이터 패치 함수
// export const fetchUserData = async (uid: string | number) => {
//   const initialUserData = {
//     User: {
//       name: '',
//       profile_picture: '',
//     },
//     CategoryDetail: [
//       {
//         categoryName: '일상',
//         categoryId: 'N01',
//       },
//       {
//         categoryName: '운동',
//         categoryId: 'N02',
//       },
//     ],
//     GoalCategoryDetail: [],
//     ToDo: {},
//   };

//   try {
//     const userRef = databaseModule().ref(`${uid}`);
//     const snapshot = await userRef.once('value');

//     if (!snapshot.exists()) {
//       await userRef.set(initialUserData);
//       console.log('uid 노드를 추가했습니다.');
//     } else {
//       console.log('해당 uid 노드가 이미 존재합니다.');
//     }
//   } catch (error) {
//     console.error('Failed to fetch user data:', error);
//   }
// };

// DB 카테고리 노드 업데이트 함수
export const fetchNewData = async (
  uid: string | number | undefined,
  selectedDate: string,
  newData: { categories: Category[] },
) => {
  try {
   
  } catch (error) {
    console.error('Failed to update data in Firebase:', error);
  }
};

// 목표 카테고리 completed 업데이트 검사
export const updateGoalCategoryAchievements = async (
  uid: string | number,
  goalCategoryUpdates: { categoryId: string; increment: boolean }[],
) => {

};
