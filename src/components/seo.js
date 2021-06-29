import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, lang, meta }) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    social {
                        twitter
                    }
                }
            }
        }
    `);
    const defaultTitle = site.siteMetadata.title;
    const metaDescription = description | site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{ lang, }}
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `og:title`,
                    content: title,
                },
                {
                    name: `og:description`,
                    content: metaDescription,
                },
                {
                    name: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: description,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata?.social?.twitter || ``,
                },
            ].concat(meta)}
        />
    );
};

SEO.defaultProps = {
    description: ``,
    lang: `ja`,
    meta: [],
};

export default SEO;