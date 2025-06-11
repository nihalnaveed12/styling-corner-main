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

function App() {
  return (
    <div className="bg-white h-full  text-black">
      <Navbar />
      <Hero />
      <OnePlatform />
      <Brouchst />
      <AllInOne />
      <LeadPlat />
      <SuccessServicesSection />
      <SupportSection />
      <FAQSection />
    </div>
  );
}

export default App;
