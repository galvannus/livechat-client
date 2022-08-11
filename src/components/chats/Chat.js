

const Chat = ({chat}) => {
    return(
        <div className="chat padding_left_10">
            <div className="chat_text">
                <h1>{chat.name}</h1>
                <p>Last message received</p>
            </div>
        </div>
    );
}

export default Chat;