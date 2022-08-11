import Sidebar from '../layout/Sidebar';
import HeaderMessage from '../messages/HeaderMessage';
import FormMessage from '../messages/FormMessage';
import ListMessages from '../messages/ListMessages';

const Chats = () => {
    return(
        <div className="container_app">
            <Sidebar/>
            <main className="chat_selected">
                <HeaderMessage/>
                <ListMessages/>
                <FormMessage/>
            </main>
        </div>
    );
}

export default Chats;