import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitQuestionData } from './Actions/handler';
import { handleInitUserData } from './Actions/handler';
import Main from './Components/main';
import { currentUser } from './Actions/currentUser'

class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitQuestionData())
    this.props.dispatch(handleInitUserData())
    this.props.dispatch(currentUser(null))
    
  }
  render(){
    return(
      <div>
        <Main />
      </div>
    )
  }
}

export default connect()(App);
