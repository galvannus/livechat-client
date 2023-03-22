import { useContext, useEffect } from 'react';
import chatContext from '../../context/chats/chatContext';
import AuthContext from '../../context/authentication/authContext';
import Chat from "./Chat";

const ListChats = () => {

    //Extract chats of initial state
    const chatsContext = useContext(chatContext);
    const { chats, getChats, getCurrentUser } = chatsContext;

    const authContext = useContext(AuthContext);
    const { user } = authContext;

    //Get chats when load the component
    useEffect( () => {
        //Insert user to state
        getCurrentUser(user);
        //Get chats
        getChats(user);
        // eslint-disable-next-line
    }, [user]);

    

    //Verify if the chats has content
    if( chats.length === 0) return null;

    return(
        
        chats.map(chat => (
            <Chat
                key={chat._id}
                chat={chat}
            />
        ))
        
    );
}

export default ListChats;