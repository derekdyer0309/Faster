import React from "react";
import { View } from "react-native";
import { NameText } from "../styles/ContainerStyles";

export default function UserName(props) {
  return (
      <NameText>{props.text}</NameText>
  );
}
