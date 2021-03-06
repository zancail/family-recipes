import React from 'react'
import '../../styles/app.scss'
import { Footer, Header } from '@components'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import '../../i18n'

const Layout = ({ children, location, newMenu }) => {
  const url = location.pathname
  const { langs, defaultLangKey } = require('../../data/languages')
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey}/`
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))

  return (
    <>
      <Header langs={newMenu ?? langsMenu} currentLang={langKey} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
