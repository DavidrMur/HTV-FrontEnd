import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'; 
import { sanFranciscoWeights } from 'react-native-typography'; 
import SummarizedCardList from '../../components/SummarizedCardList/SummarizedCardList';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        ytLink: ''
    }
 }

    inputHandler = (event) => {
        this.setState({ytLink: event.target.value});
    }

    goHandler=()=>{
        this.props.getTranscriptTimes('https://www.youtube.com/watch?v=1aA1WGON49E')
        this.props.navigation.navigate({routeName:"Welcome"})
    }

    render() {
      return (
        <View style = {styles.bodyContainer}>
            <View style = {styles.bodyHeader}>
                <TouchableOpacity onPress={()=>this.goHandler()}>
                    <Text style={styles.bodyHeaderButton}>{'< Back '}</Text>
                </TouchableOpacity>
            </View>
            <Text>Stuff</Text>
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    bodyContainer: {
        top: 60,
        left: 20
    },
    bodyHeader: {

    },
    bodyHeaderButton: {
        ...sanFranciscoWeights.bold,
        fontSize: 20,
        letterSpacing: 1,
    }
  });
  
//   const mapStateToProps = state => {
//     return {
//         // parkingOptions: state.parking.parkingOptions
//     }
//   }
  
  const mapDispatchToProps = dispatch => {
    return {
        getTranscriptTimes: (options) => dispatch(actions.getTranscriptTimes(options)),
    };
};

export default connect(null, mapDispatchToProps)(SearchPage)