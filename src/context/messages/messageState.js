import { useReducer } from 'react';
import MessageReducer from './messageReducer';
import MessageContext from './messageContext';

import { 
    MESSAGE_CHAT,
    ADD_MESSAGE,
    VALIDATE_MESSAGE
 } from '../../types';



const MessageState = props => {
    const initialState = {
        messages: [
            { id: "1",chatId: "1", author: "Alejandro Marcial", body: "Message Her", type: "text", viewed: true, date: "2022-08-09" },
            { id: "2",chatId: "1", author: "Alejandro Marcial", body: "Escribiendo un mensaje", type: "text", viewed: true, date: "2022-08-09" },
            { id: "3",chatId: "2", author: "Alejandro Marcial", body: "Es para probar funcionalidad", type: "text", viewed: false, date: "2022-08-09" },
            { id: "4",chatId: "3", author: "Alejandro Marcial", body: "Ya veremos si si funciona", type: "text", viewed: false, date: "2022-08-09" },
            { id: "5",chatId: "4", author: "Alejandro Marcial", body: "Probando con un array", type: "text", viewed: false, date: "2022-08-09" },
            { id: "6",chatId: "1", author: "Alejandro Marcial", body: "Ultimo mensaje registrado", type: "text", viewed: false, date: "2022-08-09" },
            { id: "6",chatId: "2", author: "Alejandro Marcial", body: "Ultimo mensaje registrado", type: "text", viewed: false, date: "2022-08-09" },
            { id: "6",chatId: "3", author: "Alejandro Marcial", body: "Ultimo mensaje registrado", type: "text", viewed: false, date: "2022-08-09" },
            { id: "6",chatId: "4", author: "Alejandro Marcial", body: "Ultimo mensaje registrado", type: "text", viewed: false, date: "2022-08-09" }
        ],
        messages_chat: null,
        errormessage: false
    }

    //Create dispatch and steate
    const [state, dispatch] = useReducer(MessageReducer, initialState);

    //Create functions

    //Get messages of the chat
    const getMessages = messageId => {
        dispatch({
            type: MESSAGE_CHAT,
            payload: messageId
        })
    }

    //Add message to the selected chat
    const addMessage = message => {
        dispatch({
            type: ADD_MESSAGE,
            payload: message
        })
    }

    //Verify and show an error if is necessary
    const validateMessage = () => {
        dispatch({
            type: VALIDATE_MESSAGE
        })
    }

    return(
        <MessageContext.Provider
            value={{
                messages: state.messages,
                messages_chat: state.messages_chat,
                errormessage: state.errormessage,
                getMessages,
                addMessage,
                validateMessage
            }}
        >
            {props.children}
        </MessageContext.Provider>
    )
}

export default MessageState;