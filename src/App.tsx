import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApplicationLayout from './components/applicationLayout/ApplicationLayout';
import Home from './components/pages/home/Home';
import ChosenPost from './components/pages/chosenPost/ChosenPost';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ApplicationLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts/:id" element={<ChosenPost />} />
            </Routes>
        </ApplicationLayout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
