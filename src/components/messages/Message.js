

const Message = ({message}) => {

    return(
        <div>
            <h2>{message.author}</h2>
            <p>{message.body}</p>
            {message.viewed
                ?
                    (
                        <i className="fa-solid fa-check-double"></i>
                    )
                :
                    (
                        <i className="fa-solid fa-check"></i>
                    )
            
            }
        </div>
    );
}

export default Message;