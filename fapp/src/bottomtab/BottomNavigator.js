import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Details from '../screens/Details';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            <Image
              source={require('../images/home2.jpg')}
              style={styles.loginstyle}
            />;
          },
        }}
      />
      <Tab.Screen
        name="signup"
        component={Signup}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            <Image
              source={require('../images/login.png')}
              style={{height: 30, width: 30, tintColor: color}}
            />;
          },
        }}
      />
      <Tab.Screen
        name="details"
        component={Details}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            <Image
              source={require('../images/login.png')}
              style={{height: 30, width: 30, tintColor: color}}
            />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  loginstyle: {width: 24, height: 24},
});
