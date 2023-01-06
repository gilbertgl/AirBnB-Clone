import { Auth } from "aws-amplify";
import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from './styles';

const ProfileScreen = (props) => {

    const logout = () => {
        Auth.signOut();
    };

  return (
    <View style={styles.container}>
      <Pressable onPress={logout} style={styles.logoutButton}>
          <Text>Log Out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
