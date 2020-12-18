import styled from "styled-components/native";
import { primaryColor, accentColor } from "../constants";

export const HomeView = styled.View`
  background-color: ${primaryColor};
  flex-grow: 1;
  padding: 16px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${accentColor};
  padding: 16px;
  border-radius: 4px;
  justify-content: center;
  flex-direction: row;
  elevation: 5;
`;

export const WhiteText = styled.Text`
  color: white;
`;
