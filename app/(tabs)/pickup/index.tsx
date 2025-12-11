import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

// Each tile on the first pickup screen
const tiles = [
    { id: "steakres", label: "Steak Restaurant", location: { latitude: 40.63713, longitude: -74.07557 }, image: { uri: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg" } },
    { id: "sushires", label: "Sushi Restaurant", location: { latitude: 40.58807, longitude: -73.67123 }, image: { uri: "https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg" } },
    { id: "seafoodres", label: "Seafood Restaurant", location: { latitude: 40.79062, longitude: -73.97246 }, image: { uri: "https://images.pexels.com/photos/3622477/pexels-photo-3622477.jpeg" } },
    { id: "britishpub", label: "British Pub", location: { latitude: 40.66774, longitude: -73.98734 }, image: { uri: "https://images.pexels.com/photos/1123250/pexels-photo-1123250.jpeg" } },
    { id: "indianres", label: "Indian Restaurant", location: { latitude: 40.76469, longitude: -73.01495 }, image: { uri: "https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg" } },
    { id: "vietres", label: "Vietnamese Restaurant", location: { latitude: 41.01381, longitude: -73.80395 }, image: { uri: "https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg" } },
];

export default function PickupScreen() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 20, backgroundColor: "#323232" }}>
            {/* Each tile is mapped to a format with text, image, and two buttons */}
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
                                pathname: "/pickup/[id]",
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
