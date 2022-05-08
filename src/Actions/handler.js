import * as data from '../Data/_DATA.js'
import { receiveUsers , updateUser, updateCreateQuestion } from './users.js'
import { receiveQuestions , updateQuestion} from './questions.js'

export function handleInitUserData(){
    return (dispatch) =>{
        return data._getUsers().then((users)=>{
            dispatch(receiveUsers(users))
        })
    }
}

export function handleInitQuestionData(){
    return (dispatch) =>{
        return data._getQuestions().then((questions)=>{
            Object.values(questions).forEach(question => {
                dispatch(receiveQuestions(question))
            });
        })
    }
}

export function handleNewQuestion(question){
    return (dispatch) =>{
        return data._saveQuestion(question).then((question)=>{
            dispatch(receiveQuestions(question))
            dispatch(updateCreateQuestion(question))
        })
    }
}

export function handleNewVote(answer){
    return (dispatch)=>{
        return data._saveQuestionAnswer(answer).then(()=>{
            dispatch(updateQuestion(answer))
            dispatch(updateUser(answer))
        })
    }
}
