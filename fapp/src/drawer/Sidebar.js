import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Sidebar = () => {
  const [user, setUser] = useState('');

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
      <View style={{height: 5, width: '100%', backgroundColor: 'blue'}}></View>
      <Image
        source={require('../images/uicon.png')}
        style={{marginTop: 10, alignSelf: 'center', height: 80, width: 80}}
      />
      <Text
        style={{
          marginTop: 10,
          alignSelf: 'center',
          fontWeight: '700',
          fontSize: 20,
        }}>
        {user ? user : 'GUEST'}
      </Text>
      <FlatList
        data={[
          {icon: require('../images/login.png'), title: 'login'},
          {icon: require('../images/signup.png'), title: 'singup'},
        ]}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: '100%',
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
              }}>
              <Image
                source={item.icon}
                style={{marginLeft: 15, height: 24, width: 24}}
              />
              <Text style={{marginLeft: 15, fontSize: 16, color: '#000'}}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({});
