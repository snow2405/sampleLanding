import "../styles/Footer.css";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { analytics } from "../utils/analytics";

export default function Footer() {
  const { t } = useLanguage();
  const location = useLocation();
  const isCampaignPage = location.pathname === '/anti-ghosting-campaign';
  const isSmileCampaign = location.pathname === '/smile-campaign' || 
                         location.pathname === '/smile/de' || 
                         location.pathname === '/smile/en';
  
  const handleLinkClick = (linkName: string) => {
    analytics.buttonClick(`footer_link_${linkName}`, 'footer');
  };
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{t.footer.copyright}</p>
        <div className="footer-links">
          {/* Work with us - always shown */}
          <a 
            href="mailto:hoi@gsehni.com" 
            onClick={() => handleLinkClick('contact')}
          >
            {t.footer.workWithUs}
          </a>
          
          {/* Campaign links - show the campaign you're NOT on */}
          {!isCampaignPage && (
            <Link to="/anti-ghosting-campaign" onClick={() => handleLinkClick('anti_ghosting_campaign')}>
              {t.footer.antiGhostingCampaign}
            </Link>
          )}
          {!isSmileCampaign && (
            <Link to="/smile-campaign" onClick={() => handleLinkClick('smile_campaign')}>
              {t.footer.smileCampaign}
            </Link>
          )}
          
          {/* Standard links */}
          <Link to="/terms" onClick={() => handleLinkClick('terms')}>Terms & Privacy</Link>
          <Link to="/support" onClick={() => handleLinkClick('support')}>Support</Link>
        </div>
      </div>
    </footer>
  );
}
