import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = async () => {
    try {
      firestore()
        .collection('users')
        .where('email', '==', email)
        .get()
        .then(querySnapshot => {
          console.log(querySnapshot);
          if (querySnapshot.docs[0]._data !== null) {
            if (
              querySnapshot.docs[0]._data.email &&
              querySnapshot.docs[0]._data.password
            ) {
              console.log(querySnapshot.docs[0]._data.email);
              goToNextScreen();
            } else {
              Alert.alert('Please check email/password');
            }
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const goToNextScreen = async () => {
    await AsyncStorage.setItem('Email', email);
    navigation.navigate('details');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Email Id'}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Password '}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          if (email !== '' && password !== '') {
            handleLogin();
          } else {
            alert('Please Enter Data');
          }
        }}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <Text
        onPress={() => {
          navigation.navigate('signup');
        }}
        style={styles.link}>
        Create new account?
      </Text>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    marginTop: 100,
    alignSelf: 'center',
  },
  inputStyle: {
    paddingLeft: 20,
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 0.5,
    borderRadius: 10,
    width: '90%',
  },
  loginBtn: {
    backgroundColor: 'orange',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  link: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },
});
