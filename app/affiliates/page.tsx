import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AffiliateHero from '@/components/affiliates/AffiliateHero'
import HowItWorks from '@/components/affiliates/HowItWorks'
import WhyPartner from '@/components/affiliates/WhyPartner'
import SecurePayouts from '@/components/affiliates/SecurePayouts'
import AffiliateCTA from '@/components/affiliates/AffiliateCTA'
import FAQs from '@/components/sections/FAQs'

export const metadata = {
  title: 'Affiliate Program - Quantum Mastery',
  description: 'Join the Quantum Mastery affiliate program to earn 30% commission and unlock exclusive rewards. Share QTM with traders worldwide and receive reliable monthly payouts.',
}

export default function AffiliatesPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <AffiliateHero />
      <HowItWorks />
      <WhyPartner />
      <SecurePayouts />
      <AffiliateCTA />
      <FAQs />
      <Footer />
    </main>
  )
}
