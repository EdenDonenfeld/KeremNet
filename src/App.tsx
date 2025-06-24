import React from 'react';
import Home from './components/home/Home';
import ApplicationLayout from './components/applicationLayout/ApplicationLayout';

const App = () => {
  return (  
    <ApplicationLayout>
      <Home />
    </ApplicationLayout>
  );
}

export default App;
