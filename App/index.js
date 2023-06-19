import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./config/Navigation";

export default () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )  
}