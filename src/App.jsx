import { useEffect } from 'react';
import Navbar from './navbar/Navbar';
import Header from './body/Article';
import FeedbackSection from './body/FeedbackSection';
import './App.css';
import SectionBonus from './body/SectionBonus';
import LocationSection from './body/LocationSection';
import Footer from './body/Footer';
import { fbTrack } from './facebookPixel';

function App() {
  useEffect(() => {
    fbTrack('PageView'); // dispara quando o app carrega
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <FeedbackSection />
      <SectionBonus />
      <LocationSection />
      <Footer />
    </>
  );
}

export default App;
