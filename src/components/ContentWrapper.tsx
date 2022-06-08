import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import globalStyles from '../constants/globalStyles';

const ContentWrapper = ({ children }: { children?: React.ReactNode }) => (
  <SafeAreaView>
    <ScrollView style={globalStyles.container} contentContainerStyle={globalStyles.content}>
      {children}
    </ScrollView>
  </SafeAreaView>
);

export default ContentWrapper;
