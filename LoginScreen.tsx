import React from 'react';
import {View, Button} from 'react-native';
import {login} from './AuthContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen = ({navigation}) => {

  const marginTop = useSafeAreaInsets().top;

  const handleLogin = () => {
    login();
    navigation.navigate('Dashboard');

  };

  return (
    <View style={{marginTop}}>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
