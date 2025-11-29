import "../styles/SubBanner.css";
import { useLanguage } from "../i18n/LanguageContext";

export default function SubBanner() {
  const { t } = useLanguage();
  
  return (
    <section className="subbanner">
      <div className="subbanner-left">
        <h2>{t.subBanner.heading}</h2>
      </div>
      <div className="subbanner-right">
        <p>
          {t.subBanner.description}
        </p>
      </div>
    </section>
  );
}
