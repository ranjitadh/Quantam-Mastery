import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CommunityHero from '@/components/community/CommunityHero'
import CommunityDifferent from '@/components/community/CommunityDifferent'
import GrowthSection from '@/components/community/GrowthSection'
import EcosystemSection from '@/components/community/EcosystemSection'
import CommunityTestimonials from '@/components/community/CommunityTestimonials'
import CommunityCTA from '@/components/community/CommunityCTA'
import ChatSection from '@/components/plans/ChatSection'
import FAQs from '@/components/sections/FAQs'

export const metadata = {
  title: 'Trading Community - Quantum Mastery',
  description: 'Join 500+ trading legends in an exclusive private community. Connect with experienced professionals, engage in real-time market discussions, and be part of a focused trading ecosystem.',
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <CommunityHero />
      <CommunityDifferent />
      <GrowthSection />
      <EcosystemSection />
      <CommunityTestimonials />
      <CommunityCTA />
      <ChatSection />
      <FAQs />
      <Footer />
    </main>
  )
}
