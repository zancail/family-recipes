const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const recipeTemplate = path.resolve(`./src/templates/recipe-contentful.js`)

  return graphql(
    `
      {
        allContentfulRecipe {
          edges {
            node {
              slug
              node_locale
              title
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create recipe pages
    const recipes = result.data.allContentfulRecipe.edges

    recipes.forEach((recipe, index) => {
      // Check for a previous or next recipe
      const previous =
        index === recipes.length - 1 ? null : recipes[index + 1].node
      const next = index === 0 ? null : recipes[index - 1].node

      createPage({
        path: `/${recipe.node.node_locale.toLowerCase()}/recipes/${
          recipe.node.slug
        }/`,
        component: recipeTemplate,
        context: {
          slug: recipe.node.slug,
          previous,
          next,
          nodeLocale: recipe.node.node_locale,
        },
      })
    })
  })
}
