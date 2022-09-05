import { useState, useContext, Fragment } from 'react';
import chatContext from '../../context/chats/chatContext';

const NewChat = () => {

    //Extract chats of initial state
    const chatsContext = useContext(chatContext);
    const { errorsearchform, addChat, showError } = chatsContext;

    //State of Chat
    const [chat, saveChat] = useState({
        name: ''
    });

    //Extract name of person to chat
    const { name } = chat;

    //Read contect of inputs
    const onChangeChat = e => {
        saveChat({
            ...chat,
            [e.target.name]: e.target.value
        })
    }

    //When the user submit a proyect
    const onSubmitChat = e => {
        e.preventDefault();

        //Validate Chat
        if( name === ''){
            showError();
            return;
        }

        //Add chat to state
        addChat(chat);

        //Reload form
        saveChat({
            name: ''
        })
    }

    return(
        <Fragment>
            <form
                className="search_container"
                onSubmit={onSubmitChat}
            >
                <div className="container-newchat">
                    <input
                        className="search_input"
                        type="search"
                        id="search"
                        name="name"
                        placeholder="search..."
                        value={name}
                        onChange={onChangeChat}
                    />
                    {/*<button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>*/}
                    <ul className="usersList padding_left_10">
                        <li>Jorge MArcial</li>
                        <li>Jorge MArcial</li>
                        <li>Jorge MArcial</li>
                        <li>Jorge MArcial</li>
                    </ul>
                </div>
            </form>
            { errorsearchform ? <p>The name is required</p> : null}
            
        </Fragment>
    );
}

export default NewChat;