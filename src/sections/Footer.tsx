import "../styles/Footer.css";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { analytics } from "../utils/analytics";

export default function Footer() {
  const { t } = useLanguage();
  const location = useLocation();
  const isCampaignPage = location.pathname === '/anti-ghosting-campaign';
  
  const handleLinkClick = (linkName: string) => {
    analytics.buttonClick(`footer_link_${linkName}`, 'footer');
  };
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{t.footer.copyright}</p>
        <div className="footer-links">
          {isCampaignPage ? (
            <Link to="/" onClick={() => handleLinkClick('main_page')}>← Back to Main Page</Link>
          ) : (
            <Link to="/anti-ghosting-campaign" onClick={() => handleLinkClick('campaign')}>💔 Anti-Ghosting Campaign</Link>
          )}
          <Link to="/terms" onClick={() => handleLinkClick('terms')}>Terms & Privacy</Link>
          <Link to="/support" onClick={() => handleLinkClick('support')}>Support</Link>
        </div>
      </div>
    </footer>
  );
}
