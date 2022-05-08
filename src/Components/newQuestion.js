import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { handleNewQuestion } from '../Actions/handler'

class NewQuestion extends Component{
   
    render(){
        var submit = ()=>{
            var optionOne = document.getElementById('optionOne').value
            var optionTwo = document.getElementById('optionTwo').value
            var object = {
                author: this.props.id,
                optionOneText: optionOne,
                optionTwoText: optionTwo
            }
            this.props.dispatch(handleNewQuestion(object))
        }
        return(
            <div>
               <h1>
                   Create new question
               </h1>
               <h2>
                   would you rather
               </h2>
               <hr></hr>
               <input id="optionOne" type="text"/>
               <h3>or</h3>
               <input id="optionTwo" type="text"/>
               <button onClick={()=>{submit()}} style={{display : 'block', marginTop : '50px'}}><Link to='/'>submit</Link></button>
            </div>
        )
    }
}

function user(store){
    return {
        id: Object.values(store)[2]
    }
}

export default connect(user)(NewQuestion)