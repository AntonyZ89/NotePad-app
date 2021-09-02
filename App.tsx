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
import {Home, Note, NoteList} from './src/pages';
import {ThemeProvider} from 'react-native-elements';
import {NoteType} from './src/types';
import {NoteProvider} from './src/contexts/NoteContext';

export type RootStackParamList = {
  Home: undefined;
  Note?: {
    item: NoteType;
  };
  NoteList: undefined;
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
        <NoteProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
              <Stack.Screen
                options={{headerShown: false}}
                name={'Home'}
                component={Home}
              />
              <Stack.Screen
                options={{title: 'Notas'}}
                name={'NoteList'}
                component={NoteList}
              />
              <Stack.Screen
                options={{title: 'Nota'}}
                name={'Note'}
                component={Note}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NoteProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
