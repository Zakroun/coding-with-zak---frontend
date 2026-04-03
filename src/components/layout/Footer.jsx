import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Heart } from 'lucide-react'
import { useLang } from '../../hooks/useLang'

export default function Footer() {
  const { t, locale } = useLang()
  const isRtl = locale === 'ar'
  const year = new Date().getFullYear()

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <footer dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading font-black text-base">
                CodingWith<span className="text-zinc-400">Zak</span>
              </span>
            </div>
            <p className="font-body text-sm text-zinc-400 max-w-xs leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <a href="mailto:codingwiithzak@gmail.com" className={`flex items-center gap-2 hover:text-white transition-colors ${isRtl ? 'flex-row-reverse' : ''}`}>
                <Mail size={14} /> codingwiithzak@gmail.com
              </a>
              <a
                href="tel:+212625702587"
                className={`flex items-center gap-2 hover:text-white transition-colors`}
                style={{ direction: isRtl ? 'ltr' : 'ltr' }}
              >
                <Phone size={14} />
                <span className={isRtl ? 'text-right' : ''}>+212 625 702 587</span>
              </a>
              <span className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <MapPin size={14} /> Maroc
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-sub font-semibold text-sm uppercase tracking-widest mb-5 text-zinc-300">
              {t('footer.links')}
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sub font-semibold text-sm uppercase tracking-widest mb-5 text-zinc-300">
              {t('footer.services')}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400 font-body">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>E-commerce</li>
              <li>UI/UX Design</li>
              <li>API & SaaS</li>
              <li>Dashboards</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-zinc-500">
            © {year} CodingWithZak. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}