import { useContext, useEffect } from 'react';
import chatContext from '../../context/chats/chatContext';
import Chat from "./Chat";

const ListChats = () => {

    //Extract chats of initial state
    const chatsContext = useContext(chatContext);
    const { chats, getChats } = chatsContext;

    //Get proyects when load the component
    useEffect( () => {
        getChats();
        // eslint-disable-next-line
    }, []);

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