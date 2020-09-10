import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';

const ResultsScreen = ({ selectedIngredients }) => {
	return (
	<>
	<Text>Results Screen</Text>
	{/* <FlatList
		data={selectedIngredients}
		renderItem={({ item }) => (
			<TouchableOpacity
				onPress={() => {
					console.log(item);
				}}
			>
				<Text>{item.name}Remove</Text>
			</TouchableOpacity>
		)}
	/> */}
	</>
	)};

export default ResultsScreen;
