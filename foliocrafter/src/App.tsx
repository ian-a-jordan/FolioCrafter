import { Routes, Route } from 'react-router-dom';  // Import routing
import HomePage from './pages/HomePage';  // HomePage component
import MainPage from './pages/MainPage';  // MainPage component (assuming you have this)
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/main" element={<MainPage />} /> 
    </Routes>
  );
}

export default App;
