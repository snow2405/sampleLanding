import { Link } from 'react-router-dom';
import '../styles/AGBSection.css';

export default function AGBSection() {
  return (
    <section className="agb-section">
      <div className="agb-container">
        <h2>Dateschutz & AGB</h2>
        
        <div className="agb-content">
          <div className="agb-card">
            <h3>🔒 Dateschutz</h3>
            <p>
              <strong>Dini Date sind sicher bi eus.</strong> Mir sammled nur die Informatione, 
              wo mir bruched, zum dir e bessers Erläbnis z'biete. Dini Telefonnummer wird nur 
              gnutzt, zum dich z'informiere, wenn d'App verfüegbar isch.
            </p>
            <ul>
              <li>✓ Verschlüsselti Date-Übertraagig (SSL/TLS)</li>
              <li>✓ Kei Wiitergab a Dritti ohni dis Iiverschtändnis</li>
              <li>✓ Du chasch dini Date jederziit lösche</li>
              <li>✓ Minimali Date-Erfassig (Privacy by Design)</li>
            </ul>
            <Link to="/terms#privacy-policy" className="full-terms-link">
              → Read Full Privacy Policy (English)
            </Link>
          </div>

          <div className="agb-card">
            <h3>📋 AGB im Überblick</h3>
            <p>
              <strong>Wichtigi Punkti für d'Nutzig vo gsehni:</strong>
            </p>
            <ul>
              <li>Du müesch mindeschtens 18 Jahr alt si</li>
              <li>D'Nutzig isch persönlich und darf nöd witergäh werde</li>
              <li>Respektvolli Umgang mit andere Nutzer*inne isch Pflicht</li>
              <li>Fake-Profile und Spam sind verbote</li>
              <li>Mir behalted eus s'Rächt vor, Accounts z'sperre bi Verstöss</li>
            </ul>
            <Link to="/terms#terms-of-use" className="full-terms-link">
              → Read Full Terms of Use (English)
            </Link>
          </div>

          <div className="agb-card">
            <h3>🛡️ Dini Rächt</h3>
            <p>
              Nach de DSGVO hesch du folgengi Rächt:
            </p>
            <ul>
              <li>Rächt uf Uskunft über dini gspeicherte Date</li>
              <li>Rächt uf Berichtigig vo falsche Date</li>
              <li>Rächt uf Löschig (Rächt uf Vergessewerden)</li>
              <li>Rächt uf Dateportabilität</li>
              <li>Widerspruchsrächt gäg d'Verarbeitig</li>
            </ul>
            <p className="contact-info">
              Frage? Schriib eus a <strong>privacy@gsehni.com</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
