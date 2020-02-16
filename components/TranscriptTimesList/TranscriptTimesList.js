import React from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity, TouchableOpacityComponent, ScrollView} from 'react-native';
import TranscriptTime from '../TranscriptTime/TranscriptTime';
import { sanFranciscoWeights } from 'react-native-typography'; 

const transcriptTimesList = (props) => {

    const timeList = (
        props.times.map((time) => {
            return <TranscriptTime
            time={time}
            link={props.link}
            />
            })
    );

    return (
        <ScrollView style={styles.cardList}>
            {!props.keyword ? <Text style={styles.cardText}>Please enter a keyword to search</Text> : <Text style={styles.cardText}>{`Results for Keyword: ${props.keyword}`}</Text>}
            {props.times.length !=  0 ? timeList : null}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    cardList: {
        left: 20,
        flexDirection: 'column',
        // width: 300,
        // height: 10
    },
    cardText: {
        ...sanFranciscoWeights.normal,
        fontSize: 14,
    }
});

export default transcriptTimesList;