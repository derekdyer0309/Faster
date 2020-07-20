import React from "react";
import { View } from "react-native";
import { TitleText } from "../styles/ContainerStyles";

export default function AppTitle(props) {
  return (
      <TitleText>{props.text}</TitleText>
  )
}
