import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/AGBSection.css';

export default function AGBSection() {
  const { t } = useLanguage();

  return (
    <section className="agb-section">
      <div className="agb-container">
        <h2>{t.agb.heading}</h2>
        
        <div className="agb-content">
          <div className="agb-card">
            <h3>{t.agb.privacy.title}</h3>
            <p>
              <strong>{t.agb.privacy.intro}</strong> {t.agb.privacy.description}
            </p>
            <ul>
              <li>{t.agb.privacy.point1}</li>
              <li>{t.agb.privacy.point2}</li>
              <li>{t.agb.privacy.point3}</li>
              <li>{t.agb.privacy.point4}</li>
            </ul>
            <Link to="/terms#privacy-policy" className="full-terms-link">
              {t.agb.privacy.link}
            </Link>
          </div>

          <div className="agb-card">
            <h3>{t.agb.terms.title}</h3>
            <p>
              <strong>{t.agb.terms.intro}</strong>
            </p>
            <ul>
              <li>{t.agb.terms.point1}</li>
              <li>{t.agb.terms.point2}</li>
              <li>{t.agb.terms.point3}</li>
              <li>{t.agb.terms.point4}</li>
              <li>{t.agb.terms.point5}</li>
            </ul>
            <Link to="/terms#terms-of-use" className="full-terms-link">
              {t.agb.terms.link}
            </Link>
          </div>

          <div className="agb-card">
            <h3>{t.agb.rights.title}</h3>
            <p>
              {t.agb.rights.intro}
            </p>
            <ul>
              <li>{t.agb.rights.point1}</li>
              <li>{t.agb.rights.point2}</li>
              <li>{t.agb.rights.point3}</li>
              <li>{t.agb.rights.point4}</li>
              <li>{t.agb.rights.point5}</li>
            </ul>
            <p className="contact-info">
              {t.agb.rights.contact} <strong>privacy@gsehni.com</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
