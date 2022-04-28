import React, { useEffect, useState } from 'react'

const useGeneratedLangMenu = (items, locale, location) => {
  const [langMenu, setLangMenu] = useState()
  useEffect(() => {
    const newMenu = []
    const currentUrl = location
    const currentUrlArray = currentUrl.split('/')
    items.edges.map(({ node: item }) => {
      const newMenuItem = {}
      newMenuItem.langKey = item.node_locale
      let newUrl = currentUrlArray
      newUrl[1] = item.node_locale
      newUrl[newUrl.length - 1] = item.slug
      newUrl = newUrl.join('/')
      newMenuItem.link = newUrl
      newMenuItem.selected = locale === item.node_locale
      newMenu.push(newMenuItem)
    })
    setLangMenu(newMenu)
  }, [location])
  return langMenu
}
export default useGeneratedLangMenu
