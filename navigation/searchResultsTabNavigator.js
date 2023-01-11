import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResults from "../screens/searchResults";
import SearchResultsMap from "../screens/searchResultsMap";
import { useRoute } from "@react-navigation/native";

import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../src/graphql/queries";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  const [posts, setPosts] = useState([]);
  const route = useRoute();
  const { guests, viewport } = route.params;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResullts = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              and: {
                maxGuests: {
                  ge: guests,
                },
                latitude: {
                  between: [viewport.southwest.lat, viewport.northeast.lat],
                },
                longitude: {
                  between: [viewport.southwest.lng, viewport.northeast.lng],
                },
              },
            },
          })
        );
        setPosts(postResullts.data.listPosts.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f15454",
        tabBarIndicatorStyle: {
          backgroundColor: "#f15454",
        },
        tabBarBounces: false,
      }}
    >
      <Tab.Screen name={"list"}>
        {() => <SearchResults posts={posts} />}
      </Tab.Screen>
      <Tab.Screen name={"map"}>
        {() => <SearchResultsMap posts={posts} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
