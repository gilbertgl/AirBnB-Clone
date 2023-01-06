import React, { useState } from "react";
import { View, Text, Pressable, ViewBase } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import style from "./styles";

const GuestsScreen = (props) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={styles.ageTag}>Adults</Text>
            <Text style={styles.ageTagDescription}>Ages 13 or above</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}
            >
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.inputValue}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.ageTag}>Children</Text>
            <Text style={styles.ageTagDescription}>Ages 2-12</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}
            >
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.inputValue}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.ageTag}>Infants</Text>
            <Text style={styles.ageTagDescription}>Under 2</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}
            >
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.inputValue}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View>
        <Pressable 
        onPress={() => navigation.navigate("Home", {
          screen: "Explore",
          params: {
            screen: "Search Results",
            params: {
              guests: adults + children,
            }
          }
        })}
        style={style.searchButton}>
          <Text style={style.searchButtonText}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestsScreen;
