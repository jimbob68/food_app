import React, { useState } from 'react';
import { Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

// const ResultsScreen = ({ recipeResults, setSelectedRecipe }) => {
	const ResultsScreen = ({ route, navigation }) => {
		const [ recipeResults, setRecipeResults ] = useState(route.params.recipeResults)
	return (
		<>{console.log("recipe results", recipeResults)}
			<Text>Results Screen</Text>
			<FlatList
				data={recipeResults}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => {
							setSelectedRecipe(item);
							console.log(item);
						}}
					>
						<Text>{item.title}</Text>
						<Image
							style={styles.image}
							source={{
								uri: item.image,
							}}
						/>
					</TouchableOpacity>
				)}
			/>
		</>
	)};

	const styles = StyleSheet.create({
		image: {
			width: 100,
			height: 100,
		}
	})


export default ResultsScreen;
