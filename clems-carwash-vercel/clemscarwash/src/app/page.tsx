import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Galerie from '@/components/Galerie'
import AvantApres from '@/components/AvantApres'
import Prestations from '@/components/Prestations'
import { Pourquoi, Avis } from '@/components/Sections'
import { Contact, Footer, MobileBar } from '@/components/Contact'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Galerie />
        <AvantApres />
        <Prestations />
        <Pourquoi />
        <Avis />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <ScrollReveal />
    </>
  )
}
