import React, { useState } from "react";
import { View } from "react-native";
import { ButtonText, ButtonContainer } from "../styles/ButtonStyles";
import CreateFast from "./CreateFast";

export default function FastInput(props) {
  const [modal, setModal] = useState(false);

  return (
    <View>
      <ButtonContainer
        onPress={() => setModal(true)}
        backgroundColor={props.backgroundColor}
      >
        <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
      </ButtonContainer>
      <CreateFast modal={modal} />
    </View>
  );
}
