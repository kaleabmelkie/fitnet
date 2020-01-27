module.exports = {
  siteMetadata: {
    title: `Fitnet`,
    description: `A test project for assessing the speed and performance of streaming audio from a Git LFS source using NetlifyCMS.`,
    author: `@kaleabmelkie`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fitnet`,
        short_name: `Fitnet`,
        start_url: `/`,
        background_color: `#00b478`,
        theme_color: `#00b478`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,

    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-graphql-codegen`,

    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        htmlTitle: `Fitnet | Content Management`
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,

    // MAKE SURE THIS IS LAST
    `gatsby-plugin-netlify`
  ]
}
