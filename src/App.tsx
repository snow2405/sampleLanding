import './styles/App.css';
import { LanguageProvider } from './i18n/LanguageContext';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import SubBanner from './sections/SubBanner';
import Footer from './sections/Footer';

function App() {
  return (
    <LanguageProvider>
      <HeroSection />
      <SubBanner />   
      <FeaturesSection />
      <Footer /> 
    </LanguageProvider>
  );
}

export default App;
