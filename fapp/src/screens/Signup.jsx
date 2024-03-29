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

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const navigation = useNavigation();
  const handleSignup = async () => {
    const users = await firestore().collection('users').add({
      name,
      email,
      password,
      number,
    });

    console.log(users);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Name'}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Email Id'}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Password '}
        secureTextEntry={true}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Number'}
        keyboardType="number-pad"
        value={number}
        onChangeText={txt => setNumber(txt)}
      />
      <TouchableOpacity style={styles.loginBtn} onPress={handleSignup}>
        <Text style={styles.btnText}>signup</Text>
      </TouchableOpacity>
      <Text
        onPress={() => {
          navigation.navigate('login');
        }}
        style={styles.link}>
        already have account?
      </Text>
    </View>
  );
};

export default Signup;
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
