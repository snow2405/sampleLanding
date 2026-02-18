import "../styles/SubBanner.css";
import { useLanguage } from "../i18n/LanguageContext";
import launchImage from "../assets-campaign/feature3.jpeg";

export default function SmileLaunchSection() {
  const { t } = useLanguage();
  
  return (
    <section className="subbanner">
      <div className="subbanner-right" style={{ order: 1 }}>
        <h2>{t.smileCampaign.launch.title}</h2>
        <p>{t.smileCampaign.launch.text}</p>
        <p style={{ marginTop: '1rem', fontSize: '0.95rem', opacity: 0.8 }}>
          {t.smileCampaign.launch.workWithUsQuestion}{' '}
          <a href="mailto:hoi@gsehni.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
            {t.smileCampaign.launch.workWithUsLink}
          </a>
        </p>
      </div>
      <div className="subbanner-left" style={{ order: 2 }}>
        <div className="polaroid-intro">
          <div className="tape"></div>
          <div className="polaroid-intro-frame">
            <div className="polaroid-intro-image">
              <img src={launchImage} alt="Coming soon" />
            </div>
            <div className="polaroid-intro-caption">
              <p>Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
