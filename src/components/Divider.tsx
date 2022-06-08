import React from 'react';
import { styleConstants } from '../constants/globalStyles';
import { StyleSheet, View } from 'react-native';

export const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: styleConstants.border,
  },
});
