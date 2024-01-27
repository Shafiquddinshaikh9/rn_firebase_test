import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Signup from './screens/Signup';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
const AppNavigator = () => {
  const [user, setUser] = useState();
  console.log(user);
  const onAuthStateChanged = user => setUser(user);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        {!user ? (
          <>
            <Stack.Screen
              name="signup"
              component={Signup}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <Stack.Screen name="home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
