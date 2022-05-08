import { SET_CURRENT_USER } from "../Actions/currentUser";

export default function curretnUser(state = null, action){
    switch (action.type){
        case SET_CURRENT_USER : 
            return action.id
        default : 
            return state
    }
}