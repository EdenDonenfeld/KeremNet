import React from 'react';
import './App.css';
import Post from './components/post/Post';

const App = () => {
  return (  
    <div className="App">
      <Post username="eden_donenfeld" text="Walking my dog in the park 🐕" />
      <Post username="zoey_the_zebra" text="Loving course Kerem" />
      <Post username="eden_donenfeld" text="Walking my dog in the park 🐕" />
      <Post username="zoey_the_zebra" text="Loving course Kerem" />
      <Post username="eden_donenfeld" text="Walking my dog in the park 🐕" />
      <Post username="zoey_the_zebra" text="Loving course Kerem" />
    </div>
  );
}

export default App;
