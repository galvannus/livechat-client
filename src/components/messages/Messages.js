import { useContext, useState } from 'react';
import Message from "./Message";
import chatContext from '../../context/chats/chatContext';
import messageContext from '../../context/messages/messageContext';

const Messages = () => {

    //Extract chats of initial state
    const chatsContext = useContext(chatContext);
    const { chat } = chatsContext;

    //Extract messages state
    const messagesContext = useContext(messageContext);
    const { messages_chat, errormessage, addMessage, validateMessage, getMessages } = messagesContext;

    //State of form
    const [message, saveMessage] = useState({
        sendtext: ''
    });

    //Extract text of message to send
    const { sendtext } = message;

    if(!chat) return <h2>No se ha seleccionado chat</h2>;

    //Read data of form
    const handleChange = e => {
        saveMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }

    //Array destructuring for the current chat
    const [ currentChat ] = chat;

    const onSubmit = e => {
        e.preventDefault();

        //Validate
        if( sendtext.trim() === '' ){
            validateMessage();
            return;
        }

        //Add new Message to state
        message.chatId = currentChat.id;
        message.viewed = false;
        addMessage(message);

        //Get messages of the current Chat
        getMessages(currentChat.id);

        //Reload form
        saveMessage({
            sendtext: ''
        })
    }
    

    return(
        <main className="chat_selected">
            <div className="header_chat">
                <div className="data_chat">
                    <h1>{currentChat.name}</h1>
                </div>
                <div className="message">
                    <p>Message from {currentChat.name}</p>
                </div>
            </div>
            <div className="list_messages">
                {messages_chat.length === 0
                
                    ? (<p>Nothing to show</p>)
                    : messages_chat.map(message => (
                        <Message
                            key={message.id}
                            message={message}
                        />
                    ))
                
                }
            </div>
            <div className="send_message">
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Type a message" className="input_message" name="sendtext" value={sendtext} onChange={handleChange} />
                    <input type="submit" value="Send" />
                </form>
                {errormessage ? <p>El texto del mensaje es obligatorio.</p> : null}
            </div>
        </main>
    )
}

export default Messages;