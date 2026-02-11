import { useEffect, useRef } from "react";
import "../styles/FeaturesSection.css";
import feature1 from "../assets/feature1.jpeg";
import feature2 from "../assets/feature2.jpeg";
import feature3 from "../assets/feature3.jpeg";
import feature4 from "../assets/feature4.jpeg";
import feature5 from "../assets/feature5.jpeg";
import { useLanguage } from "../i18n/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      title: t.features.feature1.title,
      text: t.features.feature1.text,
      image: feature1,
    },
    {
      title: t.features.feature2.title,
      text: t.features.feature2.text,
      image: feature2,
    },
    {
      title: t.features.feature3.title,
      text: t.features.feature3.text,
      image: feature3,
    },
    {
      title: t.features.feature4.title,
      text: t.features.feature4.text,
      image: feature4,
    },
    {
      title: t.features.feature5.title,
      text: t.features.feature5.text,
      image: feature5,
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
        <span className="note-text">details</span>
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

export default FeaturesSection;
