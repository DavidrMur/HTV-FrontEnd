import React from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography'; 

const transcriptTime = (props) => {
    return (
            <View style={styles.card}>
            <TouchableOpacity>
            <Text style={styles.cardTitle}>{props.time}</Text>
            <Text style={styles.cardDate}>{props.time}</Text>
            </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 50,
        width: 200,
        borderWidth: 1,
        borderRadius: 20,
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

export default transcriptTime;