import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLang } from '../hooks/useLang'
import Badge from '../components/ui/Badge'
import SectionReveal from '../components/ui/SectionReveal'
import { FaSpinner } from "react-icons/fa";

export default function Contact() {
  const { t, locale } = useLang()
  const isRtl = locale === 'ar'
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://coding-with-zak-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      console.log('ERROR FROM BACK:', data)
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const contactInfo = [
    { icon: Mail, label: t('contact.info.email'), value: 'codingwiithzak@gmail.com', href: 'mailto:codingwiithzak@gmail.com' },
    { icon: Phone, label: t('contact.info.phone'), value: '+212 625 702 587', href: 'tel:+212625702587' },
    { icon: MapPin, label: t('contact.info.location'), value: t('contact.info.locationValue'), href: null },
  ]

  return (
    <>
      <Helmet>
        <title>Contact — CodingWithZak</title>
        <meta name="description" content="Contactez CodingWithZak pour démarrer votre projet digital. Réponse sous 24h garantie." />
        <meta property="og:title" content="Contact — CodingWithZak" />
        <link rel="canonical" href="https://codingwithzak.com/contact" />
      </Helmet>

      <section dir={isRtl ? 'rtl' : 'ltr'} className="pt-36 pb-16 bg-zinc-50 border-b border-light">
        <div className="container-custom">
          <SectionReveal>
            <Badge>{t('contact.badge')}</Badge>
            <h1 className="section-title mt-4 mb-4">{t('contact.title')}</h1>
            <p className="font-body text-secondary max-w-xl leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </SectionReveal>
        </div>
      </section>

      <section dir={isRtl ? 'rtl' : 'ltr'} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <SectionReveal>
                <div className="flex flex-col gap-6">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className={`flex items-start gap-4 p-5 border border-light hover:border-black transition-colors group ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <div className="w-9 h-9 border border-light group-hover:border-black group-hover:bg-black flex items-center justify-center flex-shrink-0 transition-all">
                        <Icon size={16} className="text-black group-hover:text-white transition-colors" />
                      </div>
                      <div className={isRtl ? 'text-right' : ''}>
                        <div className="font-sub text-xs text-secondary uppercase tracking-wider mb-1">{label}</div>
                        {href ? (
                          <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="font-body text-sm text-black hover:underline break-all">
                            {value}
                          </a>
                        ) : (
                          <span className="font-body text-sm text-black">{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-3">
              <SectionReveal delay={0.15}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-sub text-xs text-secondary uppercase tracking-wider block mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Zakaria El Idrissi"
                        className="w-full border border-light focus:border-black outline-none font-body text-sm px-4 py-3 transition-colors bg-white"
                      />
                    </div>
                    <div>
                      <label className="font-sub text-xs text-secondary uppercase tracking-wider block mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full border border-light focus:border-black outline-none font-body text-sm px-4 py-3 transition-colors bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-sub text-xs text-secondary uppercase tracking-wider block mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Création d'une application web"
                      className="w-full border border-light focus:border-black outline-none font-body text-sm px-4 py-3 transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-sub text-xs text-secondary uppercase tracking-wider block mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Décrivez votre projet..."
                      className="w-full border border-light focus:border-black outline-none font-body text-sm px-4 py-3 transition-colors bg-white resize-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {isRtl
                        ? 'الرسالة خاصها تكون بين 10 و 5000 حرف'
                        : 'Message must be between 10 and 5000 characters'}
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>{t('contact.form.sending')} <span className="animate-spin"><FaSpinner size={14} /></span></>
                    ) : (
                      <>{t('contact.form.submit')} <Send size={14} style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }} /></>
                    )}
                  </button>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 text-green-600 font-body text-sm border border-green-200 bg-green-50 px-4 py-3 ${isRtl ? 'flex-row-reverse' : ''}`}
                    >
                      <CheckCircle size={16} /> {t('contact.form.success')}
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 text-red-600 font-body text-sm border border-red-200 bg-red-50 px-4 py-3 ${isRtl ? 'flex-row-reverse' : ''}`}
                    >
                      <XCircle size={16} /> {t('contact.form.error')}
                    </motion.div>
                  )}
                </form>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}