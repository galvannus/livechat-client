import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Chats from './components/chats/Chats';

import ChatState from  './context/chats/chatState';
import AlertState from './context/alerts/alertState';

function App() {
  return (
    <ChatState>
      <AlertState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/chats" element={<Chats/>} />
            <Route exact path="/new-account" element={<NewAccount/>} />
          </Routes>
        </Router>
      </AlertState>
    </ChatState>
  );
}

export default App;
