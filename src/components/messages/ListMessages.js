import Message from "./Message";

const ListMessages = () => {

    const messagesList = [
        { user_id: "1", author: "Alejandro Marcial", body: "Message Her", type: "text", viewed: true, date: "2022-08-09" },
        { user_id: "2", author: "Alejandro Marcial", body: "Escribiendo un mensaje", type: "text", viewed: true, date: "2022-08-09" },
        { user_id: "3", author: "Alejandro Marcial", body: "Es para probar funcionalidad", type: "text", viewed: false, date: "2022-08-09" },
        { user_id: "4", author: "Alejandro Marcial", body: "Ya veremos si si funciona", type: "text", viewed: false, date: "2022-08-09" },
        { user_id: "5", author: "Alejandro Marcial", body: "Probando con un array", type: "text", viewed: false, date: "2022-08-09" },
        { user_id: "6", author: "Alejandro Marcial", body: "Ultimo mensaje registrado", type: "text", viewed: false, date: "2022-08-09" }
    ];

    return(
        <div className="list_messages">
            {messagesList.length === 0
            
                ? (<p>Nothing to show</p>)
                : messagesList.map(message => (
                    <Message
                        key={message.user_id}
                        message={message}
                    />
                ))
            
            }
        </div>
    )
}

export default ListMessages;