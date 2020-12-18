import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { HomeView, StyledButton, WhiteText } from "../../common-styled";

const HistoryLink = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const TransactionCard = styled.View`
  elevation: 5;
  padding: 16px;
  background-color: #1c2754;
  margin: 8px 0;
  border-radius: 4px;
`;

const Line1 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const dummy = [
  {
    id: "1",
    type: "debit",
    amount: "1000",
    entity: "Amazon",
    date: "12th Jan 2021",
  },
  {
    id: "2",
    type: "debit",
    amount: "238",
    entity: "Janatha Provision Store",
    date: "10th Jan 2021",
  },
  {
    id: "3",
    type: "credit",
    amount: "7000",
    entity: "Hari",
    date: "4th Jan 2021",
  },
  {
    id: "4",
    type: "credit",
    amount: "35000",
    entity: "Cognitive Clouds",
    date: "31st Dec 2020",
  },
  {
    id: "5",
    type: "debit",
    amount: "565",
    entity: "Zomato",
    date: "31th Dec 2020",
  },
];

const Transactions: React.FC = () => {
  const navigation = useNavigation();
  return (
    <HomeView>
      <StyledButton onPress={() => navigation.navigate("TransactionsAdd")}>
        <WhiteText>Add New</WhiteText>
      </StyledButton>
      <HistoryLink>
        <WhiteText>View History</WhiteText>
      </HistoryLink>
      <FlatList
        data={dummy}
        renderItem={({ item }) => (
          <TransactionCard>
            <Line1>
              <WhiteText>{item.entity}</WhiteText>
              <WhiteText>{`${item.type === "credit" ? "Cr." : "Db:"} ${
                item.amount
              }`}</WhiteText>
            </Line1>
            <WhiteText>{item.date}</WhiteText>
          </TransactionCard>
        )}
        keyExtractor={(item) => item.id}
      />
    </HomeView>
  );
};

export default Transactions;
