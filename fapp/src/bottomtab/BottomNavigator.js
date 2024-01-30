import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Details from '../screens/Details';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="login" component={Login} />
      <Tab.Screen name="signup" component={Signup} />
      <Tab.Screen name="details" component={Details} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
