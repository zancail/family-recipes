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