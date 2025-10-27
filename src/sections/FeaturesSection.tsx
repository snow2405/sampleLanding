import "../styles/FeaturesSection.css";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.jpg";
import feature4 from "../assets/feature4.jpg";
import feature1 from "../assets/feature1.jpg";

const features = [
  {
    title: "19 Uhr: Freue dich auf neue Profile",
    text: "Jeden Tag um 19:00 Uhr schicken wir dir potenzielle Matches, von denen wir glauben, dass sie dir gefallen könnten.",
    image: feature2,
  },
  {
    title: "Du und deine wertvolle Zeit liegen uns am Herzen",
    text: "Hast du ein Match, kann es sofort losgehen. Du füllst einen Dateplaner aus, und wir organisieren euer erstes Treffen.",
    image: feature3,
  },
  {
    title: "Auf die Plätze, fertig, Date!",
    text: "Unsere Partnerlokale freuen sich darauf, dir und deinem gsehni-Date ein sicheres, angenehmes Treffen zu ermöglichen.",
   image: feature4,
  }, 
  {
    title: "Sicher. Verifiziert. Ungezwungen.",
    text: "Alle Datenden sind verifiziert, treffen sich an sicheren Orten, und Ghoster verlieren ihr Konto. Unser Support-Team ist immer für dich da.",
    image: feature1,
  },
];

const FeaturesSection = () => {
  return (
    <section className="features">
      {features.map((f, i) => (
        <div
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
