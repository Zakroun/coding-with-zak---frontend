import { createContext, useContext, useState } from 'react'
import { translations, defaultLocale, getNestedValue } from '../i18n/config'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [locale, setLocale] = useState(
    () => localStorage.getItem('cwz_locale') || defaultLocale
  )

  function t(key) {
    const val = getNestedValue(translations[locale], key)
    return val ?? getNestedValue(translations[defaultLocale], key) ?? key
  }

  function switchLocale(lang) {
    setLocale(lang)
    localStorage.setItem('cwz_locale', lang)
  }

  return (
    <LangContext.Provider value={{ locale, t, switchLocale }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
