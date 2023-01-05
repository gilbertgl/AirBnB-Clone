import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";
import SearchResults from "../screens/searchResults";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={"Search Results"}
        component={SearchResults}
        options={{
          title: "Places avaliable",
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
