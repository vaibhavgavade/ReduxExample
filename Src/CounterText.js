import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

class CounterText extends Component {
render() {
 return (
      <View style={Styles.Container}>
        
        <TouchableOpacity onPress={()=>this.props.increaseCounter()}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <Text>{this.props.counter}</Text>
        <TouchableOpacity onPress={()=>this.props.decreaseCounter()}>
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state){
    return {
        counter: state.counter
    }

}

function mapDispatchToProps(dispatch){
    return {
    increaseCounter:()=>dispatch({type:'INCREASE_COUNTER'}),
    decreaseCounter:()=>dispatch({type:'DECREASE_COUNTER'}),
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(CounterText)

const Styles=StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row'

  }
})

