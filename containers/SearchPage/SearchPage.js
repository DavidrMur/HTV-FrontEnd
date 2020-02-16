import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'; 
import { sanFranciscoWeights } from 'react-native-typography'; 
import SummarizedCardList from '../../components/SummarizedCardList/SummarizedCardList';
import WebView from 'react-native-webview';
import TranscriptTimesList from '../../components/TranscriptTimesList/TranscriptTimesList';


class SearchPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        keyword: ''
    }
 }

    inputHandler = (event) => {
        this.setState({keyword: event.nativeEvent.text.toLowerCase()});
    }

    goHandler=()=>{
        console.log(this.props.transcriptTimes);
        this.props.getTranscriptTimes([this.props.ytLink, this.state.keyword])
        
    }

    backHandler = () => {
        this.props.navigation.navigate({routeName:"Welcome"});
        this.props.setTranscriptTimes([]);
    }

    render() {
      return (
        <View style = {styles.bodyContainer}>
            <View style = {styles.bodyHeader}>
                <TouchableOpacity onPress={()=>this.backHandler()}>
                    <Text style={styles.bodyHeaderButton}>{'<  Back'}</Text>
                </TouchableOpacity>
                <Divider />
            </View>
            <View style={styles.searchContainer}>
                <Text style={styles.bodyText}>Keyword Search</Text>
                <View style={styles.bodyInputContainer}>
                    <TextInput style={styles.headerInput} placeholder="Keyword" onChange={(event) => this.inputHandler(event)} />
                    <TouchableOpacity style={styles.headerButton} onPress={()=>this.goHandler()} >
                        <Text style={styles.headerButtonText}>Go</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TranscriptTimesList keyword={this.state.keyword} times={this.props.transcriptTimes} link={this.props.ytLink}/>
            {/* <WebView
                source={{ uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4' }}
                style={{ marginTop: 20 }}
                /> */}
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    bodyContainer: {
        top: 60,
        left: 10
    },
    bodyHeader: {
        marginBottom: 20
    },
    bodyHeaderButton: {
        ...sanFranciscoWeights.bold,
        fontSize: 20,
        letterSpacing: 2,
        marginBottom: 5
    },
    bodyText: {
        ...sanFranciscoWeights.regular,
        fontSize: 24

    },
    searchContainer: {
        alignItems: 'center',
    },
    bodyInputContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerInput: {
        ...sanFranciscoWeights.light,
        fontSize: 14,
        textAlign: 'center',
        padding: 5,
        width: 200,
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
  });
  
  const mapStateToProps = state => {
    return {
        ytLink: state.transcript.ytLink,
        transcriptTimes: state.transcript.transcriptTimes
    }
  }

  
  const mapDispatchToProps = dispatch => {
    return {
        getTranscriptTimes: (options) => dispatch(actions.getTranscriptTimes(options)),
        setTranscriptTimes: (payload) => dispatch(actions.setTranscriptTimes(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)

