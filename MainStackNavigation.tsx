import React, {useContext, useEffect, useRef} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './HomeScreen';
import {NewsScreen} from './NewsScreen';
import {getIsAuthenticated} from './AuthContext';
import LoginScreen from './LoginScreen';
import {NavigatorScreenParams, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SettingsScreen from './SettingsScreen';

const NavigationTabs = () => {
  const Tab = createBottomTabNavigator<TabStack>();

  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'red',
        headerShown: false,
        tabBarStyle: {
          paddingTop: 12,
          marginBottom: 20,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        tabBarLabelStyle: {
          top: 10,
          fontFamily: 'Jost',
          fontSize: 11,
          fontWeight: navigation.isFocused() ? '600' : '500',
        },
        contentStyle: {backgroundColor: 'blue'},
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
};

export const MainNavigationStack = () => {
  const navigation = useNavigation<StackNavigationProp<MainStack>>();

  const isAuthed = getIsAuthenticated();
  // const isAuthed = true

  return <MemoisedStack isAuthed={isAuthed} />;
};

const MemoisedStack = React.memo(({isAuthed}: {isAuthed?: boolean}) => {
  const Stack = createNativeStackNavigator<MainStack>();

  console.log('Is Authed?:', isAuthed);

  

  return (
    <Stack.Navigator
      initialRouteName={isAuthed ? 'Dashboard' : 'Login'}
      screenOptions={{
        animation: 'slide_from_right',
        animationDuration: 200,
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}>
        <>
          <Stack.Screen name="Dashboard" component={NavigationTabs} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </>
    
    </Stack.Navigator>
  );
});

export type MainStack = {
  Login: undefined;
  Dashboard: NavigatorScreenParams<TabStack>;
  Settings: undefined;
  About: undefined;
  Feedback: undefined;
  FAQ: {previousPage?: string};
  Notifications: undefined;
  'Terms and conditions': undefined;
  'Privacy statement': undefined;
  'Registration Email': undefined;
  'DOB and State': undefined;
  Prizes: undefined;
  Address: undefined;
  'Avatar and Username': undefined;
};

export type TabStack = {
  Home: undefined;
  News: undefined;
};
