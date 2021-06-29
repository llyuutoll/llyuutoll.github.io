import React from "react";
import { graphql, /*Link*/ } from 'gatsby';
import Container from '../components/container';
import SEO from '../components/seo';

const Home = ({ data }) => {
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;
    return (
        <Container>
            <SEO title={siteTitle} description={siteDescription} />

        </Container>
    );
};

export default Home;

export const pageQuery = graphql`
{
    site {
        siteMetadata {
            title
            description
        }
    }
}
`;