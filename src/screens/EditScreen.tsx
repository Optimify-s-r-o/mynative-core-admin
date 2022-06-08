import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParams } from '../navigation/Main';
import ContentWrapper from '../components/ContentWrapper';
import { View, Text } from 'react-native';
import globalStyles from '../constants/globalStyles';
import { Gap } from '../components/Gap';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import { DropdownInput } from '../components/DropdownInput';
import { Divider } from '../components/Divider';
import { AssetInput } from '../components/AssetInput';

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'edit-screen'>;
};

export const EditScreen = (props: Props) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState(props.route?.params?.name);
  const [navigation, setNavigation] = useState<string | null>(null);

  const [editable1, setEditable1] = useState('foo');
  const [editable2, setEditable2] = useState('bar');
  const [editableAsset, setEditableAsset] = useState('https://reactnavigation.org/img/spiro.svg');
  const [editable3, setEditable3] = useState('');

  return (
    <ContentWrapper>
      <View style={[globalStyles.row, globalStyles.center]}>
        <View style={globalStyles.list}>
          <Gap gap={24}>
            <TextInput
              label="Title"
              value={title}
              onChange={setTitle}
              description="Will be visible to users in your app."
            />
            <TextInput
              label="Unique name"
              value={name}
              onChange={setName}
              description="Will NOT be visible to the users in your map. It is used as unique identifier for the routing purposes."
            />
            <DropdownInput
              label="Navigation"
              options={[
                {
                  label: 'Portal',
                  value: 'Portal',
                },
                {
                  label: 'Unauthorized',
                  value: 'Auth',
                },
              ]}
              placeholder={{}}
              defaultValue={navigation}
              onChange={setNavigation}
              description=""
            />
            <Divider />
            <Text style={globalStyles.header}>Editables</Text>
            <TextInput label="Editable 1" value={editable1} onChange={setEditable1} />
            <TextInput label="Editable 2" value={editable2} onChange={setEditable2} />
            <AssetInput label="Editable asset" value={editableAsset} onChange={setEditableAsset} />
            <TextInput label="Editable 3" value={editable3} onChange={setEditable3} />
          </Gap>
        </View>

        <View style={globalStyles.padding}>
          <Button onPress={() => {}} align="flex-end">
            Save screen
          </Button>
        </View>
      </View>
    </ContentWrapper>
  );
};
