import React from "react";
import { View, FlatList } from "react-native";

import Post from "../../components/post";

import feed from "../../assets/data/feed";

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList data={feed} showsVerticalScrollIndicator={false} renderItem={({item}) => <Post post={item}/>} />
    </View>
  );
};

export default SearchResultsScreen;
