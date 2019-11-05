import React from 'react'
import { View } from 'react-native'
import { Provider  } from 'react-redux';
import {  createStore , applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Components/Home';
import UserReducer from './Reducers/UserReducer';


const MyNav = createStackNavigator(
  {
    Home : {
      screen: Home,
      navigationOptions: {
        header : () => null
      }
    }
  }
)

const AppCont = createAppContainer(MyNav)

class App extends React.Component{
  render(){
    return(
      <Provider store = {createStore(UserReducer , applyMiddleware(ReduxThunk))}>
        <AppCont/>
      </Provider>
      
    )
  }
}





export default App;