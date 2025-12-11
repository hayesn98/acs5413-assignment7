import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

// Each tile on the first delivery screen
const tiles = [
    { id: "pizzaff", label: "Pizza Fast Food", location: { latitude: 40.81472, longitude: -73.00007 }, image: { uri: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg" } },
    { id: "burgerff", label: "Burger Fast Food", location: { latitude: 40.88316, longitude: -74.29085 }, image: { uri: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg" } },
    { id: "coffeeshop", label: "Coffee Shop", location: { latitude: 40.75460, longitude: -74.03230 }, image: { uri: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg" } },
    { id: "friedchicken", label: "Fried Chicken", location: { latitude: 40.75630, longitude: -74.17363 }, image: { uri: "https://images.pexels.com/photos/2833499/pexels-photo-2833499.jpeg" } },
    { id: "drinks", label: "Drinks", location: { latitude: 40.66113, longitude: -73.99708 }, image: { uri: "https://images.pexels.com/photos/1384039/pexels-photo-1384039.jpeg" } },
    { id: "tacoff", label: "Taco Fast Food", location: { latitude: 40.77224, longitude: -74.23100 }, image: { uri: "https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg" } },
];

export default function DeliveryScreen() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 20, backgroundColor: "#323232" }}>
            {/* Each tile is mapped to a format with text, image, and two buttons*/}
            {tiles.map((tile) => (
                <View
                    key={tile.id}
                    style={{
                        padding: 20,
                        backgroundColor: "#ddcba4",
                        borderRadius: 16,
                    }}
                >
                    <Text style={{ fontSize: 18, marginBottom: 10 }}>{tile.label}</Text>

                    <Image
                        source={tile.image}
                        style={{
                            width: "100%",
                            height: 150,
                            borderRadius: 12,
                            marginBottom: 12,
                        }}
                        resizeMode="cover"
                    />

                    <View style={{ flexDirection: "row", gap: 10 }}>
                        {/* Jumps to the id screen using the tile id */}
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                padding: 10,
                                backgroundColor: "#841617",
                                borderRadius: 8,
                                alignItems: "center",
                            }}
                            onPress={() => router.push({
                                pathname: "/delivery/[id]",
                                params: { id: tile.id, label: tile.label },
                            })}
                        >
                            <Text style={{ color: "white" }}>View Items</Text>
                        </TouchableOpacity>

                        {/* Jumps to the map screen using the tile location */}
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                padding: 10,
                                backgroundColor: "#8ca57d",
                                borderRadius: 8,
                                alignItems: "center",
                            }}
                            onPress={() =>
                                router.push({
                                    pathname: "/map",
                                    params: tile.location,
                                })
                            }
                        >
                            <Text style={{ color: "white" }}>See Location</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}
