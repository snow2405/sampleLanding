import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
