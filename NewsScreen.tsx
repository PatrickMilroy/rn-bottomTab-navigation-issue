import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const NewsScreen: React.FC = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Text>News</Text>
      </SafeAreaView>
    </>
  );
};
