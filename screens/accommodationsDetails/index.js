import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import { getPost } from "../../src/graphql/queries";

import styles from "./styles";
import DetailedPost from "../../components/detailedPost";

const AcomodationDetailsScreen = (props) => {
  const [post, setPost] = useState([]);
  const route = useRoute();

  //console.log(post);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResullts = await API.graphql(
          graphqlOperation(getPost, {
              id: route.params.postId,
          })
        );
        setPost(postResullts.data.getPost);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      <DetailedPost post={post} />
    </View>
  );
};

export default AcomodationDetailsScreen;
