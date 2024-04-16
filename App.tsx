
import React, {useEffect, useRef, useState} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {MainNavigationStack, MainStack} from './MainStackNavigation';
import {AppHeader} from './AppHeader';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavWrapper />
    </SafeAreaProvider>
  );
};

export default App;

const NavWrapper = () => {
  const navRef = useNavigationContainerRef<MainStack>();
  const routeNameRef = useRef<string>();
  const [ready, setIsReady] = useState(false);

  return (
    <>
      {ready && <AppHeader navRef={navRef} />}
      <NavigationContainer
        ref={navRef}
        onReady={() => {
          setIsReady(true);
          routeNameRef.current = navRef.current?.getCurrentRoute()?.name;
        }}
        onStateChange={async () => {
          const currentRouteName = navRef.current?.getCurrentRoute()?.name;

          routeNameRef.current = currentRouteName;
        }}>
        <MainNavigationStack />
      </NavigationContainer>
    </>
  );
};
