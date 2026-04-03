import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { useLang } from '../../hooks/useLang'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function HeroSection() {
  const { t, locale } = useLang()
  const isRtl = locale === 'ar'

  const stats = useMemo(
    () => [
      { value: '50+', label: t('hero.stat1') },
      { value: '30+', label: t('hero.stat2') },
      { value: '3+', label: t('hero.stat3') },
    ],
    [t]
  )

  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">

        <div className="w-full lg:w-1/2 flex items-center">
          <div className="container-custom w-full relative z-10 py-16">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={item}>
                <span className="badge mb-6 block w-fit">
                  <span className={`w-1 h-1 bg-secondary rounded-full inline-block ${isRtl ? 'ml-2' : 'mr-2'}`} />
                  {t('hero.badge')}
                </span>
              </motion.div>

              <motion.h1 variants={item} className="section-title mb-6 leading-[1.1]">
                {t('hero.title')}{' '}
                <span className="relative">
                  <span>{t('hero.titleHighlight')}</span>
                </span>
                <br />
                {t('hero.titleEnd')}
              </motion.h1>

              <motion.p variants={item} className="font-body text-secondary text-base md:text-lg max-w-lg mb-10">
                {t('hero.subtitle')}
              </motion.p>

              <motion.div variants={item} className={`flex gap-4 mb-16 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <Link to="/contact" className="btn-primary flex items-center gap-2">
                  {t('hero.cta')} <ArrowRight size={15} style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }} />
                </Link>
                <Link to="/projects" className="btn-outline">
                  {t('hero.ctaSecondary')}
                </Link>
              </motion.div>

              <motion.div variants={item} className="flex gap-10 border-t border-light pt-8">
                {stats.map((s, i) => (
                  <div key={i}>
                    <div className="font-heading font-black text-2xl text-black">
                      {s.value}
                    </div>
                    <div className="font-body text-xs text-secondary mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hidden lg:block w-1/2 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&auto=format&fit=crop&q=80"
            alt="workspace"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className={`absolute bottom-6 ${isRtl ? 'left-6' : 'right-6'} bg-black text-white px-4 py-2 text-xs rounded-md z-10`}
          >
            React • Node.js • AWS
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}