import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <View>
        <Text>Build a Full Stack Mobile App and Publish to App Store</Text>
      </View>
    </SafeAreaView>
  );
}