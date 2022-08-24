import {
    GET_CHATS,
    ADD_CHAT,
    VALIDATE_SEARCH_FORM,
    CURRENT_CHAT,
    DELETE_CHAT
} from "../../types";

//Functions to interact with the state
export default (state, action) => {
    switch(action.type) {

        case GET_CHATS:
            return {
                ...state,
                chats: action.payload
            }
        case ADD_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload],
                errorsearchform: false
            }
        case VALIDATE_SEARCH_FORM:
            return {
                ...state,
                errorsearchform: true
            }
        case CURRENT_CHAT:
            return {
                ...state,
                chat: state.chats.filter(chat => chat.id === action.payload)
            }
        case DELETE_CHAT:
            return {
                ...state,
                chats: state.chats.filter(chat => chat.id !== action.payload),
                chat: null
            }
        
        default:
            return state;
    }
}