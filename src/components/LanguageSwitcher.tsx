import { useLanguage } from '../i18n/LanguageContext';
import { analytics } from '../utils/analytics';
import '../styles/LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: 'de' | 'en') => {
    setLanguage(lang);
    analytics.event('language_change', {
      from_language: language,
      to_language: lang,
    });
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-button ${language === 'de' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('de')}
        aria-label="Switch to German"
      >
        {t.languageSwitcher.de}
      </button>
      <button
        className={`lang-button ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
      >
        {t.languageSwitcher.en}
      </button>
    </div>
  );
}

