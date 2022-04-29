import * as React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-primary text-white py-2 mt-4">
      <div className="container">{t('copyright')}</div>
    </footer>
  )
}

export default Footer
