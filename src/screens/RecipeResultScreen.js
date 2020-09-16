import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import ApiKey from '../../ApiKey.js';

const RecipeResultScreen = ({ selectedRecipe }) => {
	const [ recipeInfo, setRecipeInfo ] = useState({});
	const [ ingredientsList, setIngredientsList ] = useState([]);

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
		<View>
			<Text> Recipe Result Screen</Text>
			<Text>{selectedRecipe.title}</Text>
			{recipeInfo.diets ? <Text>For {recipeInfo.diets.join()}</Text> : <Text>None</Text>}

			<Text>{recipeInfo.sourceUrl}</Text>
			<Image
				style={styles.image}
				source={{
					uri: selectedRecipe.image
				}}
			/>
			<FlatList
				data={ingredientsList}
				renderItem={({ item }) => (
					<Text>
						{item.name} {item.measures.metric.amount} {item.measures.metric.unitShort}
					</Text>
				)}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	image: {
		height: 150,
		width: 150
	}
});

export default RecipeResultScreen;
