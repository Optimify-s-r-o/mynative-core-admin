import React from 'react';
import { SafeAreaView, ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import globalStyles from '../constants/globalStyles';

const ContentWrapper = ({
  children,
  stickyIndices,
  styles = [],
}: {
  children?: React.ReactNode;
  stickyIndices?: number[];
  styles?: StyleProp<ViewStyle>[];
}) => (
  <SafeAreaView>
    <ScrollView
      style={[globalStyles.container, ...styles]}
      contentContainerStyle={globalStyles.content}
      stickyHeaderIndices={stickyIndices}
    >
      {children}
    </ScrollView>
  </SafeAreaView>
);

export default ContentWrapper;
