import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FastInput from './components/FastInput';
import FastList from './components/FastList';

export default function App() {
  return (
    <View>
      <FastInput text="Add Fast" backgroundColor="#C0C0C0"/>
      <FastList/>
    </View>
  );
}
