import axios from "axios";

const BACKEND_URL =
    "https://acs5413-mainproject-default-rtdb.firebaseio.com/";

// Fetches name and quantity of a cart item using the id from Firebase
export async function fetchCartItems() {
    const response = await axios.get(BACKEND_URL + "/cart.json");

    const cartItems: any[] = [];

    if (response.data) {
        for (const key in response.data) {
            cartItems.push({
                id: key,
                name: response.data[key].name,
                quantity: response.data[key].quantity,
            });
        }
    }

    return cartItems;
}

// Adds a cart item, either by adding a new name or incrementing quantity of an existing name in Firebase
export async function addCartItem(name: string) {
    const existingItem = await findCartItemByName(name);

    if (existingItem) {
        const updatedQuantity = existingItem.quantity + 1;

        await axios.put(
            BACKEND_URL + `/cart/${existingItem.id}.json`,
            {
                name,
                quantity: updatedQuantity,
            }
        );

        return existingItem.id;
    }

    const response = await axios.post(BACKEND_URL + "/cart.json", {
        name,
        quantity: 1,
    });

    return response.data.name;
}

// Uses a name to identify a cart item
export async function findCartItemByName(name: string) {
    const response = await axios.get(BACKEND_URL + "/cart.json");

    if (!response.data) return null;

    for (const key in response.data) {
        if (response.data[key].name === name) {
            return {
                id: key,
                ...response.data[key],
            };
        }
    }

    return null;
}

// Uses a cart item's id and name to change its quantity
export async function updateCartItemQuantity(id: string, quantity: number) {
    return axios.patch(BACKEND_URL + `/cart/${id}.json`, { quantity });
}

// Uses a cart item's id to delete it entirely
export async function deleteCartItem(id: string) {
    return axios.delete(BACKEND_URL + `/cart/${id}.json`);
}
