import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Dashboard from './pages/Dashboard'
import Blog from './pages/Blog'
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
          <>
              <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/:blogId" element={<Blog />}/> { /* what if blog doesn't exist? */ }
              </Routes>
          </>
      </Router>
    </>
  );
}

export default App;
