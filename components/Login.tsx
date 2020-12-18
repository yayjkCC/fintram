import React from "react";
import * as Google from "expo-google-app-auth";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import firebase from "firebase";

const CenteredView = styled.View`
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

interface SuccessfullyAuthenticatedUser {
  idToken: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  type: "success";
  user: Google.GoogleUser;
  getBasicProfile?: any;
}

const Login: React.FC = () => {
  const isUserEqual = (
    googleUser: SuccessfullyAuthenticatedUser,
    firebaseUser: firebase.User | null,
  ) => {
    if (firebaseUser) {
      const { providerData } = firebaseUser;
      for (let i = 0; i < providerData.length; i += 1) {
        if (
          providerData[i]!.providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i]!.uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  const onSignIn = (googleUser: SuccessfullyAuthenticatedUser) => {
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken,
        );

        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((value) => {
            const profile: any = value.additionalUserInfo?.profile;
            firebase.database().ref(`/users/${value.user?.uid}`).set({
              gmail: value.user?.email,
              locale: profile.locale,
              first_name: profile.given_name,
              last_name: profile.family_name,
            });
          })
          .catch((error) => {
            // Handle Errors here.
            console.error(error);
          });
      } else {
        console.log("User already signed-in Firebase.");
      }
    });
  };

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "1087738175289-1cnpf92gmmp8lv9cd21qt1tu3moiv4hg.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        onSignIn(result);
        return result.accessToken;
      }
      return { cancelled: true };
    } catch (e) {
      console.log(e);
      return { error: true };
    }
  };

  return (
    <CenteredView>
      <TouchableOpacity onPress={signInWithGoogleAsync}>
        <Text>Sign in with google</Text>
      </TouchableOpacity>
    </CenteredView>
  );
};

export default Login;
