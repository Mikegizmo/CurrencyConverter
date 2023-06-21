import React from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";

export default ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList 
        data={currencies}
        renderItem={({ item }) => {
          return (
            <RowItem 
              title={item}
              onPress={() => navigation.pop()}
            />
          )  
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => <View style={{ paddingBottom: insets.bottom }} />}
      />
    </View>
  )
}
