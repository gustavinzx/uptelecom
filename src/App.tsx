import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Plans from "./components/sections/Plans";
import Combo from "./components/sections/Combo";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Coverage from "./components/sections/Coverage";
import SelfService from "./components/sections/SelfService";
import FinalCTA from "./components/sections/FinalCTA";
import SocialMedia from "./components/sections/SocialMedia";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import { CleanBackground } from "./components/ui/CleanBackground";

function App() {
  return (
    <div className="min-h-screen bg-[#0b1220] flex flex-col font-sans relative">
      <CleanBackground />
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <Plans />
        <Combo />
        <Features />
        <Testimonials />
        <Coverage />
        <SelfService />
        <FinalCTA />
        <SocialMedia />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
