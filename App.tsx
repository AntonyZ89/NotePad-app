/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Notes} from './src/pages';
import {ThemeProvider} from 'react-native-elements';

export type RootStackParamList = {
  Home: undefined;
  Notes: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const theme = {
  Icon: {
    type: 'font-awesome',
    color: 'white',
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen
              options={{headerShown: false}}
              name={'Home'}
              component={Home}
            />
            <Stack.Screen
              name={'Notes'}
              component={Notes}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
