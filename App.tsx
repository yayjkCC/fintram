import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import firebase from "firebase";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import firebaseConfig from "./config";
import Login from "./components/Login";
import Loading from "./components/Loading";
import { persistor, store } from "./components/redux/store";
import RegistrationCheck from "./components/RegistrationCheck";

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
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        <View style={styles.container}>
          {/* Show a loading screen until a login check is performed */}
          {isLoggedIn === undefined && <Loading />}
          {/* if user is logged out show a Login screen */}
          {isLoggedIn === false && <Login />}
          {/* if user is logged in show a Registration check screen */}
          {isLoggedIn === true && <RegistrationCheck />}
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
