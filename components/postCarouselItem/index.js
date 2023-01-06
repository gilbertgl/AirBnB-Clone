import React from "react";
import { View, Image, Text, useWindowDimensions, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const PostCarouselItem = (props) => {
  const post = props.post;
  const navigation = useNavigation();
  const goToDetailedScreen = () => {
    navigation.navigate("AccommodationDetails", {postId: post.id});
  };
  const width = useWindowDimensions().width;
  return (
    <Pressable onPress={goToDetailedScreen} style={[styles.container, {width: width - 30}]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newPrice}>${post.newPrice} </Text>/ night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;
