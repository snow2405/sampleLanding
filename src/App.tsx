import './styles/App.css';
import { LanguageProvider } from './i18n/LanguageContext';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import SubBanner from './sections/SubBanner';
import AGBSection from './sections/AGBSection';
import Footer from './sections/Footer';

function App() {
  return (
    <LanguageProvider>
      <HeroSection />
      <SubBanner />   
      <FeaturesSection />
      <AGBSection />
      <Footer /> 
    </LanguageProvider>
  );
}

export default App;
