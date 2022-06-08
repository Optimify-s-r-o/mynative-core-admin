import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard } from '../screens/Dashboard';
import { useWindowDimensions, View } from 'react-native';
import { Assets as Assets } from '../screens/Assets';
import { Plugins } from '../screens/Plugins';
import { Templates } from '../screens/Templates';
import { Settings } from '../screens/Settings';
import { Screens } from '../screens/Screens';
import { Themes } from '../screens/Themes';
import { CreateScreen } from '../screens/CreateScreen';

export type MainStackParams = {
  dashboard: undefined;
  assets: undefined;
  screens: undefined;
  'create-screen': undefined;
  plugins: undefined;
  templates: undefined;
  settings: undefined;
};

const Drawer = createDrawerNavigator();

export const Main = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        drawerType: width > 768 ? 'permanent' : 'front',
      }}
    >
      <Drawer.Screen name="dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
      <Drawer.Screen name="screens" component={Screens} options={{ title: 'Screens' }} />
      <Drawer.Screen
        name="create-screen"
        component={CreateScreen}
        options={{ title: 'Create screen', drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen name="assets" component={Assets} options={{ title: 'Assets' }} />
      <Drawer.Group>
        <Drawer.Screen name="plugins" component={Plugins} options={{ title: 'Plugins' }} />
        <Drawer.Screen name="templates" component={Templates} options={{ title: 'Templates' }} />
      </Drawer.Group>
      <Drawer.Group>
        <Drawer.Screen name="settings" component={Settings} options={{ title: 'General' }} />
        <Drawer.Screen name="themes" component={Themes} options={{ title: 'Themes' }} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};
