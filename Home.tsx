import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import { Animated, Button } from "react-native";
import firebase from "firebase";

interface PotFillProps {
  fillColor: string;
}

const HomeView = styled.View`
  background-color: #d3d3d3;
  flex-grow: 1;
  padding: 16px;
`;

const TopView = styled.View`
  flex-basis: 50%;
  flex-direction: row;
  justify-content: space-around;
`;

const HomePots = styled.TouchableOpacity`
  border: 0.5px solid lightpink;
  border-radius: 8px;
  margin: 8px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: white;
  height: 300px;
  overflow: hidden;
  width: 40%;
`;

const HomePotFill = styled.View<PotFillProps>`
  height: 100%;
  bottom: -100%;
  position: absolute;
  opacity: 0.5;
  background-color: ${(props) => props.fillColor};
  width: 100%;
`;

const PotText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin: 8px;
  text-align: center;
`;

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
