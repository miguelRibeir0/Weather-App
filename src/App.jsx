import './index.css';
import { createRoot } from 'react-dom/client';
import Landing from './Landing.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './WeatherDetails.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20 * 60 * 1000,
      cacheTime: 20 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/weatherDetails" element={<Details />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
