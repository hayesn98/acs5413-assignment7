import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";

// Default region should not be used, but is set to New York as a failsafe
const DEFAULT_REGION = {
    latitude: 40.71335,
    longitude: -74.00686,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
};

export default function MapScreen() {
    // Gets parameters from current route
    const params = useLocalSearchParams<{ latitude?: string; longitude?: string }>();

    // Sets up region with the parameters and a proper zoom amount
    const region: Region = {
        latitude: params.latitude ? Number(params.latitude) : DEFAULT_REGION.latitude,
        longitude: params.longitude ? Number(params.longitude) : DEFAULT_REGION.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    };

    // Displays map screen with the information set above
    return (
        <View style={{ flex: 1 }}>
            <MapView
                key={`${region.latitude},${region.longitude}`}
                style={StyleSheet.absoluteFillObject}
                provider={PROVIDER_GOOGLE}
                region={region}
            >
                <Marker coordinate={region} />
            </MapView>
        </View>
    );
}
