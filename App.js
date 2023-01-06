import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from "react-native";
import Router from './navigation/router';

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

export default function App() {
  return (
    <>
      <StatusBar barStyle={"dark"} />
      <Router />
    </>
  );
}
