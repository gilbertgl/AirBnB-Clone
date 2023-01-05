import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from "react-native";
import Router from './navigation/router';

export default function App() {
  return (
    <>
      <StatusBar barStyle={"dark"} />
      <Router />
    </>
  );
}
