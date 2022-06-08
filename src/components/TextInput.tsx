import React from 'react';
import { View, Text, TextInput as NativeTextInput, StyleSheet } from 'react-native';
import { styleConstants } from '../constants/globalStyles';

export const TextInput = ({
  label,
  value,
  onChange,
  description,
}: {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  description?: string;
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <NativeTextInput style={styles.input} onChangeText={onChange} value={value} />
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    fontSize: 12,
    fontWeight: '500',
    color: styleConstants.secondaryText,
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: styleConstants.cardBackground,
    borderRadius: styleConstants.borderRadius,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  description: {
    marginTop: 8,
    fontSize: 12,
    color: styleConstants.secondaryText,
    paddingHorizontal: 10,
  },
});
