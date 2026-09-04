import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Services from './components/Services';
import CareerCTA from './components/CareerCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="site">
      <div className="site-background" aria-hidden="true">
        <div className="site-grid" />
      </div>

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Services />
        <CareerCTA />
      </main>

      <Footer />
    </div>
  );
}
