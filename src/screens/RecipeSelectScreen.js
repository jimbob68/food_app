import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ApiKey from '../../ApiKey.js';

const RecipeSelectScreen = ({selectedIngredients, setSelectedIngredients, recipeResults, setRecipeResults}) => {
	const [ searchResults, setSearchResults ] = useState([]);
	const [ inputValue, setInputValue ] = useState('');
	

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

	const getRecipes = () => {
		const formattedIngredients = selectedIngredients.map(ingredient => '+' + ingredient.name)
		const ingredientsAsString = formattedIngredients.join()
		const ingredientsWithoutSpaces = ingredientsAsString.replace(/, /g, ',')
		const hyphenedIngredients = ingredientsWithoutSpaces.replace(/ /g, '-')
		const properlyFormattedIngredients = hyphenedIngredients.substring(1)
		fetch(
			'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + properlyFormattedIngredients + '&number=2&apiKey=91a3c67e4c2a4d93a113ef959566ce8f'
		)
			.then((res) => res.json())
			.then((res ) => console.log(res))
			// .then((results) => setRecipeResults(results))
			// .then(() => console.log('result', recipeResults))
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

				)}
			/>

					<TouchableOpacity onPress={() => getRecipes()}>
						<Text>Submit Ingredients</Text>
					</TouchableOpacity>

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
