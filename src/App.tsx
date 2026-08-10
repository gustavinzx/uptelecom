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
import { Reveal } from "./components/ui/Reveal";

function App() {
  return (
    <div className="min-h-screen bg-[var(--surface-bg)] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <Reveal><Plans /></Reveal>
        <Reveal delay={200}><Combo /></Reveal>
        <Reveal direction="left"><Features /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal direction="right"><Coverage /></Reveal>
        <Reveal><SelfService /></Reveal>
        <Reveal direction="down"><FinalCTA /></Reveal>
        <Reveal><SocialMedia /></Reveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
