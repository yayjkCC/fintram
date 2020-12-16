import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./Home";
import firebase from "firebase";
import { firebaseConfig } from "./config";

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default function App() {
  const [posts, usePosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user !== null ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {!isLoggedIn ? <Text>Login please</Text> : <Home />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
