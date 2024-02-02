import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';
const Details = () => {
  const [user, setUser] = useState('');
  const navigation = useNavigation();
  const logout = async () => {
    await AsyncStorage.removeItem('Email');
    console.log('logout');
    navigation.navigate('login');
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
  }, [user]);
  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>{user ? user : 'Guest'}</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={logout}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: 'rzp_test_uwTdEkc4mjtGzj',
            amount: '5000',
            name: 'Acme Corp',
            order_id: 'order_DslnoIgkIDL8Zt', //Replace this with an order_id created using Orders API.
            prefill: {
              email: 'gaurav.kumar@example.com',
              contact: '9191919191',
              name: 'Gaurav Kumar',
            },
            theme: {color: '#53a20e'},
          };
          RazorpayCheckout.open(options)
            .then(data => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch(error => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
        }}>
        <Text style={styles.btnText}>Buy now</Text>
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
