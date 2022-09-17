import { useState, useContext, Fragment, useEffect } from 'react';
import chatContext from '../../context/chats/chatContext';
import AuthContext from '../../context/authentication/authContext';

const NewChat = () => {

    //Extract chats of initial state
    const chatsContext = useContext(chatContext);
    const { errorsearchform, userlist, addChat, showError, searchUsers } = chatsContext;

    const authContext = useContext(AuthContext);
    const { user } = authContext;

    //State of Chat
    const [chat, saveChat] = useState({
        name: '',
        userToSearch: null
    });

    //Extract name of person to chat
    const { name, userToSearch } = chat;

    //Search user every change of name
    useEffect(() => {
        if(name.trim() !== ''){
            //Search users like name
            searchUsers(name.trim());
        }

        if(userToSearch !== null) {
            addChat(userToSearch);
            saveChat({
                ...chat,
                userToSearch: null
            })
        }
    },[name, userToSearch]);

    //Read contect of inputs
    const onChangeChat = e => {
        saveChat({
            ...chat,
            [e.target.name]: e.target.value
        });
    }

    //Get user selected
    const userSelected = e => {

        const users = {
            createdBy: user._id,
            users: [
                {
                    userId: user._id
                },
                {
                    userId: e
                }
            ]
        }

        saveChat({
            ...chat,
            userToSearch: users,
            name: '',
            userlist: null
        });
    }
    

    //When the user submit a proyect
    /* const onSubmitChat = e => {
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
        });
    }

    const showResults = () =>{
        saveChat({
            ...chat,
            searching: true
        });
    }

    const hiddeResults = () => {
        saveChat({
            ...chat,
            searching: false
        });
    } */

    return(
        <Fragment>
            <form
                className="search_container"
                //onSubmit={onSubmitChat}
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
                        /* onBlur={hiddeResults}
                        onFocus={showResults} */
                    />
                    {/*<button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>*/}
                    { name !== '' && userlist !== null
                        ?
                            <ul className="usersList padding_left_10">
                                {
                                    userlist.map(user => (
                                        (<li key={user._id} onClick={() => userSelected(user._id)}>{user.lastName}</li>)
                                    ))
                                }
                            </ul>
                        : null
                    }
                </div>
            </form>
            { errorsearchform ? <p>The name is required</p> : null}
            
        </Fragment>
    );
}

export default NewChat;