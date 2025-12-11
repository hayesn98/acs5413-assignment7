import { Stack } from 'expo-router';
import React from 'react';
import BackButton from "../../components/BackButton";

// Map screen layout, using the custom BackButton component
const Layout = () => (
	<Stack>
		<Stack.Screen
			name="index"
			options={{
				title: 'Restaurant Location',
				headerTitleAlign: 'center',
				headerStyle: { backgroundColor: "#000000" },
				headerTintColor: "#f0f0f0",
				headerLeft: () => (<BackButton />)
			}}
		/>
	</Stack>
);

export default Layout;