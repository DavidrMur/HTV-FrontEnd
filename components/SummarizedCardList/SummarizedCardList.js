import React from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import SummarizedCard from '../SummarizedCard/SummarizedCard';

const summarizedCard = (props) => {
    return (
        <View style={styles.cardList}>
            <SummarizedCard />
            <SummarizedCard />
            <SummarizedCard />
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