import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import firebaseConfig from "./config";
import Home from "./Home";

firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const App: React.FC = () => {
  // const [posts, usePosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(user !== null);
    });
  }, []);

  return (
    <View style={styles.container}>
      {!isLoggedIn ? <Text>Login please</Text> : <Home />}
    </View>
  );
};

export default App;
