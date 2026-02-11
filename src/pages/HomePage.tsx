import { useEffect } from 'react';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import SubBanner from '../sections/SubBanner';
import Footer from '../sections/Footer';
import PhoneSignupForm from '../components/PhoneSignupForm';
import { analytics } from '../utils/analytics';

export default function HomePage() {
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
