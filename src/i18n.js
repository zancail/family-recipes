import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  'en-US': {
    translation: {
      'home.title': 'Family recipes',
      test: 'English test',
      'recipe.ingredients title': 'Ingredients',
      'recipe.reviews title': 'Reviews',
      copyright: 'Website by Ilona Zancaner 2022',
      sort: 'Sort by',
      'newest first': 'newest first',
      'oldest first': 'oldest first',
      'show all': '-- Show all --',
      'view recipe': 'View recipe',
    },
  },
  'nl-BE': {
    translation: {
      'home.title': 'Familie recepten',
      test: 'Nederlandse test',
      'recipe.ingredients title': 'Ingredienten',
      'recipe.reviews title': 'Beoordelingen',
      copyright: 'Website door Ilona Zancaner 2022',
      sort: 'Sorteren op',
      'newest first': 'recentste eerst',
      'oldest first': 'oudste eerst',
      'show all': '-- Toon alles --',
      'view recipe': 'Toon recept',
    },
  },
}

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en-US',
    lng: 'en-US',
    debug: true,
    resources,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
