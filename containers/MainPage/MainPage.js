import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, ImageBackground, Image, Button} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'; 
import { webWeights } from 'react-native-typography' 

class MainPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    }
 }


    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to Thing</Text>
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
container: {
    width: 280,
    height: 70,
    position: 'absolute',
    bottom: 300,
    left: 50,
    backgroundColor: 'white',
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
        ...webWeights.medium,
        fontSize: 32,
    },
    
  });
  
  const mapStateToProps = state => {
    return {
        // parkingOptions: state.parking.parkingOptions
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        // setParkingOptions: (options) => dispatch(actions.setParkingOptions(options)),
    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
export default MainPage;