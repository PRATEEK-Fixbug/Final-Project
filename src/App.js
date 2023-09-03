import './App.css';
import Homepage from './components/style/homepage';
import Header from './components/common/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/style/LoginPage';
import HelpComponents from './components/style/ContactSection';
import Footer from './components/common/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/ContactSection" element={<HelpComponents />}>
            {/* Use relative route paths for nested routes */}
            <Route path="comment" element={<HelpComponents.CommentSection />} />
            <Route path="user-guide" element={<HelpComponents.UserGuideSection />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
