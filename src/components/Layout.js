import React from "react"
import "../styles/app.scss"
import Header from "./header"
import Footer from "./footer"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"

const Layout = ({ children, location }) => {
  const url = location.pathname
  const { langs, defaultLangKey } = require("../data/languages")
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey}/`
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))
  return (
    <div>
      <Header langs={langsMenu} />

      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
