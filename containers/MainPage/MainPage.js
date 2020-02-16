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

    goHandler=()=>{
        this.props.setYtLink(this.state.ytLink);
        this.props.setYtLink('https://www.youtube.com/watch?v=skc-ZEU9kO8')
        this.props.navigation.navigate({routeName:"Video"})
    }

    render() {
      return (
        <View style = {styles.mainContent}>
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Note It</Text>
                        <View style={styles.headerSearchContainer}>
                            <TextInput style={styles.headerInput} placeholder="Input link to summarize" onChange={(event) => this.inputHandler(event)} />
                            <TouchableOpacity style={styles.headerButton} onPress={()=>this.goHandler()} title="Beep">
                                <Text style={styles.headerButtonText}>Go</Text>
                            </TouchableOpacity>
                        </View>
                    <Divider style={{borderWeight: 10}} />
                    <View style={{backgroundColor: '#f9f9f9f9', alignItems:'left', left: -20, height: 700}}>
                        <Text style={styles.bodyTitle}>Your Recent Summaries</Text>
                        <SummarizedCardList />
                    </View>
                </View>
            </View>
        <View >
            
        </View>
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    header: {
        height: 500,
        position: 'absolute',
        top: 60,
        width: 500
    },
    headerContainer: {
        left: 20,
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
    },
    bodyTitle: {
        ...sanFranciscoWeights.regular,
        letterSpacing: 1,
        fontSize: 24,
        margin: 20,
        marginLeft: 0,
        left: 20
    }
    
  });
  
//   const mapStateToProps = state => {
//     return {
//         // parkingOptions: state.parking.parkingOptions
//     }
//   }
  
  const mapDispatchToProps = dispatch => {
    return {
        setYtLink: (ytLink) => dispatch(actions.setYtLink(ytLink)),
    };
};

export default connect(null, mapDispatchToProps)(MainPage)