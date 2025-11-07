import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import ClientLogos from '@/components/ClientLogos'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

// Cinematic video editing effects
import CinematicParticles from '@/components/CinematicParticles'
import FilmGrain from '@/components/FilmGrain'
import GlitchTransition from '@/components/GlitchTransition'
import LightLeaks from '@/components/LightLeaks'
import AudioVisualizer from '@/components/AudioVisualizer'
import CinematicOverlay from '@/components/CinematicOverlay'
import MotionTrails from '@/components/MotionTrails'
import VideoZoomTransition from '@/components/VideoZoomTransition'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Cinematic Effects Layer */}
      <CinematicParticles />
      <FilmGrain />
      <GlitchTransition />
      <LightLeaks />
      <AudioVisualizer />
      <CinematicOverlay />
      <MotionTrails />
      <VideoZoomTransition />

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <ClientLogos />
        <Features />
        <Testimonials />
        <CTABanner />
        <Pricing />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>
    </main>
  )
}
