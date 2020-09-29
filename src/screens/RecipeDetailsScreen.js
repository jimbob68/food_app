import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, Linking } from 'react-native';
import ApiKey from '../../ApiKey.js';

const RecipeDetailsScreen = ({ route, navigation }) => {
	const [ recipeInfo, setRecipeInfo ] = useState({});
	const [ ingredientsList, setIngredientsList ] = useState([]);
	const [ selectedRecipe, setSelectedRecipe ] = useState(route.params.selectedRecipe);

	useEffect(
		() => {
			fetch(
				'https://api.spoonacular.com/recipes/' +
					selectedRecipe.id +
					'/information?includeNutrition=false&apiKey=' +
					ApiKey
			)
				.then((res) => res.json())
				.then((recipe) => {
					setRecipeInfo(recipe);
					setIngredientsList(recipe.extendedIngredients);
				})
				// .then(() => extractIngredients() )
				.then(() => console.log('recipeInfo', recipeInfo));
		},
		[ selectedRecipe ]
	);

	const extractIngredients = () => {
		console.log(ingredientsList);
		// const ingredients = recipeInfo.extendedIngredients.map(ingredient => ingredient.name)
		// setIngredientsList(ingredients);
	};

	return (
		<View style={styles.recipe_details_container}>
			<ScrollView>
				<Text style={styles.recipe_title}>{selectedRecipe.title}</Text>
				{recipeInfo.diets ? (
					recipeInfo.diets.length === 0 ? (
						<Text style={styles.recipe_detail}>Dietary Info: None</Text>
					) : (
					<Text style={styles.recipe_detail}>Dietary Info: {recipeInfo.diets.join()}</Text>
					)
					// if(recipeInfo.diets.length === 0) {
					// 	<Text style={styles.recipe_detail}>Dietary Info: None</Text>	
					// } else {
					// 	<Text style={styles.recipe_detail}>Dietary Info: {recipeInfo.diets.join()}</Text>}
				) : (
					<Text>None</Text>
				)}

				<TouchableOpacity onPress={() => Linking.openURL(recipeInfo.sourceUrl)}>
					<Text style={styles.url_text}>Click here for recipe</Text>
				</TouchableOpacity>
				<Image
					style={styles.image}
					source={{
						uri: selectedRecipe.image
					}}
				/>
				<Text style={styles.recipe_title}>Ingredients</Text>
				<FlatList
					data={ingredientsList}
					renderItem={({ item, index }) => (
						<Text style={styles.recipe_detail} keyExtractor={index.toString()}>
							{item.name}
						</Text>
					)}
				/>
				<TouchableOpacity
					style={styles.new_search_button}
					onPress={() => navigation.navigate('RecipeSelectScreen')}
				>
					<Text style={styles.new_search_text}>New Search</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 200,
		alignSelf: 'center',
		borderWidth: 2,
		borderColor: 'darkblue',
		borderRadius: 8,
		margin: 10
	},

	recipe_details_container: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: 'pink',
		// justifyContent: 'flex-start',
		textAlign: 'center'
	},

	recipe_title: {
		fontSize: 25,
		color: 'darkblue',
		textAlign: 'center',
		padding: 5,
		fontWeight: 'bold'
	},
	recipe_detail: {
		fontSize: 22,
		textAlign: 'center'
	},
	new_search_button: {
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: 'green',
		borderRadius: 8,
		marginTop: 20
	},
	new_search_text: {
		color: 'white',
		padding: 5,
		textAlign: 'center',
		fontSize: 25
	},

	url_text: {
		fontSize: 25,
		textAlign: 'center',
		color: 'blue',
		textDecorationLine: 'underline',
		padding: 10
	}
});

export default RecipeDetailsScreen;
