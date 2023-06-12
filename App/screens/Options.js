import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  text: {
    fontSize: 16,
    color: colors.text
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
})

export default () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
      </TouchableOpacity>

      <View style={styles.separator} />
      
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native by Example</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}