import React from "react";
import Home from "./screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default () => {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  )  
}