import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResults from "../screens/searchResults";
import SearchResultsMap from "../screens/searchResultsMap";
import { useRoute } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  const route = useRoute();
  const { guests } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f15454",
        tabBarIndicatorStyle: {
          backgroundColor: "#f15454",
        },
      }}
    >
      <Tab.Screen name={"list"}>
        {() => <SearchResults guests={guests} />}
      </Tab.Screen>
      <Tab.Screen name={"map"}>
        {() => <SearchResultsMap guests={guests} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
