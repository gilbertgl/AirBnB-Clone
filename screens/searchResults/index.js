import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../src/graphql/queries";

import Post from "../../components/post";

const SearchResultsScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResullts = await API.graphql(graphqlOperation(listPosts));
        setPosts(postResullts.data.listPosts.items);
      } 
      catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;
