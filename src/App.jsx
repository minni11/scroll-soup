import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Statement from "./components/Statement";
import Creators from "./components/Creators";
import Hospitality from "./components/Hospitality";
import Collaborations from "./components/Collaborations";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Statement />
        <Creators />
        <Hospitality />
        <Collaborations />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
