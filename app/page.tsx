import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import BrandEssence from '@/components/sections/BrandEssence'
import BrandStory from '@/components/sections/BrandStory'
import MissionStatement from '@/components/sections/MissionStatement'
import VisionStatement from '@/components/sections/VisionStatement'
import ExpertsSection from '@/components/sections/ExpertsSection'
import DashboardFeatures from '@/components/sections/DashboardFeatures'
import BrandShowcase from '@/components/sections/BrandShowcase'
import CalendarJournaling from '@/components/sections/CalendarJournaling'
import BenefitsSection from '@/components/sections/BenefitsSection'
import Testimonials from '@/components/sections/Testimonials'
import StrategyCall from '@/components/sections/StrategyCall'
import FAQs from '@/components/sections/FAQs'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BrandEssence />
      <BrandStory />
      <MissionStatement />
      <VisionStatement />
      <ExpertsSection />
      <DashboardFeatures />
      <BrandShowcase />
      <CalendarJournaling />
      <BenefitsSection />
      <Testimonials />
      <StrategyCall />
      <FAQs />
      <Footer />
    </main>
  )
}
