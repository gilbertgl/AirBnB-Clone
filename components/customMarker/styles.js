import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  marker: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
  },
  markerSelected: {
    backgroundColor: "black",
    padding: 5,
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
  },
  markerText: {
    fontWeight: "bold",    
  },
  markerTextSelected: {
    fontWeight: "bold",
    color: "white",    
  }
});

export default styles;
