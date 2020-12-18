import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import firebase from "firebase";
import firebaseConfig from "./config";
import Login from "./Login";
import Loading from "./Loading";
import RootNavigator from "./navigation/RootNavigator";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(user !== null);
    });
  }, []);

  return (
    <View style={styles.container}>
      {isLoggedIn === undefined && <Loading />}
      {isLoggedIn === false && <Login />}
      {isLoggedIn === true && <RootNavigator />}
    </View>
  );
};

export default App;
