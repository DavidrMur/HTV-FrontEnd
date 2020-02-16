import React from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity, TouchableOpacityComponent, Linking} from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography'; 

const summarizedCard = (props) => {
    return (
            <View style={styles.card}>
            <TouchableOpacity onPress = {() => Linking.openURL(props.link)}>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Text style={styles.cardDate}>{props.date}</Text>
            </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 100,
        width: 300,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 5,
        shadowOffset:{  width: 5,  height: 5,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
        backgroundColor:'white'

    },
    cardTitle: {
        ...sanFranciscoWeights.semibold, 
        fontSize: 18
    },
    cardDate: {
        ...sanFranciscoWeights.normal,
    },
});

export default summarizedCard;