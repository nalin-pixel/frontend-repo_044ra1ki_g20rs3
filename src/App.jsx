import { useState } from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const [clicked, setClicked] = useState(false)

  const handlePrimary = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="relative z-20 w-full">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-red-700/40" />
            <span className="text-lg font-semibold tracking-tight">RedSphere</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a className="hover:text-white transition-colors" href="#features">Features</a>
            <a className="hover:text-white transition-colors" href="#use-cases">Use cases</a>
            <a className="hover:text-white transition-colors" href="/test">System Test</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm rounded-md border border-white/10 hover:border-white/20 transition-colors">Sign in</button>
            <button onClick={handlePrimary} className="px-4 py-2 text-sm rounded-md bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 transition-colors shadow-lg shadow-red-700/30">
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Spline 3D globe */}
      <section className="relative h-[78vh] w-full overflow-hidden">
        {/* 3D Scene */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Red glow background accent (does not intercept pointer) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-600/20 via-transparent to-black/80"></div>
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full bg-red-600/10 blur-[120px]" />

        {/* Foreground content */}
        <div className="relative z-10 h-full">
          <div className="mx-auto flex h-full max-w-7xl items-center px-6">
            <div className="pointer-events-none max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-red-500"></span>
                Interactive 3D • Education • Climate • Technology
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                Explore our red globe — an interactive window into a smarter, sustainable future
              </h1>
              <p className="mt-4 text-white/80 text-base sm:text-lg">
                Click and drag the globe to spin it. Learn, teach, and present with an immersive, futuristic experience designed for corporate learning and environmental storytelling.
              </p>
              <div className="pointer-events-auto mt-6 flex flex-wrap items-center gap-3">
                <button onClick={handlePrimary} className="rounded-md bg-gradient-to-r from-red-500 to-rose-600 px-5 py-2.5 text-sm font-medium hover:from-red-400 hover:to-rose-500 transition-colors shadow-lg shadow-red-700/30">
                  Launch demo
                </button>
                <a href="#features" className="rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white/90 hover:border-white/30 transition-colors">
                  Learn more
                </a>
              </div>
              {clicked && (
                <div className="mt-3 text-sm text-white/70">Starting interactive session…</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Simple content below hero */}
      <section id="features" className="relative z-10 border-t border-white/10 bg-gradient-to-b from-black to-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
          {[
            {
              title: 'Interactive learning',
              text: 'Spin, explore, and annotate regions to turn complex topics into intuitive stories.'
            },
            {
              title: 'Corporate-ready',
              text: 'A polished experience that elevates presentations and training sessions.'
            },
            {
              title: 'Futuristic design',
              text: 'A red, tech-forward aesthetic that feels modern and engaging.'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/75">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-black/90">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} RedSphere. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="/test" className="hover:text-white">System Test</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
