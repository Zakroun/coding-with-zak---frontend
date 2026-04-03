import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLang } from '../../hooks/useLang'

export default function CTASection() {
  const { t, locale } = useLang()
  const isRtl = locale === 'ar'
  const waMsg = encodeURIComponent(t('whatsapp.message'))

  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="section-padding bg-black text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-px h-full bg-zinc-800" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-zinc-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04)_0%,_transparent_60%)]" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-px h-12 bg-zinc-700 mx-auto mb-8" />
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {t('cta.title')}
          </h2>
          <p className="font-body text-zinc-400 text-lg max-w-xl mx-auto mb-10">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-black font-sub font-medium text-sm px-8 py-4 hover:bg-zinc-100 transition-colors"
            >
              {t('cta.button')} <ArrowRight size={15} style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }} />
            </Link>
            
            <a
              href={`https://wa.me/212625702587?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 border border-zinc-700 text-white font-sub font-medium text-sm px-8 py-4 hover:border-white transition-colors ${isRtl ? 'flex-row-reverse' : ''}`}
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}