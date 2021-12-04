import {ChatEngine, ChatFeed} from 'react-chat-engine';
import './App.css';
import ChatFeedComponent from './components/chatFeed';
import LoginForm from './components/LoginForm'


const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine

           height="100vh"
           projectID="1cb74ffd-7eab-4f90-a05e-48a1a92c414c"
           userName="karim"
           userSecret="12345"
           renderChatFeed={(chatAppProps) => <ChatFeedComponent {...chatAppProps} />}

         
        />
        
    )   
}



export default App