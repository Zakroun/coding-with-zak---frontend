import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLang } from '../../hooks/useLang'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const { t, locale, switchLocale } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isRtl = locale === 'ar'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const isActive = (to) => location.pathname === to

  return (
    <header
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-light shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-heading font-black text-base text-black tracking-tight">
              CodingWith<span className="text-secondary">Zak</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sub text-sm font-medium transition-colors duration-200 relative ${isActive(link.to) ? 'text-black' : 'text-secondary hover:text-black'
                  }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-black"
                  />
                )}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => switchLocale(locale === 'fr' ? 'en' : locale === 'en' ? 'ar' : 'fr')}
              className={`flex items-center gap-1.5 font-sub text-xs font-medium border border-light px-3 py-1.5 hover:border-black transition-colors duration-200 ${isRtl ? 'flex-row-reverse' : ''
                }`}
            >
              <span>
                {locale === 'fr' ? (
                  <img src="/public/images/flags/fr.png" alt="French" className="w-4" />
                ) : locale === 'en' ? (
                  <img src="/public/images/flags/en.png" alt="English" className="w-4" />
                ) : (
                  <img src="/public/images/flags/ar.png" alt="Arabic" className="w-4" />
                )}
              </span>
              <span className="uppercase tracking-wider text-secondary">
                {locale === 'fr' ? 'FR' : locale === 'en' ? 'EN' : 'AR'}
              </span>
            </button>
            <Link to="/contact" className="btn-primary text-xs py-2.5 px-5">
              {t('nav.cta')}
            </Link>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-light overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-sub text-sm font-medium py-2 border-b border-light/60 transition-colors ${isActive(link.to) ? 'text-black' : 'text-secondary'
                    } ${isRtl ? 'text-right' : 'text-left'}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => switchLocale(locale === 'fr' ? 'en' : locale === 'en' ? 'ar' : 'fr')}
                  className={`flex items-center gap-1.5 font-sub text-xs font-medium border border-light px-3 py-1.5 hover:border-black transition-colors duration-200 ${isRtl ? 'flex-row-reverse' : ''
                    }`}
                >
                  <span>
                    {locale === 'fr' ? (
                      <img src="/public/images/flags/fr.png" alt="French" className="w-4" />
                    ) : locale === 'en' ? (
                      <img src="/public/images/flags/en.png" alt="English" className="w-4" />
                    ) : (
                      <img src="/public/images/flags/ar.png" alt="Arabic" className="w-4" />
                    )}
                  </span>
                  <span className="uppercase tracking-wider text-secondary">
                    {locale === 'fr' ? 'FR' : locale === 'en' ? 'EN' : 'AR'}
                  </span>
                </button>
                <Link to="/contact" className="btn-primary text-xs py-2 px-4">
                  {t('nav.cta')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}