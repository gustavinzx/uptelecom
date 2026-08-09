import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BannerCarousel from "./components/sections/BannerCarousel";
import Plans from "./components/sections/Plans";
import Combo from "./components/sections/Combo";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Curiosities from "./components/sections/Curiosities";
import Blog from "./components/sections/Blog";
import Coverage from "./components/sections/Coverage";
import SelfService from "./components/sections/SelfService";
import FinalCTA from "./components/sections/FinalCTA";
import SocialMedia from "./components/sections/SocialMedia";

function App() {
  return (
    <div className="min-h-screen bg-[var(--surface-bg)] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <BannerCarousel />
        <Plans />
        <Combo />
        <Features />
        <Testimonials />
        <Curiosities />
        <Blog />
        <Coverage />
        <SelfService />
        <FinalCTA />
        <SocialMedia />
      </main>
      <Footer />
    </div>
  );
}

export default App;
