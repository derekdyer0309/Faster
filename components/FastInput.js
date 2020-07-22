import React, { useState } from "react";
import { View } from "react-native";
import { ButtonText, ButtonContainer } from "../styles/ButtonStyles";
import CreateFast from "./CreateFast";

export default function FastInput(props) {
  const [modal, setModal] = useState(props.modal);
  
  console.log('This is modal from FastInput.js on load: ', modal)
  
  const addFast = (e) => {
    setModal(!modal);
    console.log('modal changed: ', modal)
  };

  return (
    <View>
      <ButtonContainer
        onPress={addFast}
        backgroundColor={props.backgroundColor}
      >
        <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
      </ButtonContainer>
      <CreateFast modal={modal} />
    </View>
  );
}
