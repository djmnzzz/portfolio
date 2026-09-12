import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-200 selection:bg-wine-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}