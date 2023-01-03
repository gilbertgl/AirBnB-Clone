import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import HomeScreen from "./screens/home";
import SearchResultsScreen from "./screens/searchResults";

import Post from "./components/post";

import feed from "./assets/data/feed";

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];
export default function App() {
  return (
    <>
      <StatusBar barStyle={"dark"} />
      <SafeAreaView>
        {/* <HomeScreen/> */}
        {/* <Post post={post1} /> */}
        <SearchResultsScreen/>
      </SafeAreaView>
    </>
  );
}
