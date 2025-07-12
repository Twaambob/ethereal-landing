import { EtherealShape } from '../src/components/EtherealShape.tsx'; // Import it at the top

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-8 overflow-hidden">
      {/* Add the 3D shape */}
      <EtherealShape />

      {/* The rest of your content, but now with a higher z-index to appear on top */}
      <div className="relative z-10 text-center space-y-6">
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
    </main>
  );
}