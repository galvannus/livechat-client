import { useReducer } from "react";
import chatContext from "./chatContext";
import chatReducer from "./chatReducer";
import { GET_CHATS } from "../../types";


const ChatState = props => {

    const chats = [
        {chat_id: "1", name: 'Alejandro Marcial'},
        {chat_id: "2", name: 'Cleo Patra'},
        {chat_id: "3", name: 'Nancy Pelosi'},
        {chat_id: "4", name: 'Otro Más'}
    ]

    //Initial state
    const initialState = {
        chats: []
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

    return(
        <chatContext.Provider
            value={{
                chats: state.chats,
                getChats
            }}
        >
            {props.children/*All data of this provider are sended to all consummers
            Child components of this providers*/}
        </chatContext.Provider>
    )
}

export default ChatState;