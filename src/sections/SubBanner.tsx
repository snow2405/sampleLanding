import "../styles/SubBanner.css";
import { useLanguage } from "../i18n/LanguageContext";
import feature6 from "../assets/feature6.jpeg";

export default function SubBanner() {
  const { t } = useLanguage();
  
  return (
    <section className="subbanner">
      <div className="subbanner-left">
        <div className="polaroid-intro">
          <div className="tape"></div>
          <div className="polaroid-intro-frame">
            <div className="polaroid-intro-image">
              <img src={feature6} alt="gsehni" />
            </div>
            <div className="polaroid-intro-caption">
              <p>{t.subBanner.polaroidCaption}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="subbanner-right">
        <h2>{t.subBanner.heading}</h2>
        <p>{t.subBanner.description}</p>
      </div>
    </section>
  );
}
