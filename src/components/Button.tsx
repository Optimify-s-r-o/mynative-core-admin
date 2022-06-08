import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  FlexAlignType,
} from 'react-native';

import colors from '../constants/colors';
import { styleConstants } from '../constants/globalStyles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: styleConstants.borderRadius,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  containerOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },

  text: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: '500',
  },
  textOutline: {
    color: colors.primary,
  },
});

type ButtonProps = {
  onPress: () => void;
  children: string;
  type?: 'outline';
  align?: FlexAlignType;
};

export const Button = ({ onPress = () => {}, children = '', type, align }: ButtonProps) => {
  const containerStyles: StyleProp<ViewStyle>[] = [styles.container, { alignSelf: align }];
  const textStyles: StyleProp<TextStyle>[] = [styles.text];

  if (type === 'outline') {
    containerStyles.push(styles.containerOutline);
    textStyles.push(styles.textOutline);
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};
