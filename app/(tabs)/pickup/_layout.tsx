import { Stack } from "expo-router";

// Defines the layout for the pickup tab
export default function PickupStack() {
    return (
        // Sets formatting for the pickup tab
        <Stack
            screenOptions={{
                headerShown: true,
                animation: "slide_from_right",
                headerStyle: { backgroundColor: "#000000" },
                headerTitleStyle: { color: "#f0f0f0" },
                headerTintColor: "#f0f0f0",
            }}
        >
            {/* Outer and inner screens tied to pickup files */}
            <Stack.Screen
                name="index"
                options={{ title: "Pickup Restaurants" }}
            />
            <Stack.Screen
                name="[id]"
                options={{ title: "Menu" }}
            />
        </Stack>
    );
}
