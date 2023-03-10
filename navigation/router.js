import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabNavigator from "./homeTabNavigator";
import DestinationSearchScreen from "../screens/destinationSearch";
import GuestsScreen from "../screens/guests";
import AccommodationDetails from "../screens/accommodationsDetails";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "Search your destination",
          }}
        />
        
        <Stack.Screen
          name={"Guests"}
          component={GuestsScreen}
          options={{
            title: "How many people?",
          }}
        />

        <Stack.Screen
          name={"AccommodationDetails"}
          component={AccommodationDetails}
          options={{
            title: "Accommodation Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
