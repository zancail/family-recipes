import React from "react"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import "../styles/app.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
