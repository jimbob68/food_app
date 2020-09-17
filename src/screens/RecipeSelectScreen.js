import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ApiKey from '../../ApiKey.js';

// const RecipeSelectScreen = ({ selectedIngredients, setSelectedIngredients, recipeResults, setRecipeResults }) => {
	const RecipeSelectScreen = ({ route, navigation }) => {
		const [selectedIngredients, setSelectedIngredients ] = useState(route.params.selectedIngredients);
		// const {setSelectedIngredients} = route.params
		const [recipeResults, setRecipeResults] = useState(route.params.recipeResults);
		// const {setRecipeResults} = route.params
	const [ searchResults, setSearchResults ] = useState([]);
	const [ inputValue, setInputValue ] = useState('');

	const searchIngredients = (input) => {
		setInputValue(input);
		const searchURL =
			'https://api.spoonacular.com/food/ingredients/autocomplete?query=' + input + '&number=5&apiKey=' + ApiKey;
		fetch(searchURL).then((res) => res.json()).then((results) => setSearchResults(results));
	};

	const removeIngredient = (ingredient) => {
		const index = selectedIngredients.indexOf(ingredient);
		selectedIngredients.splice(index, 1);
		const newSelectedIngredients = selectedIngredients.concat();
		setSelectedIngredients(newSelectedIngredients);
	};

	const getRecipes = () => {
		const ingredientNames = selectedIngredients.map((ingredient) => ingredient.name);
		const ingredientsAsString = ingredientNames.join();
		const noSpacesBetweenIngredients = ingredientsAsString.replace(/, /g, ',+');
		const properlyFormattedIngredients = noSpacesBetweenIngredients.replace(/ /g, '-');

		fetch(
			'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' +
				properlyFormattedIngredients +
				'&number=2&apiKey=91a3c67e4c2a4d93a113ef959566ce8f'
		)
			.then((res) => res.json())
			// .then((res ) => console.log(res))
			.then((results) => {
				setRecipeResults(results)
				return results
		})
			// .then(() => console.log('result', recipeResults))
			.then((results) => navigation.navigate("ResultsScreen", {recipeResults: results}))
	};

	return (
		<View style={styles.recipeSelectContainer}>
			<Text>Recipe Select Screen</Text>
			<Text style={styles.font}>Search for an ingredient then click from the list below</Text>
			<TextInput style={styles.input_box} onChangeText={(input) => searchIngredients(input)} value={inputValue} />
			<FlatList
				data={searchResults}
				// style={styles.flatlist}
				// ListEmptyComponent={<Text>hi</Text>}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => {
							console.log(selectedIngredients)
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
				// style={styles.flatlist}
				// ListEmptyComponent={<Text>hi</Text>}
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
	font: {
		fontSize: 20
	},
	input_box: {
		borderWidth: 1,
		borderColor: 'blue',
		fontSize: 20
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
	},
	recipeSelectContainer: {
		// flex: 1
	},
	flatlist: {
		height: 20,
		margin: 0,
		padding: 0,
	}
});

export default RecipeSelectScreen;
