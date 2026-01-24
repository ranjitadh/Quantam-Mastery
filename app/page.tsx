import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import CalendarJournaling from '@/components/sections/CalendarJournaling'
import DashboardFeatures from '@/components/sections/DashboardFeatures'
import TimelineSection from '@/components/sections/TimelineSection'
import ExpertsSection from '@/components/sections/ExpertsSection'
import PricingSection from '@/components/sections/PricingSection'
import Testimonials from '@/components/sections/Testimonials'
import FAQs from '@/components/sections/FAQs'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary selection:bg-green-primary/30">
      <Header />

      <Hero />

      {/* Visual Journaling Preview */}
      <CalendarJournaling />

      {/* 6 Grid Features */}
      <DashboardFeatures />

      {/* 7 Days Timeline */}
      <TimelineSection />

      {/* Mentor/Founder */}
      <ExpertsSection />

      {/* Pricing Plans */}
      <PricingSection />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQs />

      <Footer />
    </main>
  )
}
