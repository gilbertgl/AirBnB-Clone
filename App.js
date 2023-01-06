import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from "react-native";
import Router from './navigation/router';
import { withAuthenticator } from 'aws-amplify-react-native';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <>
      <StatusBar barStyle={"dark"} />
      <Router />
    </>
  );
}

export default withAuthenticator(App);