import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParams } from '../navigation/Main';
import ContentWrapper from '../components/ContentWrapper';
import globalStyles, { styleConstants } from '../constants/globalStyles';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Gap } from '../components/Gap';
import { Button } from '../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions, useNavigation } from '@react-navigation/native';

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'screens'>;
};

type ScreenListItem = {
  name: string;
  title: string;
};

const ListItem = ({
  navigation,
  screen,
}: {
  navigation: StackNavigationProp<MainStackParams, 'screens'>;
  screen: ScreenListItem;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('edit-screen', { name: screen.name });
      }}
      style={styles.itemContainer}
    >
      <Gap gap={8}>
        <Text style={styles.title}>{screen.title}</Text>
        <Text style={styles.name}>{`Identifier: ${screen.name}`}</Text>
      </Gap>
    </TouchableOpacity>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

export const Screens = ({ navigation }: Props) => {
  const screens: ScreenListItem[] = [
    {
      name: 'test',
      title: 'Testing screen',
    },
    {
      name: 'welcome',
      title: 'Welcome!',
    },
  ];
  const renderItem = ({ item }: { item: ScreenListItem }) => (
    <ListItem navigation={navigation} screen={item} />
  );

  return (
    <ContentWrapper>
      <View style={globalStyles.centerList}>
        <Gap gap={24}>
          <Button
            onPress={() => {
              navigation.navigate('create-screen');
            }}
            align="flex-end"
            type="outline"
          >
            Create screen
          </Button>
          <FlatList
            data={screens}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={ItemSeparator}
          />
        </Gap>
      </View>
    </ContentWrapper>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: styleConstants.cardBackground,
    borderRadius: styleConstants.borderRadius,
  },
  separator: {
    marginTop: 16,
  },
  title: {
    fontSize: 18,
  },
  name: {
    fontSize: 12,
    color: styleConstants.secondaryText,
  },
});
