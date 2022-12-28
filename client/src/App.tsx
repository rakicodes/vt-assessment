import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import Dashboard from './pages/Dashboard'
import Blog from './pages/Blog'
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
          <>
              <Header />
              <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/:slug" element={<Blog />}/>
              </Routes>
          </>
      </Router>
    </>
  );
}

export default App;
