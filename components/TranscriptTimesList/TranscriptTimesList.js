import React from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import TranscriptTime from '../TranscriptTime/TranscriptTime';

const transcriptTimesList = (props) => {

    const timeList = (
        props.times.map((time) => {
            return <TranscriptTime
            key={time}
            time={time}
            />
            })
    );

    //const timeText = (<Text>`Here are the results for word ${props.word}`</Text>{timeList})

    return (
        <View style={styles.cardList}>
            {props.times.length !=  0 ? timeList : <Text style={{top: 60}}>Do Somethig</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    cardList: {
        
        left: 20
    }
});

export default transcriptTimesList;