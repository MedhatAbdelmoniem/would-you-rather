export const RECEIVE_USERS = "RECEIVE_USERS"
export const UPDATE_USER = "UPDATE_USER"
export const UPDATE_CREATE_QUESTION = "UPDATE_CREATE_QUESTION"
export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function updateUser(user){
    return {
        type: UPDATE_USER,
        user
    }
}

export function updateCreateQuestion(question){
    return {
        type: UPDATE_CREATE_QUESTION,
        question
    }
}