import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParams } from '../navigation/Main';
import ContentWrapper from '../components/ContentWrapper';
import { TextInput } from '../components/TextInput';
import { View, StyleSheet } from 'react-native';
import globalStyles from '../constants/globalStyles';
import { Button } from '../components/Button';
import { Gap } from '../components/Gap';

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'settings'>;
};

export const Settings = (props: Props) => {
  const [appName, setAppName] = useState('');
  const [bundleName, setBundleName] = useState('');

  return (
    <ContentWrapper>
      <View style={globalStyles.centerList}>
        <Gap gap={24}>
          <TextInput label="Application name" value={appName} onChange={setAppName} />
          <TextInput
            label="Bundle name"
            value={bundleName}
            onChange={setBundleName}
            description="Example: com.optimify.mynative"
          />
          <Button onPress={() => {}} align="flex-end">
            Save changes
          </Button>
        </Gap>
      </View>
    </ContentWrapper>
  );
};
