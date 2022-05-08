import React, { Component } from 'react';
import { connect } from 'react-redux'
import { currentUser } from '../Actions/currentUser'

class SignIn extends Component {
    render(){
        var sign = (id)=>{
            this.props.dispatch(currentUser(id))
        } 
        return(
            <div>
                <h1>Please choose a user</h1>
                {Object.values(this.props)[0].map((user)=>{
                   return(
                       <div key={user.id}>
                           <img src={user.avatarURL} alt="avatar" />
                           <p>{user.name}</p>
                           <button onClick={()=> sign(user.id)}>Sign In</button>
                           <hr></hr>
                       </div>
                   )
                })}
            </div>
        )
    }
}

function user(store){
    return {
        users: Object.values(store.users),
        id: Object.values(store)[2]
    }
}

export default connect(user)(SignIn)