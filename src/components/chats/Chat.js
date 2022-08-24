import { useContext } from 'react';
import chatContext from '../../context/chats/chatContext';
import messageContext from '../../context/messages/messageContext';

const Chat = ({chat}) => {
    //Extract chats state
    const chatsContext = useContext(chatContext);
    const { currentChat, delteChat } = chatsContext;

    //Extract messages state
    const messagesContext = useContext(messageContext);
    const { getMessages } = messagesContext;

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
            <div className="chat padding_left_10" onClick={ () => selectChat(chat.id) }>
                <div className="chat_text">
                    <h1>{chat.name}</h1>
                    <p>Last message received</p>
                </div>
            </div>
            <button className="btn-close" onClick={ () => onClickDeleteChat(chat.id) }><i className="fa-solid fa-circle-xmark"></i></button>
        </div>
    );
}

export default Chat;