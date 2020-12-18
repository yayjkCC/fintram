import React, { useRef, useState } from "react";
import { Animated, Button } from "react-native";
import firebase from "firebase";
import { HomeView } from "../../common-styled";
import { HomePots, TopView, HomePotFill, PotText } from "./home-styled";

const Home: React.FC = () => {
  const savingsFill = useRef(new Animated.Value(38)).current;
  const [current, setCurrent] = useState(38);

  const animateFn = () => {
    const random = Math.ceil(Math.random() * 100);
    setCurrent(random);
    const animation = Animated.timing(savingsFill, {
      toValue: random,
      useNativeDriver: true,
    });

    animation.start();
  };

  return (
    <HomeView>
      <TopView>
        <HomePots onPress={animateFn}>
          <HomePotFill
            fillColor="green"
            as={Animated.View}
            style={{
              transform: [
                {
                  translateY: savingsFill.interpolate({
                    inputRange: [1, 100],
                    outputRange: [-3, -300],
                  }),
                },
              ],
            }}
          />
          <PotText>Savings is {current} % of Rs. 1,00,000</PotText>
        </HomePots>
        <HomePots>
          <HomePotFill fillColor="red" />
          <PotText>Expenses</PotText>
        </HomePots>
      </TopView>
      <Button onPress={() => firebase.auth().signOut()} title="signout" />
    </HomeView>
  );
};

export default Home;
