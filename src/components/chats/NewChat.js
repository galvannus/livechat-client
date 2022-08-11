import { useState } from 'react';

const NewChat = () => {

    //State of Chat
    const [chat, saveChat] = useState({
        search: ''
    });

    //Extract name of person to chat
    const { search } = chat;

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

        //Add chat to state

        //Reload form
    }

    return(
        <form
            className="search_container"
            onSubmit={onSubmitChat}
        >
            <input
                className="search_input"
                type="search"
                id="search"
                name="search"
                placeholder="search..."
                value={search}
                onChange={onChangeChat}
            />
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    );
}

export default NewChat;