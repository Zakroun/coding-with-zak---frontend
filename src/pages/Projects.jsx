import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../hooks/useLang'
import { projects } from '../data/data.jsx'
import ProjectCard from '../components/ui/ProjectCard'
import Badge from '../components/ui/Badge'
import SectionReveal from '../components/ui/SectionReveal'
import CTASection from '../components/sections/CTASection'

const filterKeys = ['all', 'web', 'mobile', 'ecommerce', 'dashboard']

export default function Projects() {
  const { t, locale } = useLang()
  const isRtl = locale === 'ar'
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <Helmet>
        <title>Projets — CodingWithZak</title>
        <meta name="description" content="Découvrez nos réalisations : applications web, mobiles, e-commerce et dashboards construits pour nos clients." />
        <meta property="og:title" content="Projets — CodingWithZak" />
        <link rel="canonical" href="https://codingwithzak.com/projects" />
      </Helmet>

      <section dir={isRtl ? 'rtl' : 'ltr'} className="pt-36 pb-16 bg-zinc-50 border-b border-light">
        <div className="container-custom">
          <SectionReveal>
            <Badge>{t('projects.badge')}</Badge>
            <h1 className="section-title mt-4 mb-4">{t('projects.title')}</h1>
            <p className="font-body text-secondary max-w-xl leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </SectionReveal>
        </div>
      </section>

      <section dir={isRtl ? 'rtl' : 'ltr'} className="py-8 border-b border-light bg-white sticky top-16 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2">
            {filterKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`font-sub text-sm px-5 py-2 border transition-all duration-200 ${
                  activeFilter === key
                    ? 'bg-black text-white border-black'
                    : 'border-light text-secondary hover:border-black hover:text-black'
                }`}
              >
                {t(`projects.filters.${key}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section dir={isRtl ? 'rtl' : 'ltr'} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-secondary font-body">
              Aucun projet dans cette catégorie.
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}