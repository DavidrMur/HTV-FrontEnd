import React from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import TranscriptTime from '../TranscriptTime/TranscriptTime';

const transcriptTimesList = (props) => {

    const timeList = (
        props.times.map((time) => {
            return <TranscriptTime
            time={time}
            />
            })
    );

    return (
        <View style={styles.cardList}>
            {props.times.length !=  0 ? timeList : <Text style={{top: 60}}>Do Somethig</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    cardList: {
        alignItems:'center',
        left: 20
    }
});

export default transcriptTimesList;