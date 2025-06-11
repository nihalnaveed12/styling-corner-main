import "./App.css";
import AllInOne from "./components/all-in-one";
import Brouchst from "./components/brouchst";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import OnePlatform from "./components/one-platform";
import SuccessServicesSection from "./components/Success_Service";
import SupportSection from "./components/SupportSection";
import FAQSection from "./components/FAQ_section";
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
    </div>
  );
}

export default App;
