import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import OnePlatform from "./components/one-platform";
import SuccessServicesSection from "./components/Success_Service";

function App() {
  return (
    <div className="bg-white h-full  text-black">
      <Navbar />
      <Hero />
      <OnePlatform />
      <SuccessServicesSection />
    </div>
  );
}

export default App;
