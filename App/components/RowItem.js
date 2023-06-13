import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

import colors from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 16,
    color: colors.text
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  },
})

export const RowItem = ({ title, onPress, rightIcon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {rightIcon}
    </TouchableOpacity>
  )
}

export const RowSeparator = () => <View style={styles.separator} />