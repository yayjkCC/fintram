import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Transactions from "../components/views/transactions/Transactions";
import TransactionsAdd from "../components/views/transactions/TransactionAdd";

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
