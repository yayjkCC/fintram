import styled from "styled-components/native";
import { PotFillProps } from "./home-types";

export const TopView = styled.View`
  flex-basis: 50%;
  flex-direction: row;
  justify-content: space-around;
`;

export const HomePots = styled.TouchableOpacity`
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

export const HomePotFill = styled.View<PotFillProps>`
  height: 100%;
  bottom: -100%;
  position: absolute;
  opacity: 0.5;
  background-color: ${(props) => props.fillColor};
  width: 100%;
`;

export const PotText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin: 8px;
  text-align: center;
`;
