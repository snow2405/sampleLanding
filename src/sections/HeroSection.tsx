import { useRef, useEffect } from "react";
import heroVideo from "../assets/hero-video.mp4";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import PhoneSignupForm from "../components/PhoneSignupForm";

export default function HeroSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Programmatically play video for iOS Safari compatibility
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // iOS Safari requires user interaction or needs play() to be called
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, this is fine - user can see the video still
        });
      }
    }
  }, []);

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




  return (
    <section className="hero">
      <div className="hero-logo">👀 gsehni</div>
      <LanguageSwitcher />
      <div className="hero-left">
        <h1>{t.hero.title}</h1>
        <p>
          {parseDescription(t.hero.description)}
        </p>

        <PhoneSignupForm />
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
