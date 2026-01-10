import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProgramHero from '@/components/program/ProgramHero'
import ProgramFor from '@/components/program/ProgramFor'
import ProgramStructure from '@/components/program/ProgramStructure'
import ProgramBenefits from '@/components/program/ProgramBenefits'
import StrategyCall from '@/components/sections/StrategyCall'
import FAQs from '@/components/sections/FAQs'

export const metadata = {
  title: 'Learn Trading in 14 Days - Quantum Mastery',
  description: 'An accelerated 14-day intensive program designed for experienced traders, business owners, and investors who value clarity, structure, and disciplined thinking.',
}

export default function ProgramPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <ProgramHero />
      <ProgramFor />
      <ProgramStructure />
      <ProgramBenefits />
      <StrategyCall />
      <FAQs />
      <Footer />
    </main>
  )
}
