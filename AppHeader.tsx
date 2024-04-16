import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationContainerRefWithCurrent} from '@react-navigation/native';
import {MainStack} from './App';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components';

export const AppHeader = ({
  navRef,
}: {
  navRef: NavigationContainerRefWithCurrent<MainStack>;
}) => {
  const [routeName, setRouteName] = useState('');
  const marginTop = useSafeAreaInsets().top;

  useEffect(() => {
    const unsub = navRef.addListener('state', _ => {
      console.log(navRef.getCurrentRoute()?.name);
      setRouteName(navRef.getCurrentRoute()?.name || '');
    });
    return unsub;
  }, [navRef]);

  const routesToHideHeader = ['', 'Login'];

  console.log('>>>>>Route Name:', routeName);

  if (routesToHideHeader.includes(routeName)) {
    return <></>;
  }

  return (
    <>
      <HeaderContainer
      // style = {{marginTop}}
      >
        <Text style={{flex: 1, textAlign: 'center'}}>Header</Text>
        <View>
          {/* <ImageStyled
            source={{
              uri: `https://pat.thegame-dev.swmdigital.io/public-assets/OfficialPartner.png?${new Date().getTime()}`,
            }}
          /> */}
        </View>
        {routeName === 'Settings' ? (
          <GoBackView>
            <Text onPress={() => navRef.navigate('Dashboard')}>
              {'<-'} Go Back
            </Text>
          </GoBackView>
        ) : (
          <SettingsView>
            <Text onPress={() => navRef.navigate('Settings')}>Settings</Text>
          </SettingsView>
        )}
      </HeaderContainer>
    </>
  );
};

const ImageStyled = styled(Image)({
  resizeMode: 'contain',
  width: 40,
  height: 40,
  zIndex: 1,
});

const HeaderContainer = styled(View)({
  paddingTop: 10,
  alignItems: 'center',
  flexDirection: 'row', // Arrange children horizontally
  justifyContent: 'space-between', // Space between children
  paddingHorizontal: 20,
  width: '100%',
  backgroundColor: 'white',
  minHeight: 30,
});

const GoBackView = styled(View)({});

const SettingsView = styled(View)({});
