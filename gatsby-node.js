const path = require(`path`)
const languages = require('./src/data/languages')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const recipeIndexTemplate = path.resolve(
    `./src/templates/recipe-index-contentful.js`
  )
  const recipeTemplate = path.resolve(`./src/templates/recipe-contentful.js`)

  return graphql(
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
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create recipe index
    languages.langs.forEach((lang) => {
      createPage({
        path: `/${lang}`,
        component: recipeIndexTemplate,
        context: {
          locale: lang,
        },
      })
    })

    // Create recipe pages
    const recipes = result.data.allContentfulRecipe.edges

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
  })
}
