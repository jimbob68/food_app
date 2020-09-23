import React from 'react';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Intolerances = ({ intolerances, setIntolerances }) => {
	const removeIntolerance = (intolerance) => {
		const index = intolerances.indexOf(intolerance);
		intolerances.splice(index, 1);
		const newIntolerances = intolerances.concat();
		setIntolerances(newIntolerances);
	};

	return (
		<View>
			<Menu>
				<MenuTrigger>
					<Text>Add Any Intolerances Here:</Text>
				</MenuTrigger>
				<MenuOptions>
					<MenuOption
						text="Dairy"
						onSelect={() => {
							const newSelectedIntolerances = intolerances.concat('Dairy');
							setIntolerances(newSelectedIntolerances);
						}}
					/>
					<MenuOption
						text="Egg"
						onSelect={() => {
							const newSelectedIntolerances = intolerances.concat('Egg');
							setIntolerances(newSelectedIntolerances);
						}}
					/>
					<MenuOption
						text="Gluten"
						onSelect={() => {
							const newSelectedIntolerances = intolerances.concat('Gluten');
							setIntolerances(newSelectedIntolerances);
						}}
					/>
					<MenuOption
						text="Grain"
						onSelect={() => {
							const newSelectedIntolerances = intolerances.concat('Grain');
							setIntolerances(newSelectedIntolerances);
						}}
					/>
					<MenuOption
						text="Peanut"
						onSelect={() => {
							const newSelectedIntolerances = intolerances.concat('Peanut');
							setIntolerances(newSelectedIntolerances);
						}}
					/>
					<MenuOption
						text="Seafood"
						onSelect={() => {
							const newSelectedIntolerances = intolerances.concat('Seafood');
							setIntolerances(newSelectedIntolerances);
						}}
					/>
					<MenuOption
						text="Sesame"
						onSelect={() => {
							const newSelectedIntolerances = intolerances.concat('Sesame');
							setIntolerances(newSelectedIntolerances);
						}}
					/>
					<MenuOption
						text="Shellfish"
						onSelect={() => {
							const newSelectedIntolerances = intolerances.concat('Shellfish');
							setIntolerances(newSelectedIntolerances);
						}}
					/>
					<MenuOption
						text="Soy"
						onSelect={() => {
							const newSelectedIntolerances = intolerances.concat('Soy');
							setIntolerances(newSelectedIntolerances);
						}}
					/>
					<MenuOption
						text="Sulfite"
						onSelect={() => {
							const newSelectedIntolerances = intolerances.concat('Sulfite');
							setIntolerances(newSelectedIntolerances);
						}}
					/>
					<MenuOption
						text="Tree Nut"
						onSelect={() => {
							const newSelectedIntolerances = intolerances.concat('Tree Nut');
							setIntolerances(newSelectedIntolerances);
						}}
					/>
					<MenuOption
						text="Wheat"
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
						<TouchableOpacity style={styles.remove_button} onPress={() => removeIntolerance(item)}>
							<Text style={styles.remove_button_text}>X</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
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

	remove_button: {
		marginLeft: 25,
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
		height: 50
	},

	remove_button_text: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold'
	}
});

export default Intolerances;
