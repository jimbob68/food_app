import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeResultScreen = ({ selectedRecipe }) => {

return (

    <View>

    <Text> Recipe Result Screen</Text>
<Text>{selectedRecipe.title}</Text>

    </View>
    
    
)

}


export default RecipeResultScreen;
