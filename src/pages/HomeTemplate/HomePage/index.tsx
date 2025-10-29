import { useRef } from "react";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import CounterNumber from "./CounterNumber";
import MainVisual from "./MainVisual";
import PopularDestinationsList from "./PopularDestinationsList";
import PopularLuxuryHotelsContainer from "./PopularLuxuryHotelsContainer";
import SignupCTA from "./SignupCTA";
import WhyChooseLuxeStay from "./WhyChooseLuxeStay";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MainVisual />
      <CounterNumber />
      <PopularDestinationsList />
      <PopularLuxuryHotelsContainer />
      <WhyChooseLuxeStay />
      <SignupCTA />
      <Footer />
    </div>
  );
}
