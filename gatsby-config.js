module.exports = {
  siteMetadata: {
    title: `Family Recipes`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "H3I4UlaDnSDu4VPphlReuX-mP4XiJpflU-6YvC4QReI",
      "spaceId": "odg2aqit5coi"
    }
  }, "gatsby-plugin-sass"]
};