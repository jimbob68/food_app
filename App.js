import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/components/NavBar.js';
import RecipeSelectScreen from './src/screens/RecipeSelectScreen.js';
import ResultsScreen from './src/screens/ResultsScreen';

export default function App() {
	const [ recipeName, setRecipeName ] = useState('');
	const [ recipeResults, setRecipeResults ] = useState([]);
	const [ selectedIngredients, setSelectedIngredients ] = useState([]);

	// useEffect(() => {
	// 	fetch(
	// 		'https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=91a3c67e4c2a4d93a113ef959566ce8f'
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
			{/* <ResultsScreen selectedIngredients={selectedIngredients} /> */}
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
