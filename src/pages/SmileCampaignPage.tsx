import { useEffect } from 'react';
import SmileCampaignHeroSection from '../sections/SmileCampaignHeroSection';
import SmileVisionSection from '../sections/SmileVisionSection';
import SmileLaunchSection from '../sections/SmileLaunchSection';
import PhoneSignupForm from '../components/PhoneSignupForm';
import Footer from '../sections/Footer';
import { analytics } from '../utils/analytics';
import { useLanguage, type Language } from '../i18n/LanguageContext';

interface SmileCampaignPageProps {
  lang?: Language;
}

export default function SmileCampaignPage({ lang }: SmileCampaignPageProps) {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    if (lang) {
      setLanguage(lang);
    }
    analytics.event('page_visit', {
      page_name: 'smile-campaign',
      page_path: `/smile-campaign${lang ? `/${lang}` : ''}`,
    });
  }, [lang, setLanguage]);

  const { t } = useLanguage();

  return (
    <>
      <SmileCampaignHeroSection />
      <SmileVisionSection />
      <SmileLaunchSection />
      <PhoneSignupForm customTitle={t.smileCampaign.finalForm.formLabel} />
      <Footer /> 
    </>
  );
}
