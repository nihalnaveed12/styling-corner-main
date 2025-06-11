import "./App.css";
import AllInOne from "./components/all-in-one";
import Brouchst from "./components/brouchst";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import OnePlatform from "./components/one-platform";
import SuccessServicesSection from "./components/Success_Service";
import SupportSection from "./components/SupportSection";
import FAQSection from "./components/FAQ_section";
import PlatformGallerySection from "./components/PlatForm_Gallery_Section";
import CTASection from "./components/CTA";
import AppDownloadSection from "./components/App_Download_Section";
import Footer from "./components/Footer";

import LeadPlat from "./components/lead-plat";
import TrustPlat from "./components/trust-plat";
import StatsSlider from "./components/stats-slide";


function App() {
  return (
    <div className="bg-white h-full  text-black">
      <Navbar />
      <Hero />
      <OnePlatform />
      <Brouchst />
      <AllInOne />
      <LeadPlat />
      <TrustPlat />
      <StatsSlider />
      <SuccessServicesSection />
      <SupportSection />
      <FAQSection />
      <PlatformGallerySection />
      <CTASection />
      <AppDownloadSection />
      <Footer />
    </div>
  );
}

export default App;
