import { Stack } from "expo-router";

// Defines the layout for the delivery tab
export default function DeliveryStack() {
    return (
        // Sets formatting for the delivery tab
        <Stack
            screenOptions={{
                headerShown: true,
                animation: "slide_from_right",
                headerStyle: { backgroundColor: "#000000" },
                headerTitleStyle: { color: "#f0f0f0" },
                headerTintColor: "#f0f0f0",
            }}
        >
            {/* Outer and inner screens tied to delivery files */}
            <Stack.Screen
                name="index"
                options={{ title: "Delivery Restaurants" }}
            />
            <Stack.Screen
                name="[id]"
                options={{ title: "Menu" }}
            />
        </Stack>
    );
}
