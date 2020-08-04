import React, { useState } from "react";
import { View } from "react-native";
import { ButtonText, ButtonContainer } from "../styles/ButtonStyles";
import CreateFast from "./CreateFast";

export default function FastInput(props) {

  const [modal, setModal] = useState(false);
    
  const toggleModal = (e) => {
    setModal(!modal);
    return modal
  };

  return (
    <View>
      <ButtonContainer
        onPress={addFast}
        backgroundColor={props.backgroundColor}
      >
        <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
      </ButtonContainer>
      <CreateFast modal={modal} toggle={toggleModal} />
    </View>
  );
}
