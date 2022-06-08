import { StyleSheet } from 'react-native';
import colors from './colors';

export const styleConstants = {
  cardBackground: '#fff',
  borderRadius: 8,
  secondaryText: '#696990',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 32,
  },
  content: {
    width: '100%',
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  centerList: {
    flex: 1,
    width: '100%',
    maxWidth: 500,
    marginHorizontal: 'auto',
  },
  right: {},
});
