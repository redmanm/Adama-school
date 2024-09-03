import React, { useState } from 'react';
import './ChatBubble.css';

const ChatBubble = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="chat-bubble">
      {isVisible && (
        <div className="chat-content">
          <p>Hi, I am Admission Officer, I will be assisting you today. Let's talk!!</p>
          <button onClick={() => setIsVisible(false)}>Close</button>
        </div>
      )}
      {!isVisible && (
        <button className="chat-open" onClick={() => setIsVisible(true)}>
          Chat with us
        </button>
      )}
    </div>
  );
};

export default ChatBubble;
