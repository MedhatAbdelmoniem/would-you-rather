import { RECEIVE_QUESTIONS, UPDATE_QUESTION } from "../Actions/questions";

export default function questions(state = {}, action){
    switch (action.type){
        case RECEIVE_QUESTIONS : 
            var id = action.question.id
            var question = action.question
            var object = {
                [id] : question
            }
            return Object.assign({},state,object)
        case UPDATE_QUESTION:
            var answer = action.question.answer
            var questionID = action.question.qid
            return {...state, [questionID]:{
                ...state[questionID],[answer]:{
                ...state[questionID][answer], votes:[
                ...state[questionID][answer].votes,
                action.question.authedUser
                ]

                }
            }
        }
        default : 
            return state
    }
}