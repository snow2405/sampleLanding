import { useEffect } from 'react';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import SubBanner from '../sections/SubBanner';
import Footer from '../sections/Footer';
import PhoneSignupForm from '../components/PhoneSignupForm';
import { analytics } from '../utils/analytics';
import { useQRCodeTracking } from '../utils/useQRCodeTracking';

export default function HomePage() {
  // Fire QR code tracking if user arrived via short link
  useQRCodeTracking();
  
  useEffect(() => {
    analytics.event('page_visit', {
      page_name: 'home',
      page_path: '/',
    });
  }, []);

  return (
    <>
      <HeroSection />
      <SubBanner />   
      <FeaturesSection />
      <PhoneSignupForm />
      <Footer /> 
    </>
  );
}
