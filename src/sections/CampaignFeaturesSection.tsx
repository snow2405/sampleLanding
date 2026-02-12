import { useEffect, useRef } from "react";
import "../styles/FeaturesSection.css";
import campaign1 from "../assets-campaign/campaign1.jpeg";
import campaign2 from "../assets-campaign/campaign2.jpeg";
import campaign3 from "../assets-campaign/campaign3.jpeg";
import campaign4 from "../assets-campaign/campaign4.jpeg";
import campaign5 from "../assets-campaign/campaign5.jpeg";
import { useLanguage } from "../i18n/LanguageContext";

const CampaignFeaturesSection = () => {
  const { t } = useLanguage();
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      title: t.campaign.features.feature1.title,
      text: t.campaign.features.feature1.text,
      image: campaign1,
    },
    {
      title: t.campaign.features.feature2.title,
      text: t.campaign.features.feature2.text,
      image: campaign2,
    },
    {
      title: t.campaign.features.feature3.title,
      text: t.campaign.features.feature3.text,
      image: campaign3,
    },
    {
      title: t.campaign.features.feature4.title,
      text: t.campaign.features.feature4.text,
      image: campaign4,
    },
    {
      title: t.campaign.features.feature5.title,
      text: t.campaign.features.feature5.text,
      image: campaign5,
    },
  ];

  useEffect(() => {
    const observers = featureRefs.current.map((ref) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  return (
    <section className="features">
      <div className="handwritten-note">
        <span className="note-text">the truth</span>
        <svg className="note-arrow" width="40" height="60" viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5 Q18 25, 22 35 Q21 40, 20 50 L20 55 M15 48 L20 55 L25 48" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="polaroid-grid">
        {features.map((f, i) => (
          <div
            ref={(el) => { featureRefs.current[i] = el; }}
            className={`polaroid-card ${i % 2 === 0 ? "left" : "right"}`}
            key={i}
          >
            <div className="polaroid-frame">
              <div className="polaroid-image">
                <img src={f.image} alt={f.title} />
              </div>
              <div className="polaroid-caption">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampaignFeaturesSection;
