import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import curretnUser from './currentUser'

export default combineReducers({
    questions,
    users,
    curretnUser
})