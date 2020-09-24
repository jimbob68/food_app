import React from 'react';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const Intolerances = ({ intolerances, setIntolerances }) => {
	const removeIntolerance = (intolerance) => {
		const index = intolerances.indexOf(intolerance);
		intolerances.splice(index, 1);
		const newIntolerances = intolerances.concat();
		setIntolerances(newIntolerances);
	};

	return (
		<View style={styles.intolerances_container}>
			<ScrollView>
				<Menu>
					<MenuTrigger style={styles.intolerance_button}>
						<Text style={styles.intolerance_button_text}>Add Intolerances</Text>
					</MenuTrigger>

					<MenuOptions style={styles.intolerance_options} customStyles={intolerance_dropdown}>
						<MenuOption
							text="Dairy"
							customStyles={intolerance_option}
							onSelect={() => {
								const newSelectedIntolerances = intolerances.concat('Dairy');
								setIntolerances(newSelectedIntolerances);
							}}
						/>
						<MenuOption
							text="Egg"
							customStyles={intolerance_option}
							onSelect={() => {
								const newSelectedIntolerances = intolerances.concat('Egg');
								setIntolerances(newSelectedIntolerances);
							}}
						/>
						<MenuOption
							text="Gluten"
							customStyles={intolerance_option}
							onSelect={() => {
								const newSelectedIntolerances = intolerances.concat('Gluten');
								setIntolerances(newSelectedIntolerances);
							}}
						/>
						<MenuOption
							text="Grain"
							customStyles={intolerance_option}
							onSelect={() => {
								const newSelectedIntolerances = intolerances.concat('Grain');
								setIntolerances(newSelectedIntolerances);
							}}
						/>
						<MenuOption
							text="Peanut"
							customStyles={intolerance_option}
							onSelect={() => {
								const newSelectedIntolerances = intolerances.concat('Peanut');
								setIntolerances(newSelectedIntolerances);
							}}
						/>
						<MenuOption
							text="Seafood"
							customStyles={intolerance_option}
							onSelect={() => {
								const newSelectedIntolerances = intolerances.concat('Seafood');
								setIntolerances(newSelectedIntolerances);
							}}
						/>
						<MenuOption
							text="Sesame"
							customStyles={intolerance_option}
							onSelect={() => {
								const newSelectedIntolerances = intolerances.concat('Sesame');
								setIntolerances(newSelectedIntolerances);
							}}
						/>
						<MenuOption
							text="Shellfish"
							customStyles={intolerance_option}
							onSelect={() => {
								const newSelectedIntolerances = intolerances.concat('Shellfish');
								setIntolerances(newSelectedIntolerances);
							}}
						/>
						<MenuOption
							text="Soy"
							customStyles={intolerance_option}
							onSelect={() => {
								const newSelectedIntolerances = intolerances.concat('Soy');
								setIntolerances(newSelectedIntolerances);
							}}
						/>
						<MenuOption
							text="Sulfite"
							customStyles={intolerance_option}
							onSelect={() => {
								const newSelectedIntolerances = intolerances.concat('Sulfite');
								setIntolerances(newSelectedIntolerances);
							}}
						/>
						<MenuOption
							text="Tree Nut"
							customStyles={intolerance_option}
							onSelect={() => {
								const newSelectedIntolerances = intolerances.concat('Tree Nut');
								setIntolerances(newSelectedIntolerances);
							}}
						/>
						<MenuOption
							text="Wheat"
							customStyles={intolerance_option}
							onSelect={() => {
								const newSelectedIntolerances = intolerances.concat('Wheat');
								setIntolerances(newSelectedIntolerances);
							}}
						/>
					</MenuOptions>
				</Menu>

				<FlatList
					data={intolerances}
					// style={styles.flatlist}
					// ListEmptyComponent={<Text>hi</Text>}
					renderItem={({ item, index }) => (
						<View keyExtractor={index.toString()} style={styles.intolerance_select}>
							<Text style={styles.intolerance_name}>{item}</Text>
							<TouchableOpacity
								style={styles.remove_intolerance_button}
								onPress={() => removeIntolerance(item)}
							>
								<Text style={styles.remove_intolerance_button_text}>X</Text>
							</TouchableOpacity>
						</View>
					)}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	intolerance_select: {
		// flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 10
	},

	intolerance_name: {
		padding: 10,
		fontSize: 25
	},

	remove_intolerance_button: {
		marginLeft: 25,
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
		height: 50
	},

	remove_intolerance_button_text: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold'
	},
	intolerance_button: {
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: 'red',
		borderRadius: 8,
		marginTop: 20,
		width: 250
		// alignSelf: 'center'
	},
	intolerance_button_text: {
		color: 'white',
		padding: 5,
		textAlign: 'center',
		fontSize: 25
	},
	intolerance_options: {
		alignSelf: 'center'
	},
	intolerances_container: {
		alignSelf: 'center',
		flex: 1
	}
});

const intolerance_dropdown = {
	optionsContainer: {
		width: 250
		// backgroundColor: 'lightgrey'
	}
};
const intolerance_option = {
	optionText: {
		fontSize: 25,
		// marginBottom: 1,
		padding: 5,
		backgroundColor: 'lightblue',
		width: 250,
		textAlign: 'center'
	},
	optionWrapper: {
		marginTop: 1,
		padding: 0
	}
};

export default Intolerances;
