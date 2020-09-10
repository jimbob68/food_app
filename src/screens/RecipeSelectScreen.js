import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ApiKey from '../../ApiKey.js';

const RecipeSelectScreen = () => {
	const [ searchResults, setSearchResults ] = useState([]);
	const [ inputValue, setInputValue ] = useState('');
	const [ selectedIngredients, setSelectedIngredients ] = useState([]);

	const searchIngredients = (input) => {
		setInputValue(input);
		const searchURL =
			'https://api.spoonacular.com/food/ingredients/autocomplete?query=' + input + '&number=5&apiKey=' + ApiKey;
		fetch(searchURL).then((res) => res.json()).then((results) => setSearchResults(results));
	};

	const removeIngredient = (ingredient) => {
		const index = selectedIngredients.indexOf(ingredient)
		selectedIngredients.splice(index, 1)
		const newSelectedIngredients = selectedIngredients.concat();
			setSelectedIngredients(newSelectedIngredients);
	}

	return (
		<View>
			<Text>Recipe Select Screen</Text>
			<TextInput onChangeText={(input) => searchIngredients(input)} value={inputValue} style={styles.input_box} />
			<FlatList
				data={searchResults}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => {
							const newSelectedIngredients = selectedIngredients.concat(item);
							setSelectedIngredients(newSelectedIngredients);
							setInputValue('');
							setSearchResults([]);
							console.log(item);
							console.log(selectedIngredients);
						}}
					>
						<Text>{item.name}</Text>
					</TouchableOpacity>
				)}
			/>
			<FlatList
				data={selectedIngredients}
				renderItem={({ item }) => (

					<>
					<Text>{item.name}</Text>
					<TouchableOpacity 
						onPress={() => removeIngredient(item)}
					>
						<Text>Remove</Text>
					</TouchableOpacity>
					</>

					// <TouchableOpacity
					// 	onPress={() => {
					// 		console.log(item);
					// 	}}
					// >
					// <Text>{item.name}Remove</Text>
					// {/* </TouchableOpacity> */}
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input_box: {
		borderWidth: 1,
		borderColor: 'blue'
	}
});

export default RecipeSelectScreen;
