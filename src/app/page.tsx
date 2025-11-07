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

export default function Home() {
  return (
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
  )
}
