import React, { ReactText } from "react";
import styled from "styled-components/native";
import {
  Ionicons,
  AntDesign,
  EvilIcons,
  Feather,
  FontAwesome,
  Entypo,
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

const PickerStyle = styled.Picker<{ icon: boolean }>`
  color: white;
  flex-grow: 1;
  margin: 0;
  padding: 0;
  margin-left: ${(props) => (props.icon ? "16px" : "0px")};
  height: 24px;
`;

// render iCon method
const renderIcon: (
  iconFamily: "ion" | "ant" | "evil" | "feather" | "fa" | "entypo" | undefined,
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
    default:
      return <Entypo name={iconName} size={size} color={color} />;
  }
};

const PickerF: React.FC<{
  icon: boolean;
  value: ReactText;
  iconFamily?: "ion" | "ant" | "evil" | "feather" | "fa" | "entypo";
  iconName?: string;
  color?: string;
  onValueChange: (itemValue: ReactText, itemIndex: number) => void;
  editable?: boolean;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
}> = ({
  icon,
  iconFamily,
  iconName,
  color = "white",
  value,
  onValueChange,
  style,
  children,
}) => {
  return (
    <TextInputContainer style={style}>
      {icon && renderIcon(iconFamily, iconName, color)}
      <PickerStyle selectedValue={value} onValueChange={onValueChange} icon>
        {children}
      </PickerStyle>
    </TextInputContainer>
  );
};

export default PickerF;
