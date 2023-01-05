import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "space-between"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
    },
    ageTag: {
        fontWeight: "bold",
    },
    ageTagDescription: {
        color: "#7e7e7e",
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#676767",
        justifyContent: "center",
        alignItems: "center",
    },
    inputValue: {
        marginHorizontal: 15,
        fontSize: 16,
    },
    buttonText: {
        fontSize: 20,
        color: "#676767",
    },
    searchButton: {
        height: 50,
        marginBottom: 20,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#f15454",
    },
    searchButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
});

export default styles;
