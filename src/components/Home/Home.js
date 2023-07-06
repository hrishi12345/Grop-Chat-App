import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Home(props) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isSendClicked, setIsSendClicked] = useState(false); // New state variable

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      console.log('sendMessage:', newMessage); // Check if the function is triggered
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      
      setIsSendClicked(true);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/message/getmessage', { headers: { "Authorization": token } });
        console.log(response.data.data);
        setMessages(response.data.data)
      } catch (error) {
        console.log('Error while fetching the data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    const addMessage = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(newMessage);
        await axios.post('http://localhost:3001/message/addmessage', { message: newMessage }, { headers: { "Authorization": token } });
        setNewMessage('');
      } catch (error) {
        console.log('Error while adding message:', error);
      }
    };

    if (isSendClicked && newMessage.trim() !== '') { // Add a check for non-empty newMessage
      addMessage();
      setIsSendClicked(false); // Reset the flag after the API call is made
    }
  }, [isSendClicked, newMessage]);

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <div>
      <h1>Chat Page</h1>
      <input
        id="message"
        placeholder="Send Message"
        value={newMessage}
        onChange={handleMessageChange}
      />
      <button onClick={sendMessage}>Send</button>

      <ul>
        {messages.map((message, index) => (
          <li key={index}>hrishi: {message.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
