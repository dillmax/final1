/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import ManualSignInForm from '../components/RegisterSignup';
import GoogleSignInButton from '../components/GoogleSignup';

const Signupscreen = () => {
  return (
    <View>
      <ManualSignInForm />
      <GoogleSignInButton onPress={undefined} />
    </View>
  );
};

export default Signupscreen;