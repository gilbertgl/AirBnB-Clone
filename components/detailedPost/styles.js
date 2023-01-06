import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 15,
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 16,
    color: "#5b5b5b",
  },
  description: {
    fontSize: 20,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },
  newPrice: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
  longDescriptionText: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24,
  },
  longDescription: {
    fontSize: 16,
    lineHeight: 24,
  }
});

export default styles;
