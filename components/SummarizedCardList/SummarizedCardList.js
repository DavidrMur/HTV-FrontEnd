import React from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import SummarizedCard from '../SummarizedCard/SummarizedCard';

const summarizedCard = (props) => {
    return (
        <View style={styles.cardList}>
            <SummarizedCard title={"MIT 6.006 Data Structures & Algorithms - Recursion"} date={"Feb 2nd, 2020"}/>
            <SummarizedCard title={"Control Systems, Laplace Transforms"} date={"Jan 24th, 2020"}/>
            <SummarizedCard title={"Machine Learning: Zero to Hero"} date={"Dec 19th, 2019"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    cardList: {
        alignItems:'center'
    }
});

export default summarizedCard;