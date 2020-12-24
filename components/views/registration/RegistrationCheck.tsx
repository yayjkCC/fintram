import { Picker } from "@react-native-picker/picker";
import React, { ReactText, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { CenteredView, WhiteText } from "../../../common-styled";
import RootNavigator from "../../../navigation/RootNavigator";
import fetchUser from "../../../redux/actions/user";
import PickerF from "../../atoms/Picker";
import TextInputF from "../../atoms/TextInput";

const LockExpensesContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const RegistrationCheck: React.FC = () => {
  const dispatch = useDispatch();
  const { user, userError } = useSelector((state: any) => state.user);
  const [bankName, setBankName] = useState<string>("");
  const [savingsGoal, setSavingsGoal] = useState<string>("");
  const [expenditureLimit, setExpenditureLimit] = useState<string>("");
  const [bankType, setBankType] = useState<ReactText>("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // if user details are not present in the store fetch user details
    if (user.gmail === undefined || user.gmail === "") dispatch(fetchUser());
  }, [dispatch, user]);

  // if redux does not contain user object show a loading screen
  if (user === undefined || userError)
    return (
      <CenteredView>
        <ActivityIndicator color="#ffffff" size="large" />
        <WhiteText>Please wait for setup initialization</WhiteText>
      </CenteredView>
    );
  // if user registration is not complete show a registration screen
  if (!user.complete)
    return (
      <CenteredView>
        <WhiteText style={{ fontSize: 24, textAlign: "center" }}>
          Hello, {`${user.firstName} ${user.lastName}`}
        </WhiteText>
        <WhiteText style={{ fontSize: 16, textAlign: "center" }}>
          Please complete the registration process
        </WhiteText>
        <TextInputF
          icon
          iconFamily="ion"
          iconName="person"
          value={`${user.firstName} ${user.lastName}`}
          editable={false}
          style={{ width: "80%" }}
        />
        <TextInputF
          icon
          iconFamily="entypo"
          iconName="email"
          value={`${user.gmail}`}
          editable={false}
          style={{ width: "80%" }}
        />
        <TextInputF
          icon
          iconFamily="fa"
          iconName="building"
          value={bankName}
          onChangeText={(text) => setBankName(text)}
          style={{ width: "80%" }}
          placeholder="Primary Bank Nick Name"
        />
        <PickerF
          icon
          iconFamily="fa"
          iconName="money"
          value={bankType}
          onValueChange={(itemValue) => setBankType(itemValue)}
          style={{ width: "80%" }}
        >
          <Picker.Item label="Savings" value="savings" />
          <Picker.Item label="Current" value="current" />
        </PickerF>
        <TextInputF
          icon
          iconFamily="fa5"
          iconName="piggy-bank"
          value={savingsGoal}
          onChangeText={(text) => setSavingsGoal(text)}
          style={{ width: "80%" }}
          placeholder="Savings Goal"
        />
        <LockExpensesContainer>
          <WhiteText>Lock Expenses for primary bank account?</WhiteText>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={enabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setEnabled(!enabled)}
            value={enabled}
          />
        </LockExpensesContainer>
        {!enabled && (
          <TextInputF
            icon
            iconFamily="fa5"
            iconName="grip-lines"
            value={expenditureLimit}
            onChangeText={(text) => setExpenditureLimit(text)}
            style={{ width: "80%" }}
            placeholder="Expenditure Limit"
          />
        )}
      </CenteredView>
    );
  // Else Show the root navigator
  return <RootNavigator />;
};

export default RegistrationCheck;
