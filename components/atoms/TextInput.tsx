import React from "react";
import styled from "styled-components/native";
import {
  Ionicons,
  AntDesign,
  EvilIcons,
  Feather,
  FontAwesome,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  StyleProp,
  ViewStyle,
} from "styled-components/node_modules/@types/react-native/index";

const TextInputContainer = styled.View`
  padding: 12px;
  border: 1px solid #7666ec;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

const TextInputStyled = styled.TextInput<{ icon: boolean }>`
  color: white;
  margin-left: ${(props) => (props.icon ? "16px" : "0px")};
`;
// render iCon method
const renderIcon: (
  iconFamily:
    | "ion"
    | "ant"
    | "evil"
    | "feather"
    | "fa"
    | "entypo"
    | "fa5"
    | undefined,
  iconName: any,
  color: string | undefined,
) => JSX.Element = (iconFamily, iconName, color) => {
  const size = 16;
  switch (iconFamily) {
    case "ant":
      return <AntDesign name={iconName} size={size} color={color} />;
    case "entypo":
      return <Entypo name={iconName} size={size} color={color} />;
    case "evil":
      return <EvilIcons name={iconName} size={size} color={color} />;
    case "fa":
      return <FontAwesome name={iconName} size={size} color={color} />;
    case "feather":
      return <Feather name={iconName} size={size} color={color} />;
    case "ion":
      return <Ionicons name={iconName} size={size} color={color} />;
    case "fa5":
      return <FontAwesome5 name={iconName} size={size} color={color} />;
    default:
      return <Entypo name={iconName} size={size} color={color} />;
  }
};

const TextInputF: React.FC<{
  icon: boolean;
  value: string;
  iconFamily?: "ion" | "ant" | "evil" | "feather" | "fa" | "entypo" | "fa5";
  iconName?: string;
  color?: string;
  onChangeText?: (text: string) => void;
  editable?: boolean;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
}> = ({
  icon,
  iconFamily,
  iconName,
  color = "white",
  value,
  onChangeText,
  editable,
  placeholder,
  style,
}) => {
  return (
    <TextInputContainer style={style}>
      {icon && renderIcon(iconFamily, iconName, color)}
      <TextInputStyled
        icon={icon}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor="#959595"
      />
    </TextInputContainer>
  );
};

export default TextInputF;
