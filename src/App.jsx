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

function App() {
  return (
    <div className="bg-white h-full  text-black">
      <Navbar />
      <Hero />
      <OnePlatform />
      <Brouchst />
      <AllInOne />
      <SuccessServicesSection />
      <SupportSection />
      <FAQSection />
      <PlatformGallerySection />
      <CTASection />
      <AppDownloadSection />
    </div>
  );
}

export default App;
