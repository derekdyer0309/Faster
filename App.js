import React, { useState } from "react";
import { View } from "react-native";

import FastInput from "./components/FastInput";
import FastList from "./components/FastList";
import AppTitle from "./components/Title";
import UserName from "./components/Name";

import { MaterialIcons } from '@expo/vector-icons'; 

import { 
  Container, 
  TitleBar,
  Avatar } from "./styles/ContainerStyles";

export default function App() {
  return (
    <View>
      <Container>
        <TitleBar>
          <Avatar source={require('./assets/images/user.png')}/>
          <AppTitle text="Welcome Back,"/>
          <UserName text="Derek"/>
          <MaterialIcons name="menu" size={24} color="black" style={{position: 'absolute', right:20, top: 5}}/>
        </TitleBar>
        <FastInput
          text="Add Fast"
          textColor="#ffffff"
          backgroundColor="#3c4560"
        />
        {/* <FastList /> */}
      </Container>
    </View>
  );
}
