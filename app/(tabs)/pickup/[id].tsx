import { addCartItem } from "@/firebase/firebaseCartAPI";
import { useLocalSearchParams } from "expo-router";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";

// Enforces a type with a guaranteed string label
type Tile = {
    label: string;
};

// Now using Tiles, allows for dynamic selection based on the [id]
const tileSets: Record<string, Tile[]> = {
    steakres: [{ label: "Filet Dinner" }, { label: "T-Bone Dinner" }, { label: "Hanger Dinner" }, { label: "Short Rib Dinner" }],
    sushires: [{ label: "California Roll" }, { label: "Rainbow Roll" }, { label: "Sashimi Sampler" }, { label: "Miso Soup" }],
    seafoodres: [{ label: "Fried Shrimp Basket" }, { label: "Lobster Spaghetti" }, { label: "Mahi Mahi Dinner" }, { label: "Ahi Tuna Salad" }],
    britishpub: [{ label: "Fish and Chips" }, { label: "Bangers and Mash" }, { label: "Shepherd's Pie" }, { label: "Veal Cutlet" }],
    indianres: [{ label: "Butter Chicken" }, { label: "Chicken Biryani" }, { label: "Chicken Curry" }, { label: "Naan Basket" }],
    vietres: [{ label: "Steak Pho" }, { label: "Pork Banh Mi" }, { label: "Fresh Spring Roll" }, { label: "Shrimp Fried Rice" }, { label: "Lemongrass Chicken" }],
};

export default function PickupDetailScreen() {
    // Gets parameters from current route
    const { id, label } = useLocalSearchParams<{ id: string, label?: string }>();

    // Makes array of Tile objects based on the provided id
    const tiles: Tile[] = id ? tileSets[id] || [] : [];

    // Adds to cart on press
    async function handlePress(tileLabel: string) {
        try {
            await addCartItem(tileLabel.toLowerCase());
            Alert.alert("Added to cart", tileLabel);
        } catch (err) {
            console.error(err);
            Alert.alert("Error", "Failed to add item to cart");
        }
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 20, backgroundColor: "#323232", flexGrow: 1 }}>
            <Text style={{ fontSize: 26, marginBottom: 10, color: "#f0f0f0" }}>
                {label?.toUpperCase()}
            </Text>

            {tiles.map((tile, index) => (
                <Pressable
                    key={index}
                    onPress={() => handlePress(tile.label)}
                >
                    <View
                        style={{
                            padding: 20,
                            backgroundColor: "#ddcba4",
                            borderRadius: 16,
                        }}
                    >
                        <Text style={{ fontSize: 18 }}>{tile.label}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    );
}
