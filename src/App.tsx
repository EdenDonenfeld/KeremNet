import React from 'react';
import './App.css';
import Home from './components/home/Home';
import posts from './api/posts.json';

const App = () => {
  const postsFromJson = posts.posts;
  return (  
    <div className="App">
      <Home postsFromJson={postsFromJson} />
    </div>
  );
}

export default App;
