import React from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

import styles from "./styles";
import DetailedPost from "../../components/detailedPost";
import places from "../../assets/data/feed";


const AcomodationDetailsScreen = (props) => {
    const route = useRoute();
    const post = places.find(place => place.id == route.params.postId);

  return (
    <View style={styles.container}>
      <DetailedPost post={post} />
    </View>
  );
};

export default AcomodationDetailsScreen;
