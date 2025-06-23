import React from 'react';
import './App.css';
import Post from './components/post/Post';

const App = () => {
  return (  
    <div className="App">
      <Post 
        username="eden" 
        text="Walking my dog in the park 🐕"
        date="2025-06-01T12:00:00Z"
        likes={10}
        comments={5}
      />
      <Post 
        username="zoey" 
        text="Loving course Kerem" 
        date="2025-06-02T14:30:00Z"
        likes={66}
        comments={6}
      />
      <Post 
        username="john" 
        text="Just finished a great book 📚" 
        date="2025-06-03T09:15:00Z"
        likes={20}
        comments={3}
      />
    </div>
  );
}

export default App;
