import './styles/App.css';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import SubBanner from './sections/SubBanner';
import AGBSection from './sections/AGBSection';
import Footer from './sections/Footer';

function App() {

  return (
    <>
      <HeroSection  />
      <SubBanner />   
      <FeaturesSection />
      <AGBSection />
      <Footer /> 
    </>
  );
}

export default App;
