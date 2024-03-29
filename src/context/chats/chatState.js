import { useReducer } from "react";
import axiosClient from "../../config/axios";
import chatContext from "./chatContext";
import chatReducer from "./chatReducer";
import {
    GET_CHATS,
    ADD_CHAT,
    VALIDATE_SEARCH_FORM,
    CURRENT_CHAT,
    DELETE_CHAT,
    SEARCH_USER,
    GET_CURRENT_USER
} from "../../types";


const ChatState = props => {

    //Initial state
    const initialState = {
        chats: [],
        errorsearchform: false,
        chat: null,
        userlist: null,
        currentUser: null
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
    const getChats = async user => {
        let userId = user._id;

        const response = await axiosClient.get('/api/chats', { params: {userId}});
        
        dispatch({
            type: GET_CHATS,
            payload: response.data
        });
        
        
    }

    //Add new Chat
    const addChat = async chat  => {

        try {

            const response = await axiosClient.post('/api/chats', chat);
            console.log(response.data);

            //Insert the chat to the state
            dispatch({
                type: ADD_CHAT,
                payload: response.data
            });

        } catch (error) {
            console.log(error);
        }
    }

    //Verify Errors of Search Form
    const showError = () => {
        dispatch({
            type: VALIDATE_SEARCH_FORM
        });
    }

    //Select proyect when user clicked
    const currentChat = chatId => {
        dispatch({
            type: CURRENT_CHAT,
            payload: chatId
        });
    }

    //Delete Chat
    const delteChat = async id => {

        try {
            const response = await axiosClient.delete(`/api/chats/${id}`);
            
            dispatch({
                type: DELETE_CHAT,
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }

    const searchUsers = async name => {

        try {
            const response = await axiosClient.get('/api/users', {params: {name}});

            dispatch({
                type: SEARCH_USER,
                payload: response.data.userList
            });

        } catch (error) {
            console.log(error);
        }
    }

    const getCurrentUser = async user => {
        try {
            dispatch({
                type: GET_CURRENT_USER,
                payload: user
            });
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <chatContext.Provider
            value={{
                chats: state.chats,
                errorsearchform: state.errorsearchform,
                chat: state.chat,
                userlist: state.userlist,
                currentUser: state.currentUser,
                getChats,
                addChat,
                showError,
                currentChat,
                delteChat,
                searchUsers,
                getCurrentUser
            }}
        >
            {props.children/*All data of this provider are sended to all consummers
            Child components of this providers*/}
        </chatContext.Provider>
    )
}

export default ChatState;