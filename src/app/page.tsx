import { EtherealShape } from './components/EtherealShape';
import { AnimatedSection } from './components/AnimatedSection';
import { FeatureCard } from './components/FeatureCard';
import { ContactForm } from './components/ContactForm';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-gray-900 text-white p-8 overflow-x-hidden pointer-events-none">
      <EtherealShape/>

      {/* Hero Section */}
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 h-screen pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          Design Meets Intuition
        </h1>
        <p className="max-w-xl text-lg text-gray-400">
          A digital experience crafted with precision, designed to captivate and inspire.
        </p>
        
        <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-300 transition-colors pointer-events-auto">
          Discover More
        </button>
      </div>

      {/* Features Section */}
      <AnimatedSection>
        
        <div className="pointer-events-auto">
            <h2 className="text-4xl font-bold mb-4">Core Principles</h2>
            <p className="max-w-2xl mx-auto text-gray-400 mb-12">
              We combine aesthetics with performance to deliver an unforgettable user journey.
            </p>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pointer-events-none">
          <FeatureCard
            title="Interactive Design"
            description="Engaging users with meaningful micro-interactions and a dynamic interface that responds to them."
          />
          <FeatureCard
            title="Optimized Performance"
            description="Ensuring lightning-fast load times and a smooth experience, no matter the device or connection."
          />
          <FeatureCard
            title="Intuitive UX"
            description="Crafting a seamless user journey that feels natural and effortless from the very first click."
          />
        </div>
      </AnimatedSection>
       <AnimatedSection>
        {/* Make the container interactive */}
        <div className="pointer-events-auto">
          <ContactForm />
        </div>
      </AnimatedSection>
    </main>
  );
}