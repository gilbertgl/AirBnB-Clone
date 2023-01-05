import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 110,
    padding: 5,   
  },
  innerContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    aspectRatio: 1 / 1,
    resizeMode: "cover",
  },
  textContainer: {
    marginHorizontal: 10,
    flex: 1,
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
  newPrice: {
    fontWeight: "bold",
  },
});

export default styles;
