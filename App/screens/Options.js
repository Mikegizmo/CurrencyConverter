import React from "react";
import Entypo from '@expo/vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Linking, Alert } from 'react-native';

import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert('Something went wrong.', 'Please try again later.');
  });
}

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem 
          title="Themes"
          onPress={() => alert("todo!")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />
        
        <RowItem 
          title="React Native Basics"
          onPress={
            () => openUrl('https://reactnativeschool.com/react-native-basics')
          }
          rightIcon={
            <Entypo name="export" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem 
          title="React Native By Example"
          onPress={() => openUrl('https://reactnativebyexample.com')}
          rightIcon={
            <Entypo name="export" size={20} color={colors.blue} />
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}