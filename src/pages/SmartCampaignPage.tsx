import { useEffect } from 'react';
import SmartCampaignHeroSection from '../sections/SmartCampaignHeroSection';
import SmileVisionSection from '../sections/SmileVisionSection';
import SmileLaunchSection from '../sections/SmileLaunchSection';
import PhoneSignupForm from '../components/PhoneSignupForm';
import Footer from '../sections/Footer';
import { analytics } from '../utils/analytics';
import { useQRCodeTracking } from '../utils/useQRCodeTracking';
import { useLanguage } from '../i18n/LanguageContext';

export default function SmartCampaignPage() {
  const { t } = useLanguage();

  // Fire QR code tracking if user arrived via short link
  useQRCodeTracking();

  useEffect(() => {
    analytics.event('page_visit', {
      page_name: 'smart-campaign',
      page_path: '/smart',
    });
  }, []);

  return (
    <>
      <SmartCampaignHeroSection />
      <SmileVisionSection />
      <SmileLaunchSection />
      <PhoneSignupForm customTitle={t.smileCampaign.finalForm.formLabel} />
      <Footer />
    </>
  );
}
