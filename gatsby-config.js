const dotenv = require('dotenv')
const path = require('path')
const languages = require('./src/data/languages')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = {
  trailingSlash: 'never',
  siteMetadata: {
    title: `Family Recipes`,
    siteUrl: `http://familyrecipesmain.gatsbyjs.io/`,
    languages,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.SPACE_ID,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, './src/locales'),
        name: `locale`,
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, './src/components'),
          '@constants': path.resolve(__dirname, './src/constants'),
          '@pages': path.resolve(__dirname, './src/pages'),
          '@utils': path.resolve(__dirname, './src/utils'),
        },
        extensions: [],
      },
    },
  ],
}
