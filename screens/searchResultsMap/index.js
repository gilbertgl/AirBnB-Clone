import React, { useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps/lib/ProviderConstants";

import CustomMarker from "../../components/customMarker";
import PostCarouselItem from "../../components/postCarouselItem";

import styles from "./styles";
import places from "../../assets/data/feed";

const SearchResultsMap = (props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map((place) => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            coordinate={place.coordinate}
            price={place.newPrice}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={styles.corousel}>
          <PostCarouselItem post={places[0]}/>
      </View>
    </View>
  );
};

export default SearchResultsMap;
