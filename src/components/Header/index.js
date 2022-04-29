import * as React from 'react'

import useScrollPosition from '../../hooks/useScrollPosition'
import { LangSwitcher, Navigation } from '@components'
import { useTranslation } from 'react-i18next'
import { Navbar, Container } from 'react-bootstrap'

const Header = ({ langs, currentLang }) => {
  const { t } = useTranslation()

  const scrollPos = useScrollPosition()

  return (
    <header
      className={`header bg-primary text-white mb-4 ${
        scrollPos > 40 ? 'header--shrink' : ''
      }`}
    >
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">{t('home.title')}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navigation currentLang={currentLang} />
            <LangSwitcher langs={langs} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
