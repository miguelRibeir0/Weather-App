import './index.css';
import { createRoot } from 'react-dom/client';
import Landing from './Landing.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './Details.jsx';
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
