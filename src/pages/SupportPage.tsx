import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { analytics } from '../utils/analytics';
import '../styles/SupportPage.css';

export default function SupportPage() {
  useEffect(() => {
    analytics.event('page_visit', {
      page_name: 'support',
      page_path: '/support',
    });
  }, []);

  return (
    <div className="support-page">
      <nav className="support-nav">
        <Link to="/" className="back-link">← Back to Home</Link>
        <div className="support-logo">👀 gsehni</div>
      </nav>

      <div className="support-container">
        <div className="support-header">
          <h1>Support & Help Center</h1>
          <p>Mir sind für dich da! / We're here to help!</p>
        </div>

        <div className="support-content">
          
          {/* FAQ Section */}
          <div className="support-section">
            <h2>🔍 Häufigi Frage / Frequently Asked Questions</h2>
            
            <div className="faq-item">
              <h3>Wenn chan ich d'App nutze?</h3>
              <p>
                D'App isch momentan no i de Entwicklig. Wenn du dich für d'Warteliste aamelds häsch, 
                melde mir eus sobald du d'App chasch usprobiere. Mir versende die Zugäng i Welle a 
                neui Nutzer*inne.
              </p>
              <p className="english-text">
                <strong>English:</strong> The app is currently in development. If you've signed up 
                for the waitlist, we'll notify you as soon as you can try the app. We're sending 
                invites in waves to new users.
              </p>
            </div>

            <div className="faq-item">
              <h3>Wie funktioniert gsehni?</h3>
              <p>
                gsehni hilft dir, echti Lüt für offline Dates z'finde, ohni stundelang z'swipe. 
                Du erstellsch dis Profil, mir schlage dir passendi Matches vor, und ihr chönd direkt 
                Date plane - kei endloses Chatte meh!
              </p>
              <p className="english-text">
                <strong>English:</strong> gsehni helps you find real people for offline dates without 
                endless swiping. You create your profile, we suggest compatible matches, and you can 
                plan dates directly - no more endless chatting!
              </p>
            </div>

            <div className="faq-item">
              <h3>Sind mini Date sicher?</h3>
              <p>
                Ja! Dini Date werded mit modernste Verschlüsseligsstandards (SSL/TLS und AES-256) 
                gschützt. Mir gänd niemals dini persönliche Date ohne dis Iiverschtändnis wiiter. 
                Lueg in üseri <Link to="/terms">Privacy Policy</Link> für meh Informatione.
              </p>
              <p className="english-text">
                <strong>English:</strong> Yes! Your data is protected with modern encryption standards 
                (SSL/TLS and AES-256). We never share your personal data without your consent. 
                Check our <Link to="/terms">Privacy Policy</Link> for more information.
              </p>
            </div>

            <div className="faq-item">
              <h3>Was kostet gsehni?</h3>
              <p>
                Die Basis-Funktione vo gsehni sind koschtelos. Mir plane später au Premium-Features 
                azbiete, aber momentan chasch dich eifach anamälde und d'App gratis nutze sobald du 
                en Zugang hesch.
              </p>
              <p className="english-text">
                <strong>English:</strong> The basic features of gsehni are free. We plan to offer 
                premium features later, but for now you can simply sign up and use the app for free 
                once you have access.
              </p>
            </div>

            <div className="faq-item">
              <h3>Cha ich mini Daten lösche?</h3>
              <p>
                Ja, du hesch s'volle Rächt uf Löschig vo dine Date. Du chasch dis Konto jederziit 
                i de App-Iistellige lösche, oder schriib eus a <strong>privacy@gsehni.com</strong>.
              </p>
              <p className="english-text">
                <strong>English:</strong> Yes, you have the full right to delete your data. You can 
                delete your account anytime in the app settings, or email us at <strong>privacy@gsehni.com</strong>.
              </p>
            </div>

            <div className="faq-item">
              <h3>I welche Region funktioniert gsehni?</h3>
              <p>
                Momentan konzentriere mir eus uf d'Schwiiz. Mir plane aber, gsehni bald au i andere 
                Länder z'bringe. Wenn du ussrhalb vo de Schwiiz bisch, mäld dich trotzdem a - 
                mir informiere dich sobald mir i dinere Region verfüegbar sind!
              </p>
              <p className="english-text">
                <strong>English:</strong> Currently we're focused on Switzerland. However, we plan 
                to bring gsehni to other countries soon. If you're outside Switzerland, sign up 
                anyway - we'll notify you when we're available in your region!
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="support-section contact-section">
            <h2>📧 Kontaktier eus / Contact Us</h2>
            <p>
              Hesch e Frag oder bruchsch Hilf? Mir sind gärn für dich da! / 
              Have a question or need help? We're happy to help!
            </p>
            
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">💬</div>
                <h3>Allgemäini Frage / General Questions</h3>
                <p>Für Frage über d'App, Features, oder wie's funktioniert</p>
                <a href="mailto:support@gsehni.com" className="contact-email">
                  support@gsehni.com
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">🔒</div>
                <h3>Dateschutz / Privacy</h3>
                <p>Frage zu dinere Privatsphäre und Date</p>
                <a href="mailto:privacy@gsehni.com" className="contact-email">
                  privacy@gsehni.com
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">⚖️</div>
                <h3>Rechtliches / Legal</h3>
                <p>Für rechtlichi Frage und Aafroge</p>
                <a href="mailto:legal@gsehni.com" className="contact-email">
                  legal@gsehni.com
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">🐛</div>
                <h3>Technischi Problem / Technical Issues</h3>
                <p>Bugs, technischi Fehler oder Problem mit de App</p>
                <a href="mailto:support@gsehni.com" className="contact-email">
                  support@gsehni.com
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">🚨</div>
                <h3>Sicherheit & Missbrauch / Safety & Abuse</h3>
                <p>Melde unaagmässes Verhalte oder Sicherheitsproblem</p>
                <a href="mailto:safety@gsehni.com" className="contact-email">
                  safety@gsehni.com
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">💼</div>
                <h3>Partnerschafte / Partnerships</h3>
                <p>Gschäftlichi Aafroge und Partnerschaften</p>
                <a href="mailto:partnerships@gsehni.com" className="contact-email">
                  partnerships@gsehni.com
                </a>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="support-section response-info">
            <h2>⏱️ Antwortziit / Response Time</h2>
            <p>
              Mir bemühe eus, alli Affroge innerhalb vo <strong>24-48 Stund</strong> z'beantworte. 
              Bi dringände Sicherheitsproblem antworte mir so schnell wie möglich.
            </p>
            <p className="english-text">
              <strong>English:</strong> We strive to respond to all inquiries within <strong>24-48 hours</strong>. 
              For urgent security issues, we respond as quickly as possible.
            </p>
          </div>

          {/* Safety Tips */}
          <div className="support-section safety-section">
            <h2>🛡️ Sicherheitstipps / Safety Tips</h2>
            <ul>
              <li>✓ Triff dich immer a öffentliche Ort für s'erschte Date</li>
              <li>✓ Sag dinere Familie oder Fründe, wohii du gasch</li>
              <li>✓ Teil nie Finanzdaten oder schick kei Gäld</li>
              <li>✓ Vertrau dim Bauchgfühl - wenn öppis komisch isch, brech ab</li>
              <li>✓ Melde verdächtige Profile oder Verhalte sofort</li>
            </ul>
            <p className="english-text">
              <strong>English Safety Tips:</strong><br/>
              ✓ Always meet in public places for first dates<br/>
              ✓ Tell your family or friends where you're going<br/>
              ✓ Never share financial information or send money<br/>
              ✓ Trust your gut - if something feels off, walk away<br/>
              ✓ Report suspicious profiles or behavior immediately
            </p>
          </div>

          {/* Additional Resources */}
          <div className="support-section resources-section">
            <h2>📚 Wiitri Ressource / Additional Resources</h2>
            <div className="resource-links">
              <Link to="/terms" className="resource-link">
                📋 Terms of Use & Privacy Policy
              </Link>
              <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" className="resource-link">
                🇨🇭 Swiss Data Protection Authority (FDPIC)
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
