import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './Index/IndexPage';
import Error404 from "./PageError/Error404";
import ArticleBlogPage from './ArticleBlog/ArticleBlogPage';
import ChambresPage from './Chambres/ChambresPage';
import ResteurantPage from './Resteurant/ResteurantPage';
import PropertyDetails from './property-details/PropertyDetails';
import Register from './RegisterUser/Register';
import DeitailsResteurant from './Resteurant/DeitailsResteurant';
import DeitailsChambre from './Chambres/DeitailsChambre';
 


const FicherRoutes = () => {
    return (
        <Fragment>

            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<IndexPage />} />
                    <Route path='/ArticleBlogPage' exact element={<ArticleBlogPage />} />
                    <Route path='/ChambresPage' exact element={<ChambresPage />} />
                    <Route path='/DeitailsChambre' exact element={<DeitailsChambre />} />

                    <Route path='/ResteurantPage' exact element={<ResteurantPage />} />
                    <Route path='/DeitailsResteurant' exact element={<DeitailsResteurant />} />                    
                    <Route path='/RegisterUser' exact element={<Register />} />
                    <Route path='/PropertyDetails' exact element={<PropertyDetails />} />
                    <Route path='*' exact element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default FicherRoutes;
