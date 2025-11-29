import "../styles/Footer.css";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <p>{t.footer.copyright}</p>
    </footer>
  );
}
