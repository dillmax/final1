/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('User signed up:', userCredential.user);
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default SignupForm;
