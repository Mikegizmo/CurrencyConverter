import React from "react";
import Options from "./screens/Options";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default () => {
  return (
    <SafeAreaProvider>
      <Options />
    </SafeAreaProvider>
  )  
}