import "../styles/SubBanner.css";
import { useLanguage } from "../i18n/LanguageContext";
import visionImage from "../assets/feature1.jpeg";

export default function SmileVisionSection() {
  const { t } = useLanguage();
  
  return (
    <section className="subbanner">
      <div className="subbanner-left">
        <div className="polaroid-intro">
          <div className="tape"></div>
          <div className="polaroid-intro-frame">
            <div className="polaroid-intro-image">
              <img src={visionImage} alt="gsehni vision" />
            </div>
            <div className="polaroid-intro-caption">
              <p>{t.smileCampaign.vision.polaroidCaption}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="subbanner-right">
        <h2>{t.smileCampaign.vision.title}</h2>
        <p>{t.smileCampaign.vision.text}</p>
      </div>
    </section>
  );
}
