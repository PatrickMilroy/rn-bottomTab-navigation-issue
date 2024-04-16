## Purpose
The purpose of this repo is for demonstrating and testing for https://github.com/react-navigation/react-navigation/issues/11942

## Usage

Inital setup for running a React Native app https://reactnative.dev/docs/environment-setup?guide=native

Run `yarn && cd ios && pod install`


## Replicating the Bottom Tab navigator issue

NB to reliably reproduce the issue, the app needs to be started from cold i.e not inactive in the background 

To replicate the issue as described in https://github.com/react-navigation/react-navigation/issues/11942

1. Boot the RN application
```
yarn start
```
And select `i - run on iOS`

2. On the `Login` Screen, which has no bottom tab navigator or header rendered, press the `Login` button, which then navigates to the `Home` screen, which has both the Bottom Tab Navigator and Header rendered.

3. Observe the position of the Bottom Tab Navigator. The bottom tab navigator will be cut-off, appearing below the viewable area of the screen. This is particularly notable on smaller devices such as the iPhone SE(3)

4. Either:
   i. Send the app to the background and re-open; or
   ii. Navigate to the "Settings" screen in the top right and then go back. This screen is defined outside of the Tab Navigator
Note that the Bottom Tab Navigator now appears in its desired location.

## Other notables

1. This issue does not appear to affected Android devices, only iOS
2. This issue did not affect an earlier release of RN (0.70.8 for my production app)
3. Adjusting the `y` size of the header component directly affects the position of the Bottom Tab navigator. This is can be achived in a number of ways
   i. using `SafeAreaInsets` to calculate the marginTop for `AppHeader.tsx`
   ii. Adjusting the padding in `AppHeader.tsx`
   iii. Un-commenting the image in `AppHeader.tsx`
4. Adding `'Home'` to the array `routesToHideHeader` causes the bottom tab navigator to behave as intended
```
  const routesToHideHeader = ['', 'Login', 'Home'];
```
5. Commenting out the early empty return in `AppHeader.tsx` also resolves the issue, with the side-effect of having the header appear on the `Login Screen`
```
  // if (routesToHideHeader.includes(routeName)) {
  //   return <></>;
  // }
```