import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { enableScreens } from 'react-native-screens';

import {createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNav';

import mealPrefReducer from './store/reducers/mealPref';

enableScreens();

const rootReducer = combineReducers({
  mealPrefs: mealPrefReducer
});
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
