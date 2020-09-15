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
		const ingredientNames = selectedIngredients.map(ingredient => ingredient.name)
		const ingredientsAsString = ingredientNames.join()
		const noSpacesBetweenIngredients = ingredientsAsString.replace(/, /g, ',+')
		const properlyFormattedIngredients = noSpacesBetweenIngredients.replace(/ /g, '-')

		fetch(
			'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + properlyFormattedIngredients + '&number=2&apiKey=91a3c67e4c2a4d93a113ef959566ce8f'
		)
			.then((res) => res.json())
			// .then((res ) => console.log(res))
			.then((results) => setRecipeResults(results))
			// .then(() => console.log('result', recipeResults))
	}

	return (
		<View>
			<Text>Recipe Select Screen</Text>
			<Text style={styles.font}>Search for an ingredient then click from the list below</Text>
			<TextInput style={styles.input_box} onChangeText={(input) => searchIngredients(input)} value={inputValue}  />
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
						<Text style={styles.font}>{item.name}</Text>
					</TouchableOpacity>
				)}
			/>
			<FlatList
				data={selectedIngredients}
				renderItem={({ item }) => (

					<>
					<Text style={styles.font}>{item.name}</Text>
					<TouchableOpacity 
						onPress={() => removeIngredient(item)}
					>
						<Text style={styles.font} >Remove</Text>
					</TouchableOpacity>
					</>

				)}
			/>

					<TouchableOpacity style={styles.submit_button} onPress={() => getRecipes()}>
						<Text style={styles.submit_text}>Get Recipes</Text>
					</TouchableOpacity>

		</View>
	);
};

const styles = StyleSheet.create({
	font:{
		fontSize: 20
	},
	input_box: {
		borderWidth: 1,
		borderColor: 'blue',
		fontSize: 20,
	},
	submit_button: {
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: 'green',
		borderRadius: 8,
		marginTop: 15
	},
	submit_text: {
		color: 'white',
		padding: 5,
		textAlign: 'center',
		fontSize: 20
	}
});

export default RecipeSelectScreen;
