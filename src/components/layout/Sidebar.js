import NewChat from "../chats/NewChat";
import ListChats from "../chats/ListChat";
import Bar from './Bar';

const Sidebar = () => {

    return(
        <aside className="sidebar">
            <Bar/>
            <NewChat/>
            <ListChats/>
        </aside>
    );
}

export default Sidebar;