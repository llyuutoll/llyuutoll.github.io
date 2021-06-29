/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: "llyuutoll's Space.",
        author: {
            name: "Yuuto",
            summary: "The university student",
        },
        description: "llyuutollのポートフォリオです.",
        siteUrl: "https://llyuutoll.github.io",        
        social: {
            twitter: `@tanqcircle`
        },
    },
    plugins: [
        
        `gatsby-plugin-sharp`,
        `gatsby-remark-images`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [".mdx", ".md"],
                gatsbyRemarkPlugin: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: `blog`,
            },
        },
    ],
};
