import React, { Component } from 'react';
import { connect } from 'react-redux'

class Leaderboard extends Component{
    render(){
        return(
            <div>
                {this.props.users.sort((a,b)=> (Object.values(b.answers).length + b.questions.length)  - (Object.values(a.answers).length + a.questions.length)
                ).map((user)=>(
                    <div key={user.id}>
                        <img src={user.avatarURL} style={{display : 'inline'}} alt="avatar"/>
                        <h1>
                            {user.name}
                        </h1>
                        <h2>
                            score: {Object.values(user.answers).length + user.questions.length}
                        </h2>
                        <h2>
                            voted questions : {Object.values(user.answers).length}
                        </h2>
                        <h2>
                            created questions : {user.questions.length}
                        </h2>
                        <hr></hr>
                    </div>
                ))}
            </div>
        )
    }
}

function users(store){
    return {
        users: Object.values(store.users)
    }
}
export default connect(users)(Leaderboard)