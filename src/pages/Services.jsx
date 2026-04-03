import { Helmet } from 'react-helmet-async'
import {
  Globe, Server, Smartphone, ShoppingCart,
  LayoutDashboard, Code2, Palette, Zap, Sparkles
} from 'lucide-react'
import { useLang } from '../hooks/useLang'
import ServiceCard from '../components/ui/ServiceCard'
import Badge from '../components/ui/Badge'
import SectionReveal from '../components/ui/SectionReveal'
import CTASection from '../components/sections/CTASection'

const serviceIcons = [Globe, Server, Smartphone, ShoppingCart, LayoutDashboard, Code2, Palette, Zap, Sparkles]
const serviceKeys = ['web', 'webapp', 'mobile', 'ecommerce', 'dashboard', 'api', 'design', 'perf', 'anim']

export default function Services() {
  const { t, locale } = useLang()
  const isRtl = locale === 'ar'

  const services = serviceKeys.map((key, i) => ({
    icon: serviceIcons[i],
    title: t(`services.items.${key}.title`),
    desc: t(`services.items.${key}.desc`),
  }))

  return (
    <>
      <Helmet>
        <title>Services — CodingWithZak</title>
        <meta name="description" content="Découvrez tous nos services : développement web, mobile, e-commerce, dashboards, UI/UX design et optimisation de performances." />
        <meta property="og:title" content="Services — CodingWithZak" />
        <link rel="canonical" href="https://codingwithzak.com/services" />
      </Helmet>

      <section dir={isRtl ? 'rtl' : 'ltr'} className="pt-36 pb-16 bg-zinc-50 border-b border-light">
        <div className="container-custom">
          <SectionReveal>
            <Badge>{t('services.badge')}</Badge>
            <h1 className="section-title mt-4 mb-4">{t('services.title')}</h1>
            <p className="font-body text-secondary max-w-xl leading-relaxed">
              {t('services.subtitle')}
            </p>
          </SectionReveal>
        </div>
      </section>

      <section dir={isRtl ? 'rtl' : 'ltr'} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-light">
            {services.map((s, i) => (
              <div key={i} className="bg-white">
                <ServiceCard icon={s.icon} title={s.title} desc={s.desc} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section dir={isRtl ? 'rtl' : 'ltr'} className="section-padding bg-zinc-50 border-y border-light">
        <div className="container-custom">
          <SectionReveal className="text-center mb-14">
            <Badge>Notre Processus</Badge>
            <h2 className="section-title mt-4">Comment nous travaillons</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Discovery', 'Design', 'Development', 'Delivery'].map((step, i) => (
              <SectionReveal key={step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center mx-auto mb-4 font-heading font-black text-lg">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-heading font-bold text-base mb-2">{step}</h3>
                  <div className="w-8 h-px bg-light mx-auto" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}