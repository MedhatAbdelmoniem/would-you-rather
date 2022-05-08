import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleNewVote } from '../Actions/handler';

class Vote extends Component{
    render() {
        var id = window.location.pathname.split('/questions/')[1]
        var submit = (option)=>{
            var object = {
                authedUser: this.props.user[0].id,
                qid: id,
                answer: option
            }
            this.props.dispatch(handleNewVote(object))
        }
        return (
            
            !this.props.questions.filter((question)=> question.id === id).length ?  <div>404 - Post not Found</div>
            : 
            <div>
                {
                    Object.keys(this.props.user[0].answers).some((answer)=> {return answer === id}) ? (
                        <div>
                            <img style={{display : 'inline'}} alt="avatar" src={this.props.users.filter((user)=> { return user.id === this.props.questions.filter((question)=>{ return question.id === id})[0].author})[0].avatarURL}/>
                            <h3 style={{display : 'inline', marginLeft : '50px'}}>
                                {this.props.users.filter((user)=> user.id === this.props.questions.filter((question)=> question.id === id)[0].author)[0].name ===this.props.user[0].name ? "you ": this.props.users.filter((user)=> user.id === this.props.questions.filter((question)=> question.id === id)[0].author)[0].name} asks
                            </h3>
                            <h3>results:</h3>
                            <hr></hr>
                            <h3>
                                you chose: {this.props.user[0].answers[id] === 'optionOne'? this.props.questions.filter((question)=> question.id === id)[0].optionOne.text: this.props.questions.filter((question)=> question.id === id)[0].optionTwo.text}
                            </h3>
                            <h3>
                                votes: {this.props.questions.filter((question)=> question.id === id)[0].optionOne.votes.length} out of {this.props.questions.filter((question)=> question.id === id)[0].optionTwo.votes.length + this.props.questions.filter((question)=> question.id === id)[0].optionOne.votes.length}
                            </h3>
                            <h3>
                                other option: {this.props.user[0].answers[id] === 'optionTwo'? this.props.questions.filter((question)=> question.id === id)[0].optionOne.text: this.props.questions.filter((question)=> question.id === id)[0].optionTwo.text} ,votes: {this.props.questions.filter((question)=> question.id === id)[0].optionTwo.votes.length} out of {this.props.questions.filter((question)=> question.id === id)[0].optionTwo.votes.length + this.props.questions.filter((question)=> question.id === id)[0].optionOne.votes.length}
                            </h3>
                        </div>
                    ) : (
                        <div>
                            <img style={{display : 'inline'}} alt="avatar" src={this.props.users.filter((user)=> { return user.id === this.props.questions.filter((question)=>{ return question.id === id})[0].author})[0].avatarURL}/>
                            <h3 style={{display : 'inline', marginLeft : '50px'}}>
                                {this.props.users.filter((user)=> user.id === this.props.questions.filter((question)=> question.id === id)[0].author)[0].name ===this.props.user[0].name ? "you ": this.props.users.filter((user)=> user.id === this.props.questions.filter((question)=> question.id === id)[0].author)[0].name} asks </h3>
                            <h4>
                                Would you rather :
                            </h4>
                            <hr></hr>
                            <div>
                                <h5>
                                    {this.props.questions.filter((question)=> question.id === id)[0].optionOne.text}
                                </h5>
                                <button onClick={()=> submit('optionOne')}>
                                    choose this
                                </button>
                                <h4>or</h4>
                                <h5>
                                    {this.props.questions.filter((question)=> question.id === id)[0].optionTwo.text}
                                </h5>
                                <button onClick={()=> submit('optionTwo')}>
                                    choose this
                                </button>
                            </div>
                        </div>
                    )
                }
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

export default connect(user)(Vote)