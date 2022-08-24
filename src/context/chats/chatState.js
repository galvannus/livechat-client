import { useReducer } from "react";
import chatContext from "./chatContext";
import chatReducer from "./chatReducer";
import {
    GET_CHATS,
    ADD_CHAT,
    VALIDATE_SEARCH_FORM,
    CURRENT_CHAT,
    DELETE_CHAT
} from "../../types";

import { v4 as uuidv4 } from 'uuid';


const ChatState = props => {

    const chats = [
        {id: "1", name: 'Alejandro Marcial'},
        {id: "2", name: 'Cleo Patra'},
        {id: "3", name: 'Nancy Pelosi'},
        {id: "4", name: 'Otro Más'}
    ]

    //Initial state
    const initialState = {
        chats: [],
        errorsearchform: false,
        chat: null
    }

    //Dispatch to execute actions
    //dispatch execute the types
    const [state, dispatch] = useReducer(chatReducer, initialState);

    //Functions CRUD
    /*const showMessageForm = () => {
        dispatch({
            type: GET_CHATS
        })
    }*/

    //Get chats
    const getChats = () => {
        dispatch({
            type: GET_CHATS,
            payload: chats
        })
    }

    //Add new Chat
    const addChat = chat  => {
        chat.id = uuidv4();

        //Insert the chat to the state
        dispatch({
            type: ADD_CHAT,
            payload: chat
        })
    }

    //Verify Errors of Search Form
    const showError = () => {
        dispatch({
            type: VALIDATE_SEARCH_FORM
        })
    }

    //Select proyect when user clicked
    const currentChat = chatId => {
        dispatch({
            type: CURRENT_CHAT,
            payload: chatId
        })
    }

    //Delete Chat
    const delteChat = chatId => {
        dispatch({
            type: DELETE_CHAT,
            payload: chatId
        })
    }

    return(
        <chatContext.Provider
            value={{
                chats: state.chats,
                errorsearchform: state.errorsearchform,
                chat: state.chat,
                getChats,
                addChat,
                showError,
                currentChat,
                delteChat
            }}
        >
            {props.children/*All data of this provider are sended to all consummers
            Child components of this providers*/}
        </chatContext.Provider>
    )
}

export default ChatState;