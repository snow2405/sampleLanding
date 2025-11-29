import { useEffect, useRef } from "react";
import "../styles/FeaturesSection.css";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.jpg";
import feature4 from "../assets/feature4.jpg";
import feature1 from "../assets/feature1.jpg";
import { useLanguage } from "../i18n/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      title: t.features.feature1.title,
      text: t.features.feature1.text,
      image: feature2,
    },
    {
      title: t.features.feature2.title,
      text: t.features.feature2.text,
      image: feature3,
    },
    {
      title: t.features.feature3.title,
      text: t.features.feature3.text,
      image: feature4,
    },
    {
      title: t.features.feature4.title,
      text: t.features.feature4.text,
      image: feature1,
    },
  ];

  useEffect(() => {
    const observers = featureRefs.current.map((ref, index) => {
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
      {features.map((f, i) => (
        <div
          ref={(el) => (featureRefs.current[i] = el)}
          className={`feature-row ${i % 2 === 0 ? "normal" : "reverse"}`}
          key={i}
        >
          <div className="feature-image">
            <img src={f.image} alt={f.title} />
          </div>
          <div className="feature-text">
            <h2>{f.title}</h2>
            <p>{f.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
