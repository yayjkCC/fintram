import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Transactions from "../components/transactions/Transactions";
import TransactionsAdd from "../components/transactions/TransactionAdd";

const Stack = createStackNavigator();

const TransactionNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsMain" component={Transactions} />
      <Stack.Screen name="TransactionsAdd" component={TransactionsAdd} />
    </Stack.Navigator>
  );
};

export default TransactionNavigator;
