import { EtherealShape } from './components/EtherealShape';
import { AnimatedSection } from './components/AnimatedSection'; // Import it

export default function Home() {
  return (
    // Note: Removed justify-center from main to allow scrolling
    <main className="relative flex min-h-screen flex-col items-center bg-gray-900 text-white p-8 overflow-x-hidden">
      <EtherealShape />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 h-screen">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          Design Meets Intuition
        </h1>
        <p className="max-w-xl text-lg text-gray-400">
          A digital experience crafted with precision, designed to captivate and inspire.
        </p>
        <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
          Discover More
        </button>
      </div>

      {/* Features Section */}
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-4">Core Principles</h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          We combine aesthetics with performance to deliver an unforgettable user journey.
        </p>
        {/* You could add feature cards here */}
      </AnimatedSection>
    </main>
  );
}