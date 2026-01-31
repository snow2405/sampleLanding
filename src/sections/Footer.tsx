import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{t.footer.copyright}</p>
        <div className="footer-links">
          <Link to="/terms">Terms & Privacy</Link>
          <Link to="/support">Support</Link>
        </div>
      </div>
    </footer>
  );
}
