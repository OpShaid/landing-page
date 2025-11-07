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
import LoadingScreen from '@/components/LoadingScreen'
import PageTransition from '@/components/PageTransition'
import { TransitionProvider } from '@/components/TransitionOverlay'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <TransitionProvider>
        <PageTransition>
          <main className="min-h-screen">
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
          </main>
        </PageTransition>
      </TransitionProvider>
    </>
  )
}
