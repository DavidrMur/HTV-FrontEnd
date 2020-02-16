import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WebView from 'react-native-webview'
const LinkDisplayScreen = props =>{
    return(
    <View>
        <WebView
        source={{ uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4' }}
        style={{ marginTop: 20 }}
        />
    </View>
        
    );
}
let styles = StyleSheet.create({
    cardRounded: {
        paddingEnd:0,  paddingTop: 0 , paddingBottom: 0, paddingStart: 0, padding:0,
        borderRadius: 12, alignItems:"center",flex:0, height:240,
    },

})

export default LinkDisplayScreen