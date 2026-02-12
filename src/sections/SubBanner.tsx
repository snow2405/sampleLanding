import "../styles/SubBanner.css";
import { useLanguage } from "../i18n/LanguageContext";
import feature6 from "../assets/feature6.jpeg";

interface SubBannerProps {
  isCampaign?: boolean;
}

export default function SubBanner({ isCampaign = false }: SubBannerProps) {
  const { t } = useLanguage();
  const content = isCampaign ? t.campaign.subBanner : t.subBanner;
  
  return (
    <section className="subbanner">
      <div className="subbanner-left">
        <div className="polaroid-intro">
          <div className="tape"></div>
          <div className="polaroid-intro-frame">
            <div className="polaroid-intro-image">
              {isCampaign ? (
                <div className="polaroid-placeholder">📱💬👻</div>
              ) : (
                <img src={feature6} alt="gsehni" />
              )}
            </div>
            <div className="polaroid-intro-caption">
              <p>{content.polaroidCaption}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="subbanner-right">
        <h2>{content.heading}</h2>
        <p>{content.description}</p>
      </div>
    </section>
  );
}
