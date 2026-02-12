import { useEffect } from 'react';
import CampaignHeroSection from '../sections/CampaignHeroSection';
import CampaignFeaturesSection from '../sections/CampaignFeaturesSection';
import SubBanner from '../sections/SubBanner';
import Footer from '../sections/Footer';
import PhoneSignupForm from '../components/PhoneSignupForm';
import { analytics } from '../utils/analytics';
import { useLanguage } from '../i18n/LanguageContext';

export default function CampaignPage() {
  const { language } = useLanguage();
  
  useEffect(() => {
    analytics.event('page_visit', {
      page_name: 'anti-ghosting-campaign',
      page_path: '/anti-ghosting-campaign',
    });
  }, []);

  const campaignFormTitle = language === 'de' 
    ? 'Wötsch Teil vo de Veränderig si?'
    : 'Want to be part of the change?';

  return (
    <>
      <CampaignHeroSection />
      <SubBanner isCampaign={true} />   
      <CampaignFeaturesSection />
      <PhoneSignupForm customTitle={campaignFormTitle} />
      <Footer /> 
    </>
  );
}
