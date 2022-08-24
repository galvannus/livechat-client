import {
    MESSAGE_CHAT,
    ADD_MESSAGE,
    VALIDATE_MESSAGE
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case MESSAGE_CHAT:
            return {
                ...state,
                messages_chat: state.messages.filter(message => message.chatId === action.payload)
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
                errormessage: false
            }
        case VALIDATE_MESSAGE:
            return {
                ...state,
                errormessage: true
            }

        default:
            return state;
    }
}