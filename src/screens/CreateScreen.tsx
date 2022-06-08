import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from '../components/Text';
import { MainStackParams } from '../navigation/Main';
import ContentWrapper from '../components/ContentWrapper';
import { View } from 'react-native';
import globalStyles from '../constants/globalStyles';
import { Gap } from '../components/Gap';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import { DropdownInput } from '../components/DropdownInput';

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'create-screen'>;
};

export const CreateScreen = (props: Props) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [navigation, setNavigation] = useState<string | null>(null);
  const [template, setTemplate] = useState<string | null>('none');
  const [screen, setScreen] = useState<string | null>(null);

  useEffect(() => {
    if (template === 'none') setScreen(null);
  }, [template]);

  return (
    <ContentWrapper>
      <View style={globalStyles.centerList}>
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
            onChange={setNavigation}
            description=""
          />
          <DropdownInput
            label="Template"
            options={[
              {
                label: 'MyNative Default screens',
                value: 'MyNative',
              },
              {
                label: 'Some other template bundle',
                value: 'other',
              },
            ]}
            placeholder={{
              label: '- none -',
              value: 'none',
            }}
            onChange={setTemplate}
            description="If you wish to use one of the templates, select it. Otherwise leave the template set to none, the screen will be empty."
          />

          {template !== 'none' && (
            <DropdownInput
              label="Screen"
              options={[
                {
                  label: 'Sign up',
                  value: 'SignUp',
                },
                {
                  label: 'Sign in',
                  value: 'SignIn',
                },
              ]}
              placeholder={{}}
              onChange={setScreen}
              description="Select screen from the selected template which will be used."
            />
          )}
          <Button onPress={() => {}} align="flex-end">
            Create screen
          </Button>
        </Gap>
      </View>
    </ContentWrapper>
  );
};
