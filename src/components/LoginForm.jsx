import { useState } from 'react';
import axios from 'axios';

const projectID = '1cb74ffd-7eab-4f90-a05e-48a1a92c414c';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
        // axios cathing the api chatengine and sending the authobject to check if the pass and username are correct 
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      // to store the user data in the local storage 
      // whenever i refresh the page it wont send the user out, he will always be logged in 
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // to reload the page after adding the data
      window.location.reload();
      setError('');
    } catch (err) {
        // to catch the error if it doesn't match the correct  data 
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;