import React from 'react';
import {View, Button} from 'react-native';
import {login} from './AuthContext';

const LoginScreen = ({navigation}) => {


  const handleLogin = () => {
    login();
    navigation.navigate('Dashboard');

  };

  return (
    <View style={{ paddingTop: 20}}>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
