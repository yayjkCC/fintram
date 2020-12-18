import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import Analysis from "../Analysis";
import Settings from "../Settings";
import TransactionNavigator from "./TransactionNavigator";

const BottomTab = createBottomTabNavigator();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen
          name="Transactions"
          component={TransactionNavigator}
        />
        <BottomTab.Screen name="Analysis" component={Analysis} />
        <BottomTab.Screen name="Settings" component={Settings} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;