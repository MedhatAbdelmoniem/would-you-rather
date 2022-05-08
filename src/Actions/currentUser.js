export const SET_CURRENT_USER = "SET_CURRENT_USER"

export function currentUser(id){
    return {
        type: SET_CURRENT_USER,
        id
    }
}