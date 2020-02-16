import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'; 
import { sanFranciscoWeights } from 'react-native-typography'; 
import SummarizedCardList from '../../components/SummarizedCardList/SummarizedCardList';

class MainPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        ytLink: ''
    }
 }

    inputHandler = (event) => {
        this.setState({ytLink: event.target.value});
    }

    render() {
      return (
        <View style = {styles.mainContent}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Note It</Text>
                    <View style={styles.headerSearchContainer}>
                        <TextInput style={styles.headerInput} placeholder="Input link to summarize" onChange={(event) => this.inputHandler(event)} />
                        <TouchableOpacity style={styles.headerButton} onPress={() => this.props.getTranscriptTimes('https://www.youtube.com/watch?v=1aA1WGON49E')} title="Beep">
                            <Text style={styles.headerButtonText}>Go</Text>
                        </TouchableOpacity>
                    </View>
                <Divider style={{fontWeight: 'bold'}} />
                <SummarizedCardList />
            </View>
        <View >
            
        </View>
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    mainContent: {
        position: 'absolute',
        flexDirection: 'column',
        backgroundColor: 'blue',
        alignContent:'center'
    },
    container: {
    width: 280,
    height: 90,
    position: 'absolute',
    top: 60,
    left: 10,
    backgroundColor: 'blue',
    borderRadius: 12,
    padding: 5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
        height: 0,
        width: 0
    },
    elevation: 2,
    flexDirection: "column",
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    margin: 8,
    justifyContent: 'center',
    },
    heading: {
        fontSize: 32,
        height: 50
    },
    header: {
        height: 50,
        position: 'absolute',
        left: 20,
        top: 60
    },
    headerTitle: {
        ...sanFranciscoWeights.semibold,
        fontSize: 48,
        letterSpacing: 4,
    },
    headerSearchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerInput: {
        ...sanFranciscoWeights.light,
        fontSize: 14,
        textAlign: 'center',
        padding: 5,
        width: 250,
        height: 40,
        top: 20,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 25,
        backgroundColor: '#f9f9f9',
        marginBottom: 40
    },
    headerButton: {
        ...sanFranciscoWeights.light,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        height: 40,
        width: 40,
        margin: 10,

    },
    headerButtonText: {
        ...sanFranciscoWeights.medium,
        margin: 8,
        textAlign: 'center',
        alignSelf: 'center'
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

export default connect(null, mapDispatchToProps)(MainPage)