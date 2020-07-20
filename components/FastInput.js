import React from "react";
import { View } from "react-native";
import { ButtonText, ButtonContainer } from "../styles/ButtonStyles";

export default function FastInput(props) {
    return (
        <View>
        <ButtonContainer
          onPress={() => alert("Hi")}
          backgroundColor={props.backgroundColor}
        >
          <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
        </ButtonContainer>
      </View>
    )
}
