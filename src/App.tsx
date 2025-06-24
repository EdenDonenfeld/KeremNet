import React from 'react';
import './App.css';
import Post from './components/post/Post';

const App = () => {

  return (  
    <div className="App">
      <Post 
        key="1"
        username="eden" 
        text="Walking my dog in the park 🐕"
        date="2025-06-01T12:00:00Z"
        likes={10}
        comments={[
          { text: "Great post!", username: "alice" },
        ]}
      />
      <Post 
        key="2"
        username="zoey" 
        text="Loving course Kerem" 
        date="2025-06-02T14:30:00Z"
        likes={66}
        comments={[
          { text: "Great post!", username: "alice" },
          { text: "I love this, so inspiring!", username: "bob" }
        ]}
      />
      <Post 
        key="3"
        username="john" 
        text="Just finished a great book 📚" 
        date="2025-06-03T09:15:00Z"
        likes={20}
        comments={[
          { text: "Great post!", username: "alice" },
          { text: "I love this, so inspiring!", username: "bob" }
        ]}
      />
    </div>
  );
}

export default App;
