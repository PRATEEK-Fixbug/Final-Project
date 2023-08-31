import './App.css';
import Homepage from './components/style/homepage';
import Header from './components/common/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import LoginPage from './components/style/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes> {/* Use Routes to wrap your Route components */}
          <Route path="/" element={<Homepage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
