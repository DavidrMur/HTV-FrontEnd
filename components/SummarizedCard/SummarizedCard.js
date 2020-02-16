import React from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity, TouchableOpacityComponent} from 'react-native';

const summarizedCard = (props) => {
    return (
            <View style={styles.card}>
            <Text>Thing</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 100,
        width: 200,
        borderWidth: 2,
        borderRadius: 10,
        margin: 20,
    }
});

export default summarizedCard;