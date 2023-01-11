import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from "./suggestionRow";

const DestinationSearchScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          navigation.navigate("Guests", { viewport: details.geometry.viewport });
        }}
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: "AIzaSyDykPBEkn7ZM5c5CJsdnc1P3vokOIH778Q",
          language: "en",
        }}
        fetchDetails
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
