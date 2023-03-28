import { useContext } from 'react';
import chatContext from '../../context/chats/chatContext';
import messageContext from '../../context/messages/messageContext';

const Chat = ({chat, currentUser}) => {
    //Extract chats state
    const chatsContext = useContext(chatContext);
    const { currentChat, delteChat } = chatsContext;

    //Extract messages state
    const messagesContext = useContext(messageContext);
    const { getMessages } = messagesContext;

    /* useEffect( () => {
        console.log(currentUser._id);
    },[]); */

    //Delete chat
    const onClickDeleteChat = chatId => {
        delteChat(chatId);
    }

    //Add current chat
    const selectChat = id => {
        currentChat(id);//Current chat
        getMessages(id);//Filter messages when user select the chat
    }

    return(
        <div className="list_chats">
            <div className="chat padding_left_10" onClick={ () => selectChat(chat._id) }>
                {
                    chat.users.map( user => (
                        user._id !== currentUser._id
                        ?
                        <div className="chat_text" key={user._id}>
                            <h1>{user.name}</h1>
                            <p>Last message received</p>
                        </div>

                        : null
                    ) )
                }
            </div>
            <button className="btn-close" onClick={ () => onClickDeleteChat(chat._id) }><i className="fa-solid fa-circle-xmark"></i></button>
        </div>
    );
}

export default Chat;