import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import TokenSale from '@/components/TokenSale'
import Features from '@/components/Features'
import FeatureCards from '@/components/FeatureCards'
import Roadmap from '@/components/Roadmap'
import Team from '@/components/Team'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import FadeInSection from '@/components/FadeInSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="token">
        <FadeInSection delay={0.1}><TrustBar /></FadeInSection>
        <FadeInSection delay={0}><TokenSale /></FadeInSection>
      </section>
      <section id="features">
        <FadeInSection delay={0}><Features /></FadeInSection>
        <FadeInSection delay={0}><FeatureCards /></FadeInSection>
      </section>
      <section id="roadmap">
        <FadeInSection delay={0.1}><Roadmap /></FadeInSection>
      </section>
      <section id="our-team">
        <FadeInSection delay={0}><Team /></FadeInSection>
      </section>
      <section id="blog">
        <FadeInSection delay={0.1}><Blog /></FadeInSection>
      </section>
      <section id="contact">
        <FadeInSection delay={0}><Footer /></FadeInSection>
      </section>
    </main>
  )
}