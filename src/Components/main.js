import React, { Component } from 'react';
import { connect } from 'react-redux'
import SignIn from './signIn';
import Home from './home';

class Main extends Component{
    render(){
        return(
            <div>
                {this.props.id === null ? <SignIn /> : <Home /> }
            </div>
        )
    }
}

function user(store){
    return {
        id: Object.values(store)[2]
    }
}
export default connect(user)(Main)