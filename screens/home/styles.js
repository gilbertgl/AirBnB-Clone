import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
    positon: "relative",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    marginLeft: 25,
    lineHeight: 80,
  },
  button: {
    backgroundColor: "#fff",
    width: 170,
    height: 40,
    marginTop: 25,
    marginLeft: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width - 20,
    height: 50,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
    elevation: 2,
    zIndex: 0.5,
  },
  searchButtonText: {
    fontSize: 15,
    fontWeight: "bold",
  }
});

export default styles;
