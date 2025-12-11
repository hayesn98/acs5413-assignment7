import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

// Custom back button component for the map screen
export default function BackButton() {
    const router = useRouter();

    return (
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, color: "#f0f0f0" }}>Back</Text>
        </TouchableOpacity>
    );
}
