import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Header = () => {
    const { site } = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    const title = site.siteMetadata.title;

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="nav-brand">
                        <Link to="#">{title}</Link>
                    </div>
                    <div className="menu-icons"></div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="#" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">Works</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;