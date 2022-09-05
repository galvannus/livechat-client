import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Chats from './components/chats/Chats';

import ChatState from  './context/chats/chatState';
import AlertState from './context/alerts/alertState';
import MessageState from './context/messages/messageState';
import AuthState from './context/authentication/authState';
import authToken from './config/token';
import PrivateRoute from './components/routes/PrivateRoutes';

//Verify if token exist
const token = localStorage.getItem('token');
if(token){
  authToken(token);
}

function App() {

  return (
    <ChatState>
      <MessageState>
        <AlertState>
          <AuthState>
            <Router>
              <Routes>
                <Route exact path="/" element={<Login/>} />
                <Route element={<PrivateRoute/>}>
                  <Route exact path="/chats" element={<Chats/>} />
                </Route>
                <Route exact path="/new-account" element={<NewAccount/>} />
              </Routes>
            </Router>
          </AuthState>
        </AlertState>
      </MessageState>
    </ChatState>
  );
}

export default App;
