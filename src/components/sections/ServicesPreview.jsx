import { Link } from 'react-router-dom'
import {
  Globe, Smartphone, ShoppingCart, LayoutDashboard,
  Server, Palette, Zap, Sparkles, ArrowRight
} from 'lucide-react'
import { useLang } from '../../hooks/useLang'
import ServiceCard from '../ui/ServiceCard'
import Badge from '../ui/Badge'
import SectionReveal from '../ui/SectionReveal'

const serviceIcons = [Globe, Server, Smartphone, ShoppingCart, LayoutDashboard, Server, Palette, Zap, Sparkles]
const serviceKeys = ['web', 'webapp', 'mobile', 'ecommerce', 'dashboard', 'api', 'design', 'perf', 'anim']

export default function ServicesPreview({ limit = 6 }) {
  const { t, locale } = useLang()
  const isRtl = locale === 'ar'

  const services = serviceKeys.slice(0, limit).map((key, i) => ({
    icon: serviceIcons[i],
    title: t(`services.items.${key}.title`),
    desc: t(`services.items.${key}.desc`),
  }))

  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="section-padding bg-white">
      <div className="container-custom">
        <SectionReveal>
          <Badge>{t('services.badge')}</Badge>
          <div className="mt-4 mb-4">
            <h2 className="section-title">{t('services.title')}</h2>
          </div>
          <p className="font-body text-secondary max-w-xl leading-relaxed mb-12">
            {t('services.subtitle')}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-light">
          {services.map((s, i) => (
            <div key={i} className="bg-white">
              <ServiceCard icon={s.icon} title={s.title} desc={s.desc} index={i} />
            </div>
          ))}
        </div>

        <SectionReveal className="mt-10 flex justify-center">
          <Link to="/services" className="btn-outline inline-flex items-center gap-2">
            {t('services.viewAll')} <ArrowRight size={15} style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }} />
          </Link>
        </SectionReveal>
      </div>
    </section>
  )
}