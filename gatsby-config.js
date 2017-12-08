module.exports = {
    siteMetadata:{
      title:'NFR - MetaData Title'
    },
    pathPrefix: '/gatsbyjs-tutorials',
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        'gatsby-plugin-glamor',
        'gatsby-plugin-styled-components'
    ],
};