import React from 'react';
import Header from './header';
import Footer from './footer';

const Container = ({ children }) => {
    return (
        <div>
            <div className="container">
                <Header />
                <main className="main">{children}</main>
                <Footer />
            </div>
        </div>
    );
};

export default Container;