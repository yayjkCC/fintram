import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/home/Home";
import Analysis from "../components/analysis/Analysis";
import Settings from "../components/settings/Settings";
import TransactionNavigator from "./TransactionNavigator";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Transactions" component={TransactionNavigator} />
      <BottomTab.Screen name="Analysis" component={Analysis} />
      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  );
};

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
