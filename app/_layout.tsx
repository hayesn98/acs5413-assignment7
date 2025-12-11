import { Stack } from "expo-router";

// Root layout for the application
export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="map" />
        </Stack>
    );
}
