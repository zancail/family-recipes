const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const familyRecipe = path.resolve(`./src/templates/recipe-contentful.js`)

  return graphql(
    `{
        allContentfulRecipe {
          edges {
            node {
              slug
              title
            }
          }
        }
    }`
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create recipe pages
    const recipes = result.data.allContentfulRecipe.edges

    recipes.forEach((recipe, index) => {
      const previous = index === recipes.length - 1 ? null : recipes[index + 1].node
      const next = index === 0 ? null : recipes[index - 1].node
      createPage({
        path: recipe.node.slug,
        component: familyRecipe,
        context: {
          slug: recipe.node.slug,
          previous,
          next
        }
      })
    })
  })
}