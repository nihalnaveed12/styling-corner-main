import "./App.css";
import AllInOne from "./components/all-in-one";
import Brouchst from "./components/brouchst";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import OnePlatform from "./components/one-platform";
import SuccessServicesSection from "./components/Success_Service";
import SupportSection from "./components/SupportSection";

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
    </div>
  );
}

export default App;
