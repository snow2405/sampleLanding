import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { analytics } from "../utils/analytics";

export default function Footer() {
  const { t } = useLanguage();
  
  const handleLinkClick = (linkName: string) => {
    analytics.buttonClick(`footer_link_${linkName}`, 'footer');
  };
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{t.footer.copyright}</p>
        <div className="footer-links">
          <Link to="/terms" onClick={() => handleLinkClick('terms')}>Terms & Privacy</Link>
          <Link to="/support" onClick={() => handleLinkClick('support')}>Support</Link>
        </div>
      </div>
    </footer>
  );
}
