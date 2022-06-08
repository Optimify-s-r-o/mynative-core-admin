import { StyleSheet } from 'react-native';
import colors from './colors';

export const styleConstants = {
  cardBackground: '#fff',
  borderRadius: 8,
  secondaryText: '#696990',
  border: '#dddde8',
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
    width: '100%',
    maxWidth: 500,
    marginHorizontal: 'auto',
  },
  list: {
    width: '100%',
    maxWidth: 500,
  },
  center: {
    marginHorizontal: 'auto',
  },
  padding: {
    padding: 24,
  },
  right: {},
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: styleConstants.secondaryText,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
