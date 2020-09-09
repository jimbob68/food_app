import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import ApiKey from '../../ApiKey.js';

const RecipeSelectScreen = () => {
	const [ searchResults, setSearchResults ] = useState([]);
	const [ inputValue, setInputValue ] = useState('');

	const searchIngredients = (input) => {
		setInputValue(input);
		const searchURL =
			'https://api.spoonacular.com/food/ingredients/autocomplete?query=' + input + '&number=5&apiKey=' + ApiKey;
		fetch(searchURL).then((res) => res.json()).then((results) => setSearchResults(results));
	};

	return (
		<View>
			<Text>Recipe Select Screen</Text>
			<TextInput onChangeText={(input) => searchIngredients(input)} value={inputValue} style={styles.input_box} />
		</View>
	);
};

const styles = StyleSheet.create({
	input_box: {
		borderWidth: 1,
		borderColor: 'blue'
	}
});

export default RecipeSelectScreen;
