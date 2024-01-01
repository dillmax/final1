/* eslint-disable prettier/prettier */
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '445352939975-rm2p2agf4jufssvkuj0lk49o35o05b9i.apps.googleusercontent.com',
});

const GoogleSignInButton = ({onPress}) => {
  const onGoogleLinkButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      Alert.alert('Success!', 'You have Google signed in!');
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      Alert.alert('Error!', error.message);
      console.log(error);
    }
  };

  return (
    <Button
      title="Google Sign-In"
      onPress={() =>
        onGoogleLinkButtonPress().then(() =>
          console.log('Signed in with Google!'),
        )
      }
    />
  );
};

export default GoogleSignInButton;
