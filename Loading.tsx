import React from "react";
import { ActivityIndicator, View } from "react-native";

const Loading: React.FC = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Loading;
