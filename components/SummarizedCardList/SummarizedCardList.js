import React from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity, TouchableOpacityComponent, Linking} from 'react-native';
import SummarizedCard from '../SummarizedCard/SummarizedCard';

const summarizedCard = (props) => {
    return (
        <View style={styles.cardList}>
            <SummarizedCard link={"https://www.youtube.com/watch?v=r5pXu1PAUkI"} title={"MIT 6.006 Data Structures & Algorithms - Recursion"} date={"Feb 2nd, 2020"}/>
            <SummarizedCard link={"https://www.youtube.com/watch?v=UjNKKH0Z_uU"} title={"Control Systems, Laplace Transforms"} date={"Jan 24th, 2020"}/>
            <SummarizedCard link={"https://www.youtube.com/watch?v=VwVg9jCtqaU"} title={"Machine Learning: Zero to Hero"} date={"Dec 19th, 2019"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    cardList: {
        alignItems:'center',
        left: 20
    }
});

export default summarizedCard;