import './App.css';
import Homepage from './components/style/homepage';
import Header from './components/common/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/style/LoginPage';
import Footer from './components/common/footer';
import Portfolio from './components/style/Portfolio';
import Help from './components/style/help';
import Knowmore from './components/style/knowmore';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/help" element={<Help />} />
          <Route path="/knowmore" element={<Knowmore />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
