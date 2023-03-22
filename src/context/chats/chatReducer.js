import {
    GET_CHATS,
    ADD_CHAT,
    VALIDATE_SEARCH_FORM,
    CURRENT_CHAT,
    DELETE_CHAT,
    SEARCH_USER,
    GET_CURRENT_USER
} from "../../types";

//Functions to interact with the state
// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {

        case GET_CHATS:
            return {
                ...state,
                chats: action.payload
            }
        case SEARCH_USER:
            return {
                ...state,
                userlist: action.payload
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
                chat: state.chats.filter(chat => chat._id === action.payload)
            }
        case DELETE_CHAT:
            return {
                ...state,
                chats: state.chats.filter(chat => chat._id !== action.payload),
                chat: null
            }
        case GET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        
        default:
            return state;
    }
}