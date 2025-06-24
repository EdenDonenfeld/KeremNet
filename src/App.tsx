import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './components/home/Home';
import ApplicationLayout from './components/applicationLayout/ApplicationLayout';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationLayout>
        <Home />
      </ApplicationLayout>
    </QueryClientProvider>
  );
}

export default App;
