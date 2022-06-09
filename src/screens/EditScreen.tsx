import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { AssetInput } from '../components/AssetInput';
import { Button } from '../components/Button';
import ContentWrapper from '../components/ContentWrapper';
import { Divider } from '../components/Divider';
import { DropdownInput } from '../components/DropdownInput';
import { Gap } from '../components/Gap';
import { TextInput } from '../components/TextInput';
import globalStyles from '../constants/globalStyles';
import { MainStackParams } from '../navigation/Main';

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'edit-screen'>;
};

export const EditScreen = (props: Props) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState(props.route?.params?.name);
  const [navigation, setNavigation] = useState<string | null>(null);

  const [editable1, setEditable1] = useState('Welcome to the World of Languages');
  const [editable2, setEditable2] = useState('E-mail');
  const [editableAsset, setEditableAsset] = useState('https://i.ibb.co/hLxBKjt/flatillustration.jpg');
  const [editable3, setEditable3] = useState('Password');
  const [editable4, setEditable4] = useState('Sign In');
  const [editable5, setEditable5] = useState('Forgotten password?');
  const [editable6, setEditable6] = useState('Sign Up');
  const [editable7, setEditable7] = useState('Verification');

  return (
    <ContentWrapper>
      <View style={[globalStyles.row, globalStyles.center]}>
        <View style={globalStyles.list}>
          <Gap gap={24}>
            <TextInput
              label="Title"
              value={title}
              onChange={setTitle}
              description="Will be visible to users in your app. Leave empty if you want to show nothing."
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
            <AssetInput label="Editable asset" value={editableAsset} onChange={setEditableAsset} />
            <TextInput label="Editable 1 - Title" value={editable1} onChange={setEditable1} />
            <TextInput label="Editable 2 - Email" value={editable2} onChange={setEditable2} />
            <TextInput label="Editable 3 - SignIn Button" value={editable3} onChange={setEditable3} />
            <TextInput label="Editable 4 - Forgotten Password" value={editable4} onChange={setEditable4} />
            <TextInput label="Editable 5 - Sign Up" value={editable5} onChange={setEditable5} />
            <TextInput label="Editable 6 - Sign Up Verification" value={editable6} onChange={setEditable6} />
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
