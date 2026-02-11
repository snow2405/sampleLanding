import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import SubBanner from '../sections/SubBanner';
import AGBSection from '../sections/AGBSection';
import Footer from '../sections/Footer';
import PhoneSignupForm from '../components/PhoneSignupForm';

export default function HomePage() {
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
