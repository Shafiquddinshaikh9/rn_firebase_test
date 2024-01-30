import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Details = () => {
  const [user, setUser] = useState('');

  const logout = async () => {
    await AsyncStorage.removeItem('Email');
    console.log('logout');
  };
  const getasyncStorage = async () => {
    try {
      const useremail = await AsyncStorage.getItem('Email');
      setUser(useremail);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getasyncStorage();
  });
  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>{user ? user : 'Guest'}</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={logout}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#000',
    marginTop: 100,
    alignSelf: 'center',
  },
  loginBtn: {
    backgroundColor: 'gray',
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
});
