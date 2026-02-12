import heroVideo from "../assets/hero-video.mp4";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import PhoneSignupForm from "../components/PhoneSignupForm";

export default function CampaignHeroSection() {
  const { t, language } = useLanguage();

  // Parse description to handle <u> tags
  const parseDescription = (text: string) => {
    const parts = text.split(/(<u>.*?<\/u>)/);
    return parts.map((part, index) => {
      if (part.startsWith('<u>') && part.endsWith('</u>')) {
        const content = part.replace(/<\/?u>/g, '');
        return <u key={index}>{content}</u>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const campaignFormTitle = language === 'de' 
    ? 'Wötsch Teil vo de Veränderig si?'
    : 'Want to be part of the change?';

  return (
    <section className="hero">
      <div className="hero-logo">💔 Anti-Ghosting Campaign</div>
      <LanguageSwitcher />
      <div className="hero-left">
        <h1>{t.campaign.hero.title}</h1>
        <p>
          {parseDescription(t.campaign.hero.description)}
        </p>

        <PhoneSignupForm customTitle={campaignFormTitle} />
      </div>

      <div className="hero-right">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        />
      </div>
    </section>
  );
}
