import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#FDF5EF',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 }, // x:offset, y:offset
    shadowOpacity: 0.5, //투명도
    shadowRadius: 5,
    elevation: 15, // for Android
  },
  tabBarLabel: {
    fontSize: 15,
    fontWeight: 'semibold',
  },
});

export default styles;
