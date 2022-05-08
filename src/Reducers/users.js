import { RECEIVE_USERS, UPDATE_USER, UPDATE_CREATE_QUESTION} from "../Actions/users";

export default function users(state = {}, action){
    switch (action.type){
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case UPDATE_USER :
            var answer = action.user.answer
            var questionID = action.user.qid
            var userID = action.user.authedUser
            return {...state, [userID]:{
                    ...state[userID], answers:{
                    ...state[userID].answers,
                    [questionID]:answer
                    }
                }
            }
        case UPDATE_CREATE_QUESTION :
            var user = action.question.author
            return{
                ...state,[user]:{
                ...state[user],questions:[
                ...state[user].questions,
                action.question.id
                ]   
                }
            }
        default : 
            return state
    }
}