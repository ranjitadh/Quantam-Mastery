import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FreePlanSection from '@/components/plans/FreePlanSection'
import ProPlansSection from '@/components/plans/ProPlansSection'
import OnboardingSection from '@/components/plans/OnboardingSection'
import ChatSection from '@/components/plans/ChatSection'
import FAQs from '@/components/sections/FAQs'

export const metadata = {
  title: 'Pricing Plans - Quantum Mastery',
  description: 'Choose the perfect plan for your trading journey. Free plan with unlimited journaling, Pro Trader, Elite Trader, or Mastery Circle mentorship.',
}

export default function PlansPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <FreePlanSection />
      <ProPlansSection />
      <OnboardingSection />
      <ChatSection />
      <FAQs />
      <Footer />
    </main>
  )
}
