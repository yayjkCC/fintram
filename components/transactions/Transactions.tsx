import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { HomeView, StyledButton, WhiteText } from "../../common-styled";
import { dummyTransactions } from "../../constants";
import { HistoryLink, TransactionCard, Line1 } from "./transactions-styled";
import { TransactionType } from "./transactions-types";

const Transactions: React.FC = () => {
  const navigation = useNavigation();

  const renderItem = (value: { item: TransactionType }) => (
    <TransactionCard>
      <Line1>
        <WhiteText>{value.item.entity}</WhiteText>
        <WhiteText>{`${value.item.type === "credit" ? "Cr." : "Db:"} ${
          value.item.amount
        }`}</WhiteText>
      </Line1>
      <WhiteText>{value.item.date}</WhiteText>
    </TransactionCard>
  );

  return (
    <HomeView>
      <StyledButton onPress={() => navigation.navigate("TransactionsAdd")}>
        <WhiteText>Add New</WhiteText>
      </StyledButton>
      <HistoryLink>
        <WhiteText>View History</WhiteText>
      </HistoryLink>
      <FlatList
        data={dummyTransactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </HomeView>
  );
};

export default Transactions;
