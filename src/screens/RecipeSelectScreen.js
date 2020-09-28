import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import ApiKey from '../../ApiKey.js';
import Intolerances from '../components/Intolerances.js';

// const RecipeSelectScreen = ({ selectedIngredients, setSelectedIngredients, recipeResults, setRecipeResults }) => {
	const RecipeSelectScreen = ({ route, navigation }) => {
	const [ selectedIngredients, setSelectedIngredients ] = useState([]);
	// const {setSelectedIngredients} = route.params
	const [ recipeResults, setRecipeResults ] = useState([]);
	// const {setRecipeResults} = route.params
	const [ searchResults, setSearchResults ] = useState([]);
	const [ inputValue, setInputValue ] = useState('');
	const [ intolerances, setIntolerances ] = useState([]);

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
		const properlyFormattedIngredients = noSpacesBetweenIngredients.replace(/ /g, '%20');
		// console.log('properlyFormattedIngredients', properlyFormattedIngredients2);
		// const properlyFormattedIngredients = 'cheese,+eggs';

		const intolerancesAsString = intolerances.join();
		const noSpacesBetweenIntolerances = intolerancesAsString.replace(/, /g, ',');
		const properlyFormattedIntolerances = noSpacesBetweenIntolerances.replace(/ /g, '-');

		fetch(
			// 'https://api.spoonacular.com/recipes/complexSearch?intolerances=Gluten,peanut,tree-nut&includeIngredients=cheese,+eggs&number=2&apiKey=02839c6bce744468bc5145a26d384982'
			'https://api.spoonacular.com/recipes/complexSearch?includeIngredients=' +
				properlyFormattedIngredients +
				'&intolerances=' +
				properlyFormattedIntolerances +
				'&number=5&apiKey=' +
				ApiKey
		)
			.then((res) => res.json())
			// .then((res) => console.log('results', res))
			// .then((res) => console.log('ingedients', selectedIngredients))
			.then((results) => {
				setRecipeResults(results);
				return results;
			})
			
			// .then(() => console.log('result', recipeResults))
			.then((results) => navigation.navigate('ResultsScreen', { recipeResults: results }))
			
	};

	return (
		<View style={styles.recipe_select_container}>
			<ScrollView>
				<Text style={styles.font}>Search for an ingredient then click from the list below</Text>
				<TextInput
					style={styles.input_box}
					onChangeText={(input) => searchIngredients(input)}
					value={inputValue}
				/>
				<FlatList
					style={styles.dropdown_list}
					data={searchResults}
					// style={styles.flatlist}
					// ListEmptyComponent={<Text>hi</Text>}
					renderItem={({ item, index }) => (
						<TouchableOpacity
							keyExtractor={index.toString()}
							onPress={() => {
								console.log('selectedIngredients', selectedIngredients);
								const newSelectedIngredients = selectedIngredients.concat(item);
								setSelectedIngredients(newSelectedIngredients);
								setInputValue('');
								setSearchResults([]);
							}}
						>
							<Text style={styles.dropdown_text}>{item.name}</Text>
						</TouchableOpacity>
					)}
				/>
				<FlatList
					data={selectedIngredients}
					// style={styles.flatlist}
					// ListEmptyComponent={<Text>hi</Text>}
					renderItem={({ item, index }) => (
						<View keyExtractor={index.toString()} style={styles.ingredient_select}>
							<Text style={styles.ingredient_name}>{item.name}</Text>
							<TouchableOpacity style={styles.remove_button} onPress={() => removeIngredient(item)}>
								<Text style={styles.remove_button_text}>X</Text>
							</TouchableOpacity>
						</View>
					)}
				/>
				<Intolerances intolerances={intolerances} setIntolerances={setIntolerances} />

				<TouchableOpacity style={styles.submit_button} onPress={() => getRecipes()}>
					<Text style={styles.submit_text}>Get Recipes</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({

	recipe_select_container: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 30,
		paddingHorizontal: 15,
		backgroundColor: 'pink',
		// justifyContent: 'flex-start'
	},

	font: {
		fontSize: 25,
		textAlign: 'center'
	},
	input_box: {
		borderWidth: 1,
		borderColor: 'blue',
		fontSize: 25,
		width: 250,
		marginTop: 20,
		padding: 5,
		alignSelf: 'center'
	},
	submit_button: {
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: 'green',
		borderRadius: 8,
		marginTop: 20,
		width: 250,
		alignSelf: 'center'
	},
	submit_text: {
		color: 'white',
		padding: 5,
		textAlign: 'center',
		fontSize: 25
	},
	ingredient_select: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 10,
	},

	remove_button: {
		marginLeft: 25,
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
		height: 50
	},
	ingredient_name: {
		padding: 10,
		fontSize: 25
	},
	remove_button_text: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold'
	},
	dropdown_text: {
		fontSize: 25,
		padding: 5,
		backgroundColor: 'lightblue',
		width: 250,
		marginBottom: 2
	},

	dropdown_list: {
		alignSelf: 'center'
	}
	// background_image: {
	// 	// flex: 1,
	// 	// height: 100,
	// 	// width: 100,
	// 	resizeMode: 'cover',
	// 	justifyContent: 'center',
	// 	backgroundColor: 'rgba(0,0,0,0.5)'
	// }
});

export default RecipeSelectScreen;
