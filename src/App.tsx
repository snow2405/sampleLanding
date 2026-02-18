import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import HomePage from './pages/HomePage';
import CampaignPage from './pages/CampaignPage';
import SmileCampaignPage from './pages/SmileCampaignPage';
import TermsPage from './pages/TermsPage';
import SupportPage from './pages/SupportPage';
import { analytics } from './utils/analytics';

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    analytics.pageView(location.pathname, document.title);
  }, [location]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anti-ghosting-campaign" element={<CampaignPage />} />
          <Route path="/smile" element={<SmileCampaignPage />} />
          <Route path="/smile-campaign" element={<SmileCampaignPage />} />
          <Route path="/smile/de" element={<SmileCampaignPage lang="de" />} />
          <Route path="/smile/en" element={<SmileCampaignPage lang="en" />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
