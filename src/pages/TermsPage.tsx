import { Link } from 'react-router-dom';
import '../styles/LegalPage.css';

export default function TermsPage() {
  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <Link to="/" className="back-link">← Back to Home</Link>
        <div className="legal-logo">👀 gsehni</div>
      </nav>

      <div className="legal-page-container">
        
        {/* Privacy Policy */}
        <div id="privacy-policy" className="legal-document">
          <h1>Privacy Policy & Data Security</h1>
          <p className="last-updated">Last Updated: February 1, 2026</p>
          
          <div className="legal-content">
            <h2>1. Introduction</h2>
            <p>
              gsehni ("we", "us", "our") operates the gsehni.com website and mobile application 
              (collectively, the "Service"). This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our Service. By using the Service, 
              you consent to the data practices described in this policy.
            </p>

            <h2>2. Data Controller</h2>
            <p>
              The data controller responsible for your personal data is:<br/>
              <strong>gsehni.com</strong><br/>
              Switzerland<br/>
              Email: privacy@gsehni.com
            </p>

            <h2>3. Information We Collect</h2>
            
            <h3>3.1 Information You Provide</h3>
            <ul>
              <li><strong>Phone Number:</strong> When you sign up for our waitlist or create an account, 
              we collect your phone number for authentication and communication purposes.</li>
              <li><strong>Profile Information:</strong> Name, age, gender, photos, bio, preferences, 
              and other information you choose to provide.</li>
              <li><strong>Communications:</strong> Messages you send through the Service, including 
              chat messages and feedback.</li>
              <li><strong>Payment Information:</strong> If applicable, payment card details processed 
              securely through third-party payment processors.</li>
            </ul>

            <h3>3.2 Automatically Collected Information</h3>
            <ul>
              <li><strong>Device Information:</strong> Device type, operating system, unique device 
              identifiers, mobile network information.</li>
              <li><strong>Usage Data:</strong> Pages viewed, features used, time spent on the Service, 
              clicks, and interactions.</li>
              <li><strong>Location Data:</strong> With your permission, approximate and precise 
              location data to facilitate local matches.</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies, pixels, and similar tracking 
              technologies to enhance user experience and analyze Service usage.</li>
            </ul>

            <h3>3.3 Information from Third Parties</h3>
            <ul>
              <li>Social media profile information if you connect your account</li>
              <li>Information from other users who interact with you</li>
              <li>Information from business partners and affiliates</li>
            </ul>

            <h2>4. Legal Basis for Processing (GDPR)</h2>
            <p>We process your personal data based on the following legal grounds:</p>
            <ul>
              <li><strong>Consent:</strong> You have given explicit consent for specific processing 
              activities (e.g., location tracking, marketing communications).</li>
              <li><strong>Contract Performance:</strong> Processing is necessary to fulfill our 
              contract with you (providing the dating service).</li>
              <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate 
              business interests (e.g., fraud prevention, service improvement) while respecting your 
              rights.</li>
              <li><strong>Legal Obligations:</strong> Processing is required to comply with legal 
              obligations (e.g., tax laws, law enforcement requests).</li>
            </ul>

            <h2>5. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide, maintain, and improve the Service</li>
              <li>Create and manage your account</li>
              <li>Match you with other users based on preferences and location</li>
              <li>Facilitate communication between matched users</li>
              <li>Process transactions and send related information</li>
              <li>Send you notifications about matches, messages, and Service updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Detect, prevent, and address fraud, security issues, and technical problems</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations and enforce our policies</li>
              <li>Conduct research and development for Service enhancement</li>
            </ul>

            <h2>6. Data Sharing and Disclosure</h2>
            
            <h3>6.1 With Other Users</h3>
            <p>
              Your profile information (name, photos, bio) is visible to other users when you match 
              or interact with them. Your phone number is never shared with other users without your 
              explicit consent.
            </p>

            <h3>6.2 Service Providers</h3>
            <p>We may share your information with third-party service providers who perform services 
            on our behalf, including:</p>
            <ul>
              <li>Cloud hosting providers (e.g., AWS, Google Cloud)</li>
              <li>Analytics services (e.g., Google Analytics)</li>
              <li>Payment processors (e.g., Stripe)</li>
              <li>Customer support platforms</li>
              <li>Marketing and communication tools</li>
            </ul>
            <p>
              These providers are contractually obligated to use your data only for providing services 
              to us and to maintain appropriate security measures.
            </p>

            <h3>6.3 Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to:</p>
            <ul>
              <li>Valid legal processes (subpoenas, court orders)</li>
              <li>Law enforcement requests</li>
              <li>Protection of our rights, property, or safety</li>
              <li>Protection of users or the public from harm or illegal activities</li>
              <li>Prevention or investigation of fraud, security issues, or technical problems</li>
            </ul>

            <h3>6.4 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, bankruptcy, or sale of assets, your information 
              may be transferred to the successor entity. We will notify you of any such change.
            </p>

            <h3>6.5 With Your Consent</h3>
            <p>
              We may share your information with third parties when you explicitly consent to such sharing.
            </p>

            <h2>7. Data Security</h2>
            <p>
              We implement robust technical and organizational security measures to protect your data:
            </p>
            <ul>
              <li><strong>Encryption:</strong> All data transmissions use SSL/TLS encryption. 
              Sensitive data is encrypted at rest using industry-standard AES-256 encryption.</li>
              <li><strong>Access Controls:</strong> Strict access controls limit employee access 
              to personal data on a need-to-know basis.</li>
              <li><strong>Authentication:</strong> Multi-factor authentication for administrative access.</li>
              <li><strong>Regular Audits:</strong> Regular security audits and vulnerability assessments.</li>
              <li><strong>Secure Development:</strong> Security-first development practices including 
              code reviews and penetration testing.</li>
              <li><strong>Data Minimization:</strong> We collect only the data necessary for providing 
              the Service.</li>
              <li><strong>Incident Response:</strong> Comprehensive incident response plan for data 
              breaches.</li>
            </ul>
            <p>
              <strong>Important:</strong> While we strive to protect your data, no method of electronic 
              storage or transmission is 100% secure. We cannot guarantee absolute security.
            </p>

            <h2>8. Data Retention</h2>
            <p>We retain your personal data for as long as necessary to:</p>
            <ul>
              <li>Provide the Service to you</li>
              <li>Comply with legal obligations (e.g., tax records for 7 years)</li>
              <li>Resolve disputes and enforce our agreements</li>
              <li>Prevent fraud and maintain security</li>
            </ul>
            <p>
              <strong>Specific Retention Periods:</strong>
            </p>
            <ul>
              <li>Active account data: Retained while account is active</li>
              <li>Deleted account data: Most data deleted within 30 days; some data retained for 
              legal/security purposes for up to 12 months</li>
              <li>Transaction records: 7 years (legal requirement)</li>
              <li>Marketing data: Until consent is withdrawn</li>
              <li>Cookies and tracking data: Typically 1-2 years</li>
            </ul>

            <h2>9. Your Privacy Rights</h2>
            
            <h3>9.1 GDPR Rights (European Economic Area, UK, Switzerland)</h3>
            <ul>
              <li><strong>Right of Access:</strong> Request a copy of your personal data we hold.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or 
              incomplete data.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data 
              ("right to be forgotten").</li>
              <li><strong>Right to Restriction:</strong> Request restriction of processing in 
              certain circumstances.</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured, 
              commonly used format and transfer it to another controller.</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests 
              or for direct marketing.</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where 
              processing is based on consent.</li>
              <li><strong>Right to Lodge a Complaint:</strong> Lodge a complaint with your local 
              data protection authority.</li>
            </ul>

            <h3>9.2 Swiss Data Protection Rights</h3>
            <p>
              As a Switzerland-based company, we comply with the Swiss Federal Act on Data Protection 
              (FADP), providing you with similar rights as outlined under GDPR.
            </p>

            <h3>9.3 California Privacy Rights (CCPA/CPRA)</h3>
            <p>California residents have additional rights:</p>
            <ul>
              <li>Right to know what personal information is collected, used, shared, or sold</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of sale of personal information</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
              <li>Right to correct inaccurate personal information</li>
              <li>Right to limit use of sensitive personal information</li>
            </ul>

            <h3>9.4 How to Exercise Your Rights</h3>
            <p>
              To exercise any of these rights, contact us at <strong>privacy@gsehni.com</strong> or 
              through the in-app settings. We will respond within 30 days (GDPR) or 45 days (CCPA).
            </p>

            <h2>10. International Data Transfers</h2>
            <p>
              Your data may be transferred to and processed in countries outside your country of residence. 
              We ensure adequate protection through:
            </p>
            <ul>
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Adequacy decisions by the European Commission</li>
              <li>Other legally approved transfer mechanisms</li>
            </ul>

            <h2>11. Children's Privacy</h2>
            <p>
              The Service is intended for users aged 18 and older. We do not knowingly collect 
              information from individuals under 18. If we discover we have collected data from 
              someone under 18, we will delete it immediately.
            </p>

            <h2>12. Cookies and Tracking Technologies</h2>
            <p>We use the following types of cookies:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Necessary for the Service to function</li>
              <li><strong>Performance Cookies:</strong> Help us understand how users interact with 
              the Service</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Targeting Cookies:</strong> Used for marketing and advertising 
              (with consent)</li>
            </ul>
            <p>
              You can manage cookie preferences through your browser settings or our cookie consent tool.
            </p>

            <h2>13. Third-Party Links</h2>
            <p>
              The Service may contain links to third-party websites. We are not responsible for their 
              privacy practices. We encourage you to review their privacy policies.
            </p>

            <h2>14. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of material changes 
              via email or in-app notification at least 30 days before the changes take effect. 
              Continued use of the Service after changes constitutes acceptance.
            </p>

            <h2>15. Contact Us</h2>
            <p>
              For questions, concerns, or to exercise your privacy rights:<br/>
              Email: <strong>privacy@gsehni.com</strong><br/>
              Data Protection Officer: <strong>dpo@gsehni.com</strong>
            </p>

            <h2>16. Supervisory Authority</h2>
            <p>
              If you are in the EEA, UK, or Switzerland, you have the right to lodge a complaint 
              with your local data protection authority:
            </p>
            <ul>
              <li><strong>Switzerland:</strong> Federal Data Protection and Information Commissioner 
              (FDPIC) - <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">
              www.edoeb.admin.ch</a></li>
              <li><strong>EU/EEA:</strong> Contact your national data protection authority</li>
            </ul>
          </div>
        </div>

        {/* Terms of Use */}
        <div id="terms-of-use" className="legal-document">
          <h1>Terms of Use</h1>
          <p className="last-updated">Last Updated: February 1, 2026</p>
          
          <div className="legal-content">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using gsehni ("Service"), you agree to be bound by these Terms of Use 
              ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
            </p>

            <h2>2. Eligibility</h2>
            <p>You must meet the following criteria to use the Service:</p>
            <ul>
              <li>Be at least 18 years old</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be prohibited from using the Service under applicable laws</li>
              <li>Not have been previously banned from the Service</li>
              <li>Reside in a jurisdiction where the Service is available</li>
            </ul>
            <p>
              By using the Service, you represent and warrant that you meet all eligibility requirements.
            </p>

            <h2>3. Account Registration</h2>
            <ul>
              <li>You must provide accurate, current, and complete information during registration</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You are responsible for all activities under your account</li>
              <li>You must notify us immediately of any unauthorized access or security breach</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
              <li>One person may only maintain one account</li>
            </ul>

            <h2>4. User Conduct</h2>
            
            <h3>4.1 Prohibited Activities</h3>
            <p>You agree NOT to:</p>
            <ul>
              <li>Impersonate any person or entity or misrepresent your identity or affiliation</li>
              <li>Use false or misleading information in your profile</li>
              <li>Upload photos that are not of yourself or are inappropriate</li>
              <li>Harass, abuse, threaten, or intimidate other users</li>
              <li>Use the Service for commercial purposes or solicitation</li>
              <li>Send spam, unsolicited marketing, or fraudulent communications</li>
              <li>Engage in any illegal activities or promote illegal activities</li>
              <li>Stalk or harass users offline after connecting through the Service</li>
              <li>Share or sell your account or access credentials</li>
              <li>Use automated systems (bots, scrapers) to access the Service</li>
              <li>Reverse engineer, decompile, or attempt to extract source code</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Collect or harvest user data without consent</li>
              <li>Post content that is defamatory, obscene, pornographic, or hateful</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Circumvent security features or access restrictions</li>
              <li>Create multiple accounts to evade bans or restrictions</li>
            </ul>

            <h3>4.2 Content Standards</h3>
            <p>All content you post must:</p>
            <ul>
              <li>Be respectful and appropriate for a dating platform</li>
              <li>Not contain nudity or sexually explicit material</li>
              <li>Not promote violence, discrimination, or hate speech</li>
              <li>Not violate any laws or third-party rights</li>
              <li>Be your original content or properly licensed</li>
            </ul>

            <h2>5. License and Intellectual Property</h2>
            
            <h3>5.1 License to Use Service</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to access 
              and use the Service for personal, non-commercial purposes in accordance with these Terms.
            </p>

            <h3>5.2 Your Content</h3>
            <p>
              You retain ownership of content you post. By posting content, you grant us a worldwide, 
              non-exclusive, royalty-free, transferable, sublicensable license to use, reproduce, 
              modify, distribute, and display your content for the purpose of providing and promoting 
              the Service.
            </p>
            <p>
              You represent and warrant that:
            </p>
            <ul>
              <li>You own or have rights to all content you post</li>
              <li>Your content does not violate any laws or third-party rights</li>
              <li>You have obtained all necessary permissions for any third-party content</li>
            </ul>

            <h3>5.3 Our Intellectual Property</h3>
            <p>
              The Service, including all content, features, functionality, trademarks, logos, and 
              design, is owned by gsehni and protected by international copyright, trademark, and 
              other intellectual property laws. You may not copy, modify, distribute, or create 
              derivative works without our express written permission.
            </p>

            <h2>6. Privacy and Data Processing</h2>
            <p>
              Your use of the Service is also governed by our Privacy Policy. By using the Service, 
              you consent to:
            </p>
            <ul>
              <li>Collection and processing of your personal data as described in the Privacy Policy</li>
              <li>Use of cookies and tracking technologies</li>
              <li>Processing of your data to provide matching and communication features</li>
              <li>Sharing of your profile information with matched users</li>
              <li>Use of your data for Service improvement and analytics</li>
              <li>Communication from us regarding your account and the Service</li>
            </ul>

            <h2>7. Payment and Subscriptions</h2>
            <p>(If applicable when premium features are introduced)</p>
            <ul>
              <li><strong>Fees:</strong> Certain features may require payment. All fees are in Swiss Francs 
              (CHF) unless otherwise stated.</li>
              <li><strong>Subscriptions:</strong> Subscriptions automatically renew unless cancelled 
              before the renewal date.</li>
              <li><strong>Refunds:</strong> Refunds are provided only as required by law or at our discretion.</li>
              <li><strong>Payment Processing:</strong> Payments are processed securely through third-party 
              processors. We do not store your payment card details.</li>
              <li><strong>Price Changes:</strong> We may change prices with 30 days' notice to existing subscribers.</li>
            </ul>

            <h2>8. Content Moderation and Enforcement</h2>
            <p>We reserve the right to:</p>
            <ul>
              <li>Monitor, review, and remove any content that violates these Terms</li>
              <li>Suspend or terminate accounts for violations</li>
              <li>Report illegal activities to law enforcement</li>
              <li>Investigate suspected violations</li>
              <li>Take any action we deem necessary to protect the Service and users</li>
            </ul>
            <p>
              <strong>We are not obligated to monitor content but reserve the right to do so.</strong>
            </p>

            <h2>9. Disclaimers</h2>
            <p>
              <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</strong>
            </p>
            <ul>
              <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
              <li>Warranties regarding accuracy, reliability, or availability of the Service</li>
              <li>Warranties that the Service will be uninterrupted, secure, or error-free</li>
              <li>Warranties regarding the conduct or identity of other users</li>
            </ul>
            <p>
              <strong>USER INTERACTIONS:</strong> We do not conduct background checks on users. You are 
              solely responsible for your interactions with other users. Exercise caution and common 
              sense when meeting people through the Service.
            </p>
            <p>
              <strong>DATING RESULTS:</strong> We do not guarantee that you will find a match, 
              relationship, or specific outcomes from using the Service.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, GSEHNI AND ITS OFFICERS, DIRECTORS, 
              EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:</strong>
            </p>
            <ul>
              <li>Indirect, incidental, consequential, special, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Personal injury or property damage resulting from your use of the Service</li>
              <li>Conduct of other users or third parties</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Any content posted by users</li>
            </ul>
            <p>
              <strong>OUR TOTAL LIABILITY FOR ALL CLAIMS SHALL NOT EXCEED THE AMOUNT YOU PAID TO US 
              IN THE 12 MONTHS PRECEDING THE CLAIM, OR CHF 100, WHICHEVER IS GREATER.</strong>
            </p>
            <p>
              Some jurisdictions do not allow limitations on implied warranties or liability for 
              incidental or consequential damages. In such jurisdictions, our liability is limited 
              to the maximum extent permitted by law.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless gsehni and its affiliates, officers, 
              directors, employees, and agents from any claims, liabilities, damages, losses, costs, 
              or expenses (including reasonable attorneys' fees) arising from:
            </p>
            <ul>
              <li>Your violation of these Terms</li>
              <li>Your use or misuse of the Service</li>
              <li>Your content or conduct on the Service</li>
              <li>Your violation of any third-party rights</li>
              <li>Your violation of any applicable laws</li>
            </ul>

            <h2>12. Termination</h2>
            
            <h3>12.1 By You</h3>
            <p>
              You may terminate your account at any time through the in-app settings or by contacting 
              us at privacy@gsehni.com.
            </p>

            <h3>12.2 By Us</h3>
            <p>We may suspend or terminate your access to the Service:</p>
            <ul>
              <li>For violation of these Terms</li>
              <li>For fraudulent or illegal activities</li>
              <li>For extended periods of inactivity</li>
              <li>At our discretion with or without notice</li>
              <li>If required by law or regulatory authority</li>
            </ul>

            <h3>12.3 Effect of Termination</h3>
            <p>Upon termination:</p>
            <ul>
              <li>Your right to use the Service immediately ceases</li>
              <li>We may delete your account and content</li>
              <li>Provisions regarding intellectual property, disclaimers, limitation of liability, 
              and indemnification survive termination</li>
              <li>No refunds will be provided for unused subscription periods (except as required by law)</li>
            </ul>

            <h2>13. Dispute Resolution</h2>
            
            <h3>13.1 Governing Law</h3>
            <p>
              These Terms are governed by the laws of Switzerland, without regard to conflict of 
              law principles.
            </p>

            <h3>13.2 Arbitration (If Applicable)</h3>
            <p>
              Any disputes arising from these Terms or the Service shall be resolved through binding 
              arbitration in accordance with Swiss arbitration rules, unless you opt out within 30 days 
              of registration.
            </p>

            <h3>13.3 Jurisdiction</h3>
            <p>
              If arbitration does not apply, you agree to submit to the exclusive jurisdiction of 
              the courts in Switzerland.
            </p>

            <h2>14. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material 
              changes via email or in-app notification at least 30 days before the effective date. 
              Continued use of the Service after changes take effect constitutes acceptance of the 
              modified Terms.
            </p>

            <h2>15. General Provisions</h2>
            
            <h3>15.1 Entire Agreement</h3>
            <p>
              These Terms and our Privacy Policy constitute the entire agreement between you and gsehni 
              regarding the Service.
            </p>

            <h3>15.2 Severability</h3>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining 
              provisions shall remain in full force and effect.
            </p>

            <h3>15.3 Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms shall not constitute a 
              waiver of such right or provision.
            </p>

            <h3>15.4 Assignment</h3>
            <p>
              You may not assign or transfer these Terms or your account. We may assign these Terms 
              without restriction.
            </p>

            <h3>15.5 Force Majeure</h3>
            <p>
              We shall not be liable for any failure or delay in performance due to circumstances 
              beyond our reasonable control.
            </p>

            <h3>15.6 Contact for Legal Matters</h3>
            <p>
              For legal questions or notices:<br/>
              Email: <strong>legal@gsehni.com</strong><br/>
              Address: gsehni.com, Switzerland
            </p>

            <h2>16. Special Provisions for Specific Jurisdictions</h2>
            
            <h3>16.1 European Union Users</h3>
            <p>
              If you are in the EU, you have the right to withdraw from the Service within 14 days 
              of registration without providing a reason. However, if you start using the Service 
              during this period, you acknowledge that you forfeit this right.
            </p>

            <h3>16.2 California Users</h3>
            <p>
              Under California Civil Code Section 1789.3, California users are entitled to the 
              following consumer rights notice: If you have a question or complaint, please contact 
              us at legal@gsehni.com. California residents may also reach the Complaint Assistance 
              Unit of the Division of Consumer Services of the California Department of Consumer Affairs.
            </p>

            <h2>17. Safety and Meeting Guidelines</h2>
            <p>
              <strong>IMPORTANT SAFETY RECOMMENDATIONS:</strong>
            </p>
            <ul>
              <li>Always meet in public places for first meetings</li>
              <li>Inform friends or family of your meeting plans</li>
              <li>Never share financial information or send money</li>
              <li>Trust your instincts – if something feels wrong, it probably is</li>
              <li>Report suspicious behavior immediately</li>
              <li>Do not share your home address or workplace until you're comfortable</li>
              <li>Arrange your own transportation for dates</li>
              <li>Be cautious about sharing personal information</li>
            </ul>
            <p>
              <strong>gsehni is not responsible for user conduct offline.</strong> Use the Service 
              at your own risk and exercise appropriate caution.
            </p>

            <h2>18. Contact Us</h2>
            <p>
              For questions about these Terms:<br/>
              General inquiries: <strong>support@gsehni.com</strong><br/>
              Legal matters: <strong>legal@gsehni.com</strong><br/>
              Privacy concerns: <strong>privacy@gsehni.com</strong>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
