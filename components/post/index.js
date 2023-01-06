import React from "react";
import { View, Image, Text, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const days = 7;

const Post = (props) => {
  const post = props.post;
  const navigation = useNavigation();
  const goToDetailedScreen = () => {
    navigation.navigate("AccommodationDetails", {postId: post.id});
  };


  return (
    <Pressable onPress={goToDetailedScreen} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
      </Text>
      <Text style={styles.totalPrice}>${post.newPrice * days} Total</Text>
    </Pressable>
  );
};

export default Post;
