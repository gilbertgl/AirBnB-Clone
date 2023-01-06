import React from "react";
import { View, Image, Text, ScrollView } from "react-native";

import styles from "./styles";

const DetailedPost = (props) => {
  const post = props.post;
  return (
    <ScrollView style={styles.container}
      showsVerticalScrollIndicator={false}
    >
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
      <Text style={styles.totalPrice}>${post.totalPrice} Total</Text>
      <Text style={styles.longDescriptionText}>Description:</Text>
      <Text style={styles.longDescription}>
        {post.description}
      </Text>
    </ScrollView>
  );
};

export default DetailedPost;
