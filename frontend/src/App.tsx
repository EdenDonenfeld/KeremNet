import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApplicationLayout from './components/applicationLayout/ApplicationLayout';
import Home from './components/pages/home/Home';
import ChosenPost from './components/pages/chosenPost/ChosenPost';
import ErrorPage from './components/pages/errorPage/ErrorPage';
import AddPost from './components/pages/addPost/AddPost';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ApplicationLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts/:id" element={<ChosenPost />} />
              <Route path="/add-post" element={<AddPost />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
        </ApplicationLayout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
