import React from 'react';
import { View, Text, TextInput as NativeTextInput, StyleSheet } from 'react-native';
import { styleConstants } from '../constants/globalStyles';
import RNPickerSelect from 'react-native-picker-select';

export const DropdownInput = ({
  label,
  placeholder,
  onChange,
  options,
  description,
}: {
  label: string;
  placeholder?:
    | {
        value: string | null;
        label: string;
      }
    | {};
  options: Array<{
    value: string | null;
    label: string;
  }>;
  onChange: (newValue: string) => void;
  description?: string;
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <RNPickerSelect
        onValueChange={onChange}
        placeholder={placeholder}
        items={options}
        style={{ inputWeb: styles.input }}
      />
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
    borderWidth: 0,
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
