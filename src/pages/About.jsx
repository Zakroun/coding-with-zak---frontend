import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Star, Zap, Shield, ArrowRight, Mail, Phone, Linkedin } from 'lucide-react'
import { useLang } from '../hooks/useLang'
import Badge from '../components/ui/Badge'
import SectionReveal from '../components/ui/SectionReveal'
import CTASection from '../components/sections/CTASection'
import { teamMembers } from '../data/data.jsx'

const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=80'

const values = [
  { icon: Star, key: 'quality' },
  { icon: Zap, key: 'speed' },
  { icon: Shield, key: 'support' },
]

export default function About() {
  const { t, locale } = useLang()
  const isRtl = locale === 'ar'

  return (
    <>
      <Helmet>
        <title>À propos — CodingWithZak</title>
        <meta name="description" content="CodingWithZak est une agence digitale marocaine spécialisée dans le développement de solutions web et mobiles modernes, orientées résultats." />
        <meta property="og:title" content="À propos — CodingWithZak" />
        <link rel="canonical" href="https://codingwithzak.com/about" />
      </Helmet>

      <section dir={isRtl ? 'rtl' : 'ltr'} className="pt-36 pb-16 bg-zinc-50 border-b border-light">
        <div className="container-custom">
          <SectionReveal>
            <Badge>{t('about.badge')}</Badge>
            <h1 className="section-title mt-4 mb-4">
              {t('about.title')}{' '}
              <span className="relative inline-block">
                {t('about.titleHighlight')}
                <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 300 4">
                  <path d="M0 2 Q150 0 300 2" stroke="black" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
          </SectionReveal>
        </div>
      </section>

      <section dir={isRtl ? 'rtl' : 'ltr'} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                    alt="Team at work"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute -bottom-6 ${isRtl ? '-left-6' : '-right-6'} bg-black text-white p-6 max-w-[200px]`}>
                  <div className="font-heading font-black text-3xl">50+</div>
                  <div className="font-body text-xs text-zinc-400 mt-1">Projets livrés avec succès</div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <p className="font-body text-secondary text-base leading-relaxed mb-5">
                {t('about.desc1')}
              </p>
              <p className="font-body text-secondary text-base leading-relaxed mb-10">
                {t('about.desc2')}
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                {t('about.cta')} <ArrowRight size={15} style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }} />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section dir={isRtl ? 'rtl' : 'ltr'} className="section-padding bg-zinc-50 border-y border-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-light">
            {values.map(({ icon: Icon, key }, i) => (
              <SectionReveal key={key} delay={i * 0.1} className="bg-white p-8">
                <div className="w-10 h-10 border border-light flex items-center justify-center mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">
                  {t(`about.values.${key}.title`)}
                </h3>
                <p className="font-body text-sm text-secondary leading-relaxed">
                  {t(`about.values.${key}.desc`)}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section dir={isRtl ? 'rtl' : 'ltr'} className="section-padding bg-white">
        <div className="container-custom">
          <SectionReveal className="mb-12">
            <Badge>{t('about.team.badge') || 'Notre Équipe'}</Badge>
            <h2 className="section-title mt-4 mb-3">{t('about.team.title') || 'Les personnes derrière le projet'}</h2>
            <p className="font-body text-secondary max-w-xl leading-relaxed">
              {t('about.team.subtitle') || 'Une équipe passionnée, dédiée à livrer des solutions digitales d\'exception.'}
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-light">
            {teamMembers.map((member, i) => (
              <SectionReveal key={member.name} delay={i * 0.08} className="bg-white">
                <div className="p-6 h-full flex flex-col">
                  <div className="w-20 h-20 overflow-hidden border border-light mb-5 flex-shrink-0">
                    <img
                      src={member.image || DEFAULT_AVATAR}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-heading font-black text-base text-black mb-0.5">{member.name}</div>
                    <div className="font-sub text-xs font-semibold uppercase tracking-widest text-black mb-1">{member.role}</div>
                    <div className="font-body text-xs text-secondary mb-5">{member.specialty}</div>
                  </div>
                  <div className={`flex items-center gap-3 border-t border-light pt-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <a
                      href={`mailto:${member.contacts.email}`}
                      className="w-8 h-8 border border-light flex items-center justify-center hover:border-black hover:bg-black group transition-all"
                      aria-label="Email"
                    >
                      <Mail size={13} className="text-secondary group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href={`tel:${member.contacts.phone}`}
                      className="w-8 h-8 border border-light flex items-center justify-center hover:border-black hover:bg-black group transition-all"
                      aria-label="Phone"
                    >
                      <Phone size={13} className="text-secondary group-hover:text-white transition-colors" />
                    </a>
                    {member.contacts.linkedin && (
                      <a
                        href={member.contacts.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 border border-light flex items-center justify-center hover:border-black hover:bg-black group transition-all"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={13} className="text-secondary group-hover:text-white transition-colors" />
                      </a>
                    )}
                  </div>
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