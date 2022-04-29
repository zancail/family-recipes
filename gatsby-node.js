const path = require(`path`)
const languages = require('./src/data/languages')

exports.createSchemaCustomization = async ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type ContentfulHero implements Node {
    backgroundMedia: ContentfulAsset
  }
  type NavigationLink {
    slug: String,
    node_local: String,
  }
`
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const recipeIndexTemplate = path.resolve(
    `./src/templates/recipe-index-contentful.js`
  )
  const recipeTemplate = path.resolve(`./src/templates/recipe-contentful.js`)
  const pageTemplate = path.resolve(`./src/templates/page-contentful.js`)

  const dataQuery = await graphql(
    `
      {
        allContentfulRecipe(sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              slug
              node_locale
              title
              contentful_id
            }
          }
        }
        allContentfulPage {
          edges {
            node {
              contentful_id
              slug
              node_locale
              id
            }
          }
        }
      }
    `
  )

  if (dataQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)

    return
  }

  // Create pages
  const pages = dataQuery.data.allContentfulPage.edges
  pages.forEach((page) => {
    createPage({
      path: `/${page.node.node_locale}/pages/${page.node.slug}`,
      component: pageTemplate,
      context: {
        contentfulId: page.node.contentful_id,
        locale: page.node.node_locale,
        id: page.node.id,
      },
    })
  })

  // Create recipe index
  languages.langs.forEach((lang) => {
    createPage({
      path: `/${lang}/recipes`,
      component: recipeIndexTemplate,
      context: {
        locale: lang,
      },
    })
  })

  // Create recipe pages
  const recipes = dataQuery.data.allContentfulRecipe.edges

  recipes.forEach((recipe) => {
    const filteredRecipes = recipes.filter(
      (item) => item.node.node_locale === recipe.node.node_locale
    )

    const currentIndex = filteredRecipes.indexOf(recipe)

    console.log(filteredRecipes)
    // Check for a previous or next recipe
    const previous =
      currentIndex === filteredRecipes.length - 1
        ? null
        : filteredRecipes[currentIndex + 1]?.node
    const next =
      currentIndex === 0 ? null : filteredRecipes[currentIndex - 1]?.node

    createPage({
      path: `/${recipe.node.node_locale}/recipes/${recipe.node.slug}/`,
      component: recipeTemplate,
      context: {
        slug: recipe.node.slug,
        previous,
        next,
        nodeLocale: recipe.node.node_locale,
        contentfulId: recipe.node.contentful_id,
      },
    })
  })
}
