import { GET_CHATS } from "../../types";

//Functions to interact with the state
export default (state, action) => {
    switch(action.type) {

        case GET_CHATS:
            return {
                ...state,
                chats: action.payload
            }
        default:
            return state;
    }
}