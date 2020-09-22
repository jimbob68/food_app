import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
// import NavBar from './src/components/NavBar.js';
import RecipeSelectScreen from './src/screens/RecipeSelectScreen.js';
import ResultsScreen from './src/screens/ResultsScreen';
import RecipeDetailsScreen from './src/screens/RecipeDetailsScreen.js';

const Stack = createStackNavigator();

export default function App() {
	console.disableYellowBox = true;
	// const [ recipeName, setRecipeName ] = useState('');
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
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="RecipeSelectScreen"
					component={RecipeSelectScreen}
					options={{
						title: 'Select Ingredients',
						headerStyle: {
							backgroundColor: 'blue'
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
							fontSize: 20
						}
					}}
					// initialParams={{
					// 	selectedIngredients: selectedIngredients,
					// 	setSelectedIngredients: setSelectedIngredients,
					// 	recipeResults: recipeResults,
					// 	setRecipeResults: setRecipeResults
					// }}
				/>

				<Stack.Screen
					name="ResultsScreen"
					component={ResultsScreen}
					options={{
						title: 'Search Results',
						headerStyle: {
							backgroundColor: 'blue'
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
							fontSize: 20
						}
					}}
				/>
				<Stack.Screen
					name="RecipeDetailsScreen"
					component={RecipeDetailsScreen}
					options={{
						title: 'Recipe Details',
						headerStyle: {
							backgroundColor: 'blue'
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
							fontSize: 20
						}
					}}
				/>
				{/* <ScrollView style={styles.container}> */}
				{/* <NavBar /> */}
				{/* <Text>{recipeName}</Text> */}
				{/* <RecipeSelectScreen
						selectedIngredients={selectedIngredients}
						setSelectedIngredients={setSelectedIngredients}
						recipeResults={recipeResults}
						setRecipeResults={setRecipeResults}
					/>
					<ResultsScreen recipeResults={recipeResults} setSelectedRecipe={setSelectedRecipe} />

					<RecipeResultScreen selectedRecipe={selectedRecipe} /> */}
				{/* </ScrollView> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
