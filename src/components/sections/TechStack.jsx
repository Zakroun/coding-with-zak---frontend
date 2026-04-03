import { motion } from 'framer-motion'
import { useLang } from '../../hooks/useLang'
import { technologies } from '../../data/data.jsx'
import Badge from '../ui/Badge'
import SectionReveal from '../ui/SectionReveal'

export default function TechStack() {
  const { t, locale } = useLang()
  const isRtl = locale === 'ar'

  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="section-padding bg-zinc-50 border-y border-light">
      <div className="container-custom">
        <SectionReveal className="text-center mb-14">
          <Badge>{t('tech.badge')}</Badge>
          <h2 className="section-title mt-4 mb-3">{t('tech.title')}</h2>
          <p className="font-body text-secondary max-w-lg mx-auto">
            {t('tech.subtitle')}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center gap-2 p-4 border border-light bg-white hover:border-black hover:shadow-lg transition-all duration-300 cursor-default group rounded-xl"
            >
              <div className="text-2xl flex items-center justify-center">
                {tech.icon}
              </div>
              <span className="font-sub text-xs font-medium text-secondary group-hover:text-black transition-colors text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}