import React from 'react';
import { View, Text, TextInput as NativeTextInput, StyleSheet, Image } from 'react-native';
import { styleConstants } from '../constants/globalStyles';
import { Button } from './Button';
import { Gap } from './Gap';

export const AssetInput = ({
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
      <View style={styles.row}>
        <View style={styles.preview}>
          <Image source={{ uri: value }} style={styles.image} resizeMode={'contain'} />
        </View>
        <Gap gap={8}>
          <Button onPress={() => {}}>Select different asset</Button>
          <Button onPress={() => {}}>Replace current asset</Button>
        </Gap>
      </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  preview: {
    backgroundColor: styleConstants.cardBackground,
    borderRadius: styleConstants.borderRadius,
    padding: 20,
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  description: {
    marginTop: 8,
    fontSize: 12,
    color: styleConstants.secondaryText,
    paddingHorizontal: 10,
  },
});
