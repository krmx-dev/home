import Image from "next/image";

export default function Home() {
  return (<div className="bg-gray-900 text-white overflow-hidden">
  <div className="fixed inset-0 z-0">
    <div className="floating-orb"></div>
    <div className="floating-orb"></div>
    <div className="floating-orb"></div>

    <div className="network-lines">
      <div className="network-line"></div>
      <div className="network-line"></div>
      <div className="network-line"></div>
    </div>
  </div>

  <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
    <div className="text-center max-w-4xl mx-auto">

      <h1 className="text-8xl md:text-9xl font-black text-gradient mb-6 fade-in">
        Krmx
      </h1>


      <p className="text-2xl md:text-3xl text-gray-300 font-light mb-4 fade-in-delay">
        Network Protocol for Realtime Multi-User Interactions
      </p>


      <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto fade-in-delay">
        Build collaborative applications with seamless real-time synchronization.
        Connect users instantly across any platform.
      </p>


      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-delay-2">
        <a href="https://simonkarman.github.io/krmx"
           className="button-hover glass-effect px-8 py-4 rounded-xl text-lg font-semibold text-white border border-purple-400 hover:border-purple-300 min-w-48">
          📚 Documentation
        </a>

        <a href="https://github.com/simonkarman/krmx"
           className="button-hover bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-xl text-lg font-semibold text-white glow-effect min-w-48">
          ⭐ GitHub
        </a>

        <a href="https://github.com/simonkarman/krmx-starter/"
           className="button-hover glass-effect px-8 py-4 rounded-xl text-lg font-semibold text-white border border-blue-400 hover:border-blue-300 min-w-48">
          🚀 Get Started
        </a>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto fade-in-delay-2">
        <div className="glass-effect p-6 rounded-xl text-center">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Real-time Sync</h3>
          <p className="text-gray-400">Instant synchronization across all connected clients</p>
        </div>

        <div className="glass-effect p-6 rounded-xl text-center">
          <div className="text-3xl mb-3">🔧</div>
          <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
          <p className="text-gray-400">Simple API designed for rapid development</p>
        </div>

        <div className="glass-effect p-6 rounded-xl text-center">
          <div className="text-3xl mb-3">🌐</div>
          <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
          <p className="text-gray-400">Works seamlessly across web, mobile, and desktop</p>
        </div>
      </div>
    </div>
  </div>
  </div>);
}
