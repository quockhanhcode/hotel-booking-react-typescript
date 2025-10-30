import CounterNumber from "./CounterNumber";
import MainVisual from "./MainVisual";
import PopularDestinationsList from "./PopularDestinationsList";
import PopularLuxuryHotelsContainer from "./PopularLuxuryHotelsContainer";
import SignupCTA from "./SignupCTA";
import TrendingDestinations from "./TrendingDestinations";
import WhyChooseLuxeStay from "./WhyChooseLuxeStay";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <MainVisual />
      <CounterNumber />
      <PopularDestinationsList />
      <PopularLuxuryHotelsContainer />
      <TrendingDestinations/>
      <WhyChooseLuxeStay />
      <SignupCTA />
    </div>
  );
}
