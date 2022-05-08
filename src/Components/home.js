import React, { Component } from 'react';
import { connect } from 'react-redux'
import { currentUser } from '../Actions/currentUser'
import{ Link } from 'react-router-dom'
import Vote from './vote';
import { Route } from 'react-router-dom'
import NewQuestion from './newQuestion';
import Leaderboard from './leaderboard';

class Home extends Component{
    state = {
        switched: true
    }
    render(){
        var sign = ()=>{
            this.props.dispatch(currentUser(null))
        } 
        
        var switchDiv = (condition)=>{
            this.setState(()=>({
                switched: condition
            }))
        }
        return(
            <div>
                <div>
                    <ul className='nav'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/add'>New question</Link>
                        </li>
                        <li>
                            <Link to='/leaderboard'>leaderboard</Link>
                        </li>
                        <li>
                            {this.props.user[0].name}
                        </li>
                        <li>
                            <button onClick={()=> sign()}>Sign out</button>
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <Route exact path='/'>
                <div>
                    <ul className='nav'>
                        <li><button onClick={()=>{switchDiv(true)}}>unanswered</button></li>
                        <li><button onClick={()=>{switchDiv(false)}}>answered</button></li>
                    </ul>
                </div>
                <hr></hr>
                {this.state.switched ? 
                <div>
                    {
                        //iteration  on every question
                        this.props.questions.filter((question)=> 
                        {
                              var checker
                              //iteration every answer 
                               Object.keys(this.props.user[0].answers).forEach((answer)=> {
                                   //checking if the question is answered by the user or not
                                 if(question.id === answer){
                                      checker =  false
                                 }
                                 else if(question.id !== answer && checker !== false){
                                    checker =  true 
                                 }
                             })
                             return checker
                        }

                        ).sort((a,b)=> b.timestamp - a.timestamp
                            
                        ).map((unansweredQuestions)=>{
                            return(
                                <div className="container" key={unansweredQuestions.id}>
                                    <h4 style={{background : 'grey'}}>  
                                    <img alt="avatar" src={this.props.users.filter((user)=> user.id === unansweredQuestions.author)[0].avatarURL} style={{marginRight : '50px'}}/>
                                        {unansweredQuestions.author ===this.props.user[0].id ? 'you asked :': this.props.users.filter((user)=> user.id === unansweredQuestions.author)[0].name + ' asked :'}
                                    </h4>
                                    <div>
                                        <h4>would you rather:</h4>
                                        <h5>{unansweredQuestions.optionOne.text}</h5>
                                        <h4>or</h4>
                                        <h5>{unansweredQuestions.optionTwo.text}</h5>
                                        <li> <Link to={'/questions/' + unansweredQuestions.id}>Vote poll</Link></li>
                                    </div>
                                </div>   
                        )
                    })
                            
                        
                    }
                </div>:
                <div>
               {
                        //iteration  on every question
                        this.props.questions.filter((question)=> 
                        {
                              var checker
                              //iteration every answer 
                               Object.keys(this.props.user[0].answers).forEach((answer)=> {
                                   //checking if the question is answered by the user or not
                                 if(question.id === answer ){
                                    checker =  true
                                 }
                                 else if(question.id !== answer && checker !== true){
                                    checker =  false  
                                 }
                             })
                             return checker
                        }

                        ).sort((a,b)=> b.timestamp - a.timestamp
                            
                        ).map((unansweredQuestions)=>{
                            return(
                                <div className="container" key={unansweredQuestions.id}>
                                    
                                    <h4 style={{background : 'grey'}}>  
                                    <img alt="avatar" src={this.props.users.filter((user)=> user.id === unansweredQuestions.author)[0].avatarURL} style={{marginRight : '50px'}}/>
                                        {unansweredQuestions.author ===this.props.user[0].id ? 'you asked :': this.props.users.filter((user)=> user.id === unansweredQuestions.author)[0].name + ' asked :'}
                                    </h4>
                                    <div>
                                        <h4>would you rather:</h4>
                                        <h5>{unansweredQuestions.optionOne.text}</h5>
                                        <h4>or</h4>
                                        <h5>{unansweredQuestions.optionTwo.text}</h5>
                                        <li> <Link to={'/questions/' + unansweredQuestions.id}>Vote poll</Link></li>
                                    </div>
                                </div>   
                            )
                        })    
                    }
                </div>
                }
                </Route>
                <Route path='/questions'>
                    <Vote />
                </Route>
                <Route path='/add'>
                    <NewQuestion />
                </Route>
                <Route path='/leaderboard'>
                    <Leaderboard />
                </Route>
            </div>
        )
    }
}

function user(store){
    return {
        user: Object.values(store.users).filter((user)=> user.id === Object.values(store)[2]),
        users: Object.values(store.users),
        questions: Object.values(store.questions)
       
    }
}


export default connect(user)(Home)