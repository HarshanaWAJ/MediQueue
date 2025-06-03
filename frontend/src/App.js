import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';

import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
