import Message from "./Message";

const ListMessages = () => {

    const messagesList = [];

    return(
        <div className="list_messages">
            {messagesList.length === 0
            
                ? (<p>Nothing to show</p>)
                : messagesList.map(message => (
                    <Message
                        key={message.id}
                        message={message}
                    />
                ))
            
            }
        </div>
    )
}

export default ListMessages;