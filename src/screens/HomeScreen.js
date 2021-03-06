import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.home_container}>
			<ScrollView>
				{/* <Text style={styles.home_title}>Waste-Not Want-Not</Text> */}
				<Image style={styles.home_image} source={require('../../assets/WNWNLogo.png')} />
				<Text style={styles.home_text}>
					Welcome to Waste-Not Want-Not, the App to help us all cut down on our food waste.
				</Text>
				<TouchableOpacity
					style={styles.start_recipe_search_button}
					onPress={() => navigation.navigate('RecipeSelectScreen')}
				>
					<Text style={styles.start_recipe_search_text}>Search Recipes</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	home_container: {
		flex: 1,
		// flexDirection: 'column',
		alignItems: 'center',
		paddingVertical: 20,
		paddingHorizontal: 15,
		backgroundColor: 'pink',
		// height: '100%',
		justifyContent: 'flex-start'
	},

	home_title: {
		fontSize: 25,
		color: 'darkblue',
		fontWeight: 'bold'
	},

	home_text: {
		fontSize: 25,
		color: 'darkblue',
		textAlign: 'center',
		padding: 20,
		marginTop: 20
	},
	start_recipe_search_button: {
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: 'green',
		borderRadius: 8,
		marginTop: 20,
		width: 250,
		alignSelf: 'center',
	},
	start_recipe_search_text: {
		color: 'white',
		padding: 5,
		textAlign: 'center',
		fontSize: 25
	},
	home_image: {
		height: 250,
		width: 250,
		alignSelf: 'center'
		// borderWidth: 2,
		// borderColor: 'darkblue',
		// borderRadius: 8,
		// margin: 10
	}
});

export default HomeScreen;
