import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResults from "../screens/searchResults";
import SearchResultsMap from "../screens/searchResultsMap";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "#f15454",
        tabBarIndicatorStyle: {
            backgroundColor: "#f15454",
        }
    }}>
      <Tab.Screen name={"list"} component={SearchResults} />
      <Tab.Screen name={"map"} component={SearchResultsMap} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;