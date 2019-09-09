import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CounterText from './Src/CounterText';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState={
  counter:0
}
const reducer = (state=initialState,action)=>{
  switch(action.type){
    case 'INCREASE_COUNTER':
      return {counter:state.counter+1}
    case 'DECREASE_COUNTER':
    return {counter:state.counter-1}
  }
    return state
  }
const store = createStore(reducer)

export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
          <CounterText/>
      </Provider> 
    
    )
  }
}


