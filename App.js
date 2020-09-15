import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/components/NavBar.js';
import RecipeSelectScreen from './src/screens/RecipeSelectScreen.js';
import ResultsScreen from './src/screens/ResultsScreen';
import RecipeResultScreen from './src/screens/RecipeResultScreen.js';

export default function App() {
	const [ recipeName, setRecipeName ] = useState('');
	const [ recipeResults, setRecipeResults ] = useState([]);
	const [ selectedIngredients, setSelectedIngredients ] = useState([]);
	const [ selectedRecipe, setSelectedRecipe ] = useState({});

	// useEffect(() => {
	// 	fetch(
	// 		'https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=' + ApiKey
	// 	)
	// 		.then((res) => res.json())
	// 		.then((results) => setRecipeResults(results));
	// }, []);

	return (
		<View style={styles.container}>
			<NavBar />
			<Text>{recipeName}</Text>
			<RecipeSelectScreen
				selectedIngredients={selectedIngredients}
				setSelectedIngredients={setSelectedIngredients}
				recipeResults={recipeResults}
				setRecipeResults={setRecipeResults}
			/>
			<ResultsScreen 
				recipeResults={recipeResults}
				setSelectedRecipe={setSelectedRecipe} 
			/>

			<RecipeResultScreen  selectedRecipe={selectedRecipe}/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
