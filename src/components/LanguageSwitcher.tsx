import { useLanguage } from '../i18n/LanguageContext';
import '../styles/LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`lang-button ${language === 'de' ? 'active' : ''}`}
        onClick={() => setLanguage('de')}
        aria-label="Switch to German"
      >
        {t.languageSwitcher.de}
      </button>
      <button
        className={`lang-button ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        {t.languageSwitcher.en}
      </button>
    </div>
  );
}

