import React from 'react';
import Header from '../ComposantsPrincipaux/Header';
import Footer from '../ComposantsPrincipaux/Footer';

const ArticleBlogPage = () => {
    return (
        <>
            <Header Lieu="Index" />
            <div className="featured section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>la page ArticleBlogPage</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
}

export default ArticleBlogPage;
