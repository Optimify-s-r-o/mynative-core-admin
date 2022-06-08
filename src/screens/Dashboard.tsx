import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from '../components/Text';
import { MainStackParams } from '../navigation/Main';
import ContentWrapper from '../components/ContentWrapper';

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'dashboard'>;
};

export const Dashboard = (props: Props) => {
  return (
    <ContentWrapper>
      <Text>asd</Text>
    </ContentWrapper>
  );
};
