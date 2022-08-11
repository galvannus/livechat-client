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
    }, []);

    //Verify if the chats has content
    if( chats.length === 0) return null;

    return(
        <div className="list_chats">
            {chats.map(chat => (
                <Chat
                    key={chat.chat_id}
                    chat={chat}
                />
            ))}
        </div>
    );
}

export default ListChats;