import fr from '../locales/fr.json'
import en from '../locales/en.json'
import ar from '../locales/ar.json'
export const translations = { fr, en, ar }
export const defaultLocale = 'fr'
export const supportedLocales = ['fr', 'en', 'ar']

export function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}
