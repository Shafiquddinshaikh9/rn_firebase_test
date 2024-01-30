import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {Auth} from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      {/* <Button
        style={styles.btn}
        mode="text"
        textColor="white"
        onPress={() => console.log('Pressed')}>
        Login
      </Button> */}

      <Text
        style={styles.link}
        onPress={() => {
          // navigation.navigate('signup');rr
        }}>
        Create new account?
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 60,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  btn: {
    height: 60,
    width: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontSize: 25,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
