import React from 'react';
import { Text, StyleSheet } from 'react-native';

const NavBar = () => {
	return <Text style={styles.navbar}>Nav Bar</Text>;
};

const styles = StyleSheet.create({
	navbar: {
		// flex: 1,
		height: 100,
		width: '100%',
		backgroundColor: 'blue'
	}
});

export default NavBar;
