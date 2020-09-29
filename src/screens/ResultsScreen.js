import React, { useState } from 'react';
import { Text, FlatList, TouchableOpacity, Image, StyleSheet, View } from 'react-native';

// const ResultsScreen = ({ recipeResults, setSelectedRecipe }) => {

const ResultsScreen = ({ route, navigation }) => {
	
	const [ recipeResults, setRecipeResults ] = useState(route.params.recipeResults.results);
	
	return (
		<View style={styles.results_container}>
			{/* {console.log('recipe results', recipeResults)} */}
			{recipeResults.length > 0 ? (<Text style={styles.results_title}>Click a recipe for more details!</Text>) : (<Text></Text>)}
			
			
			{recipeResults.length === 0 ? (<Text style={styles.recipe_result_text}>Sorry, there were no recipe results for this search from the API!!</Text>) : (
			<FlatList
				data={recipeResults}
				renderItem={({ item, index }) => (
					<View style={styles.recipe_result} keyExtractor={index.toString()}>
						<TouchableOpacity
							onPress={() => {
								// setSelectedRecipe(item);
								// console.log(item);
								navigation.navigate('RecipeDetailsScreen', { selectedRecipe: item });
							}}
						>
							

					

							<Text style={styles.recipe_result_text}>{item.title}</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.image_link}
							onPress={() => {
								// setSelectedRecipe(item);
								console.log(item);
								navigation.navigate('RecipeDetailsScreen', { selectedRecipe: item });
							}}
						>
							<Image
								style={styles.image}
								source={{
									uri: item.image
								}}
							/>
						</TouchableOpacity>
					</View>
				)}
			/> )}
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		alignSelf: 'center',
		width: 100,
		height: 100,
		borderWidth: 2,
		borderColor: 'darkblue',
		borderRadius: 8
	},

	results_container: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: 'pink',
		justifyContent: 'flex-start'
	},

	results_title: {
		fontSize: 25,
		padding: 10
	},
	recipe_result: {
		padding: 5
	},
	recipe_result_text: {
		fontSize: 25,
		textAlign: 'center',
		padding: 5,
		color: 'darkblue'
	},
	image_link: {
		width: 100,
		alignSelf: 'center'
	}
});

export default ResultsScreen;
