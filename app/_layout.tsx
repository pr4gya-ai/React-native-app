import React from "react";
import "../global.css";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const properties = [
  {
    id: '1',
    title: 'Modern Villa',
    city: 'Mumbai',
    price: '₹1.2Cr'
  },
  {
    id: '2',
    title: 'Sea View Flat',
    city: 'Mumbai',
    price: '₹85L'
  },
  {
    id: '3',
    title: 'Studio Loft',
    city: 'Bangalore',
    price: '₹32L'
  },
];

export default function RootLayout() {
  return (
    <SafeAreaView className="bg-white p-4 flex-1">
      <View>
        <Text>Build a Full Stack Mobile App and Publish to App Store</Text>

        <TextInput placeholder="Enter your name"
          placeholderTextColor="gray"
          style={{ borderWidth: 1, borderColor: "gray", padding: 10, marginTop: 10 }}
        />

        <TouchableOpacity
          onPress={() => alert("Search button pressed!")}
          style={{ backgroundColor: "#2563EB", padding: 10, marginTop: 10, alignItems: "center", borderRadius: 5 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Search
          </Text>
        </TouchableOpacity>

      </View>
      <FlatList data={properties} keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <View
          style={{ padding: 12, backgroundColor: "#f9f9f9", 
          marginBottom: 10, borderRadius: 10 }}> 
            <Text style={{ fontWeight: "bold" }}>
              {item.title}
            </Text>

            <Text style={{ color: "#666" }}>
              {item.city}
            </Text>

            <Text style={{ color: "#2563EB" }}>
              {item.price}
            </Text>
          </View>
        )}
        />
    </SafeAreaView >
  );
}