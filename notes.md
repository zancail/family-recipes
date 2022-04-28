# Contentful, Gatsby & React

## Contentful

! Don't forget to click "Save" after adding new fields and fill in the field in the content section of your model so there is dummy content available

## Gatsby

Variables that are passed to the context in createPage (gatsby-node.js) are accessible in the model template, prefixed by $. The same variables are also accessible in the template through this.props.pageContext

Tutorial: https://www.youtube.com/watch?v=IaNU4R3ck_k
Tutorial notes:
@contentful/gatsby-transformer-contentful-richtext is deprecated, use GraphQL from
https://www.contentful.com/developers/docs/tutorials/general/rich-text-and-gatsby/

Rich Text
https://www.gatsbyjs.com/blog/how-to-use-the-contentful-rich-text-field-with-gatsby/

## Gatsby Cloud

If deploy fails because of following error:
`Cannot read properties of null (reading 'url')`
it's because a new locale was added in Contentful without a fallback.

## Plyr

I used Plyr to show videos but this caused the build in Gatsby Cloud to fail. To fix: https://chaseohlson.com/plyr-gatsby-youtube-vimeo

Error graphql
`"Variable \"$pageId\" of type \"String\" used in position expecting type \"StringQueryOperatorInput\".",`
