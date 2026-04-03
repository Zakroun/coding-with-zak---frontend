import { Helmet } from 'react-helmet-async'
import { useLang } from '../hooks/useLang'
import HeroSection from '../components/sections/HeroSection'
import ServicesPreview from '../components/sections/ServicesPreview'
import TechStack from '../components/sections/TechStack'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  const { locale } = useLang()

  return (
    <>
      <Helmet>
        <title>CodingWithZak — Agence Digitale Moderne</title>
        <meta name="description" content="CodingWithZak est une agence digitale spécialisée dans le développement web, mobile et e-commerce. Construisons votre projet ensemble." />
        <meta property="og:title" content="CodingWithZak — Agence Digitale Moderne" />
        <meta property="og:description" content="Solutions digitales modernes : sites web, apps mobiles, e-commerce, dashboards." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://codingwithzak.com/" />
        <html lang={locale} />
      </Helmet>

      <HeroSection />
      <ServicesPreview limit={6} />
      <TechStack />
      <CTASection />
    </>
  )
}
