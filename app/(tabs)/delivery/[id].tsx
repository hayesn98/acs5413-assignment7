import { addCartItem } from "@/firebase/firebaseCartAPI";
import { useLocalSearchParams } from "expo-router";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";

// Enforces a type with a guaranteed string label
type Tile = {
    label: string;
};

// Now using Tiles, allows for dynamic selection based on the [id]
const tileSets: Record<string, Tile[]> = {
    pizzaff: [{ label: "Pepperoni Pizza" }, { label: "Margherita Pizza" }, { label: "Cheese Pizza" }, { label: "Meat Lovers Pizza" }],
    burgerff: [{ label: "Plain Burger" }, { label: "Cheeseburger" }, { label: "Mushroom and Swiss" }],
    coffeeshop: [{ label: "Black Coffee" }, { label: "Flat White" }, { label: "Espresso" }, { label: "Cappuccino" }],
    friedchicken: [{ label: "Chicken Basket" }, { label: "Chicken Nuggets" }, { label: "Chicken Fingers" }, { label: "BBQ Sauce" }],
    drinks: [{ label: "Bottled Water" }, { label: "Coke" }, { label: "Gatorade" }, { label: "Orange Soda" }],
    tacoff: [{ label: "Beef Taco" }, { label: "Chicken Taco" }, { label: "Bean Burrito" }, { label: "Cheese Burrito" }, { label: "Chips and Salsa" }],
};

export default function DeliveryDetailScreen() {
    // Gets parameters from current route
    const { id, label } = useLocalSearchParams<{ id: string; label?: string }>();

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
