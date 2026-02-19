import { useRef, useEffect } from "react";
import heroVideo from "../assets/hero-video.mp4";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import PhoneSignupForm from "../components/PhoneSignupForm";

export default function SmileCampaignHeroSection() {
  const { t, language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Programmatically play video for iOS Safari compatibility
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented
        });
      }
    }
  }, []);

  const campaignFormTitle = language === 'de' 
    ? t.smileCampaign.hero.formLabel
    : t.smileCampaign.hero.formLabel;

  return (
    <section className="hero">
      <div className="hero-logo">I like your smile.</div>
      <LanguageSwitcher />
      <div className="hero-left">
        <h1>{t.smileCampaign.hero.title}</h1>
        <p>{t.smileCampaign.hero.description}</p>
        <PhoneSignupForm customTitle={campaignFormTitle} />
      </div>

      <div className="hero-right">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="hero-video"
        />
      </div>
    </section>
  );
}
