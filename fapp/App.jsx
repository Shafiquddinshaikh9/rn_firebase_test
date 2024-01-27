import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppNavigator from './src/AppNavigator';

const App = () => {
  return <AppNavigator />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
  },
});
