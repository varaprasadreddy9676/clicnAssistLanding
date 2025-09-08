import Header from '../components/Header';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import InteractiveDemo from '../components/InteractiveDemo';
import Features from '../components/Features';
import Impact from '../components/Impact';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <InteractiveDemo />
        <Features />
        <Impact />
        <Roadmap />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
