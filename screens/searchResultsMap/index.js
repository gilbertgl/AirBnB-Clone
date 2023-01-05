import React, { useState } from "react";
import { View, Text, FlatList, useWindowDimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps/lib/ProviderConstants";

import CustomMarker from "../../components/customMarker";
import PostCarouselItem from "../../components/postCarouselItem";

import styles from "./styles";
import places from "../../assets/data/feed";

const SearchResultsMap = (props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width;

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
        <FlatList
          data={places}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 30}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
