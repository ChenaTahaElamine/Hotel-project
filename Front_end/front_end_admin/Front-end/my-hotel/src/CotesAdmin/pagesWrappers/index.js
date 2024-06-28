import React, { Fragment, setState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ArticlesBlogRoute from "./ComponentsIndex/Articles_blog/Articles_blog";
import ChambresRoute from "./ComponentsIndex/chambres/Chambres";
import ImagesOrVidiosRoute from "./ComponentsIndex/images_or_vidios/Images_or_vidios";
import ResteurantRoute from "./ComponentsIndex/resteurant/Resteurant";
import UsersRoute from "./ComponentsIndex/Users/User";
import Error404 from "./ComponentsIndex/errors/Error404";
import DashbordPage from './ComponentsIndex/Dashbord/DashbordPage';
import PageLogin from './ComponentsIndex/Login/PageLogin';
import Profile from './ComponentsIndex/ProfileAdmin/Profile';
import ProtectedRoute from "./ProtectedRoute";
import ProfileUserFile from './ComponentsIndex/Users/ProfileUser/ProfileUserFile';
import DetailsArticleBlogRfc from './ComponentsIndex/Articles_blog/DetailsArticleBlog/DetailsArticleBlogRfc';
import UpdateArticleBlog from './ComponentsIndex/Articles_blog/UpdateArticleBlog/UpdateArticleBlog';
import AddArticleBlog from './ComponentsIndex/Articles_blog/FormAddArticleBlog/AddArticleBlog';
import DetailsResteurantRfc from './ComponentsIndex/resteurant/DetailsResteurant/DetailsResteurantRfc';
import UpdateResteurant from './ComponentsIndex/resteurant/UpdateRestaurant/UpdateResteurant';
import AddResteurant from './ComponentsIndex/resteurant/FormAddResteurant/AddResteurant';
import AddChambre from './ComponentsIndex/chambres/FormAddChambre/AddChambre';
import UpdateChambre from './ComponentsIndex/chambres/UpdateChambre/UpdateChambre';
import DetailsChambre from './ComponentsIndex/chambres/DetailsChambre/DetailsChambre';
import ResteurantMedia from './ComponentsIndex/images_or_vidios/pages_media/ResteurantMedia/ResteurantMedia';
import ChambreMedia from './ComponentsIndex/images_or_vidios/pages_media/ChambreMedia/ChambreMedia';
import ArticleBlogMedia from './ComponentsIndex/images_or_vidios/pages_media/ArticleBlogMedia/ArticleBlogMedia';
import AddImageChambre from './ComponentsIndex/images_or_vidios/pages_media/ChambreMedia/PageAddImage/AddImageChambre';
import AddImageArticleBlog from './ComponentsIndex/images_or_vidios/pages_media/ArticleBlogMedia/PageAddImage/AddImageArticleBlog';
import AddImageResteurant from './ComponentsIndex/images_or_vidios/pages_media/ResteurantMedia/PageAddImage/AddImageResteurant';
import Reservation from './ComponentsIndex/ReservationParMessage/Reservation';



function index({ objAuthUser }) {




    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={ProtectedRoute(<DashbordPage />, "/")} />
                    <Route path='/articles_blog' exact element={ProtectedRoute(<ArticlesBlogRoute />)} />
                    {/* ----< */}
                    <Route path='/articles_blog/details' exact element={ProtectedRoute(<DetailsArticleBlogRfc />)} />
                    <Route path='/articles_blog/update' exact element={ProtectedRoute(<UpdateArticleBlog />)} />
                    <Route path='/articles_blog/add' exact element={ProtectedRoute(<AddArticleBlog />)} />
                    {/* ---> */}

                    <Route path='/chambres_route' exact element={ProtectedRoute(<ChambresRoute />)} />
                    {/* -----< */}

                    <Route path='/chambre/details' exact element={ProtectedRoute(<DetailsChambre />)} />
                    <Route path='/chambre/update' exact element={ProtectedRoute(<UpdateChambre />)} />
                    <Route path='/chambre/add' exact element={ProtectedRoute(<AddChambre />)} />
                    {/* -----> */}


                    <Route path='/images_or_vidios' exact element={ProtectedRoute(<ImagesOrVidiosRoute />)} />
                    {/* ------< */}
                    <Route path='/images_or_vidios/ResteurantMedia' exact element={ProtectedRoute(<ResteurantMedia />)} />
                    {/* < */}
                    <Route path='/images_or_vidios/ResteurantMedia/add' exact element={ProtectedRoute(<AddImageResteurant />)} />

                    {/* > */}
                    <Route path='/images_or_vidios/ChambreMedia' exact element={ProtectedRoute(<ChambreMedia />)} />
                    {/* <---- */}
                    <Route path='/images_or_vidios/ChambreMedia/add' exact element={ProtectedRoute(<AddImageChambre />)} />
                    {/* -----> */}
                    <Route path='/images_or_vidios/ArticleBlogMedia' exact element={ProtectedRoute(<ArticleBlogMedia />)} />
                    <Route path='/images_or_vidios/ArticleBlogMedia/add' exact element={ProtectedRoute(<AddImageArticleBlog />)} />

                    {/* ------> */}
                    <Route path='/resteurant' exact element={ProtectedRoute(<ResteurantRoute />)} />
                    {/* -------< */}
                    <Route path='/resteurant/details' exact element={ProtectedRoute(<DetailsResteurantRfc />)} />
                    <Route path='/resteurant/update' exact element={ProtectedRoute(<UpdateResteurant />)} />
                    <Route path='/resteurant/add' exact element={ProtectedRoute(<AddResteurant />)} />
                    {/* -------> */}
                    <Route path='/users' exact element={ProtectedRoute(<UsersRoute />)} />
                    <Route path='*' exact element={<Error404 />} />
                    <Route path='/loginAdmin' exact element={<PageLogin />} />
                    <Route path='/Profile' exact element={ProtectedRoute(<Profile />)} />
                    <Route path='/ProfileUser' exact element={ProtectedRoute(<ProfileUserFile />)} />

                    <Route path='/reservation_route' exact element={ProtectedRoute(<Reservation />)} />



                </Routes>
            </BrowserRouter>

        </Fragment>
    );
}

export default index;

/*





<Route path='/chambres_route' exact element={
                        <ProtectedRoute user={null}>
                            <ChambresRoute />
                        </ProtectedRoute>
                    } />
                    <Route path='/images_or_vidios' exact element={
                        <ProtectedRoute user={null}>
                            <ImagesOrVidiosRoute />
                        </ProtectedRoute>
                    } />
                    <Route path='/resteurant' exact element={
                        <ProtectedRoute user={null}>
                            <ResteurantRoute />
                        </ProtectedRoute>
                    } />
                    <Route path='/users' exact element={
                        <ProtectedRoute user={null}>
                            <UsersRoute />
                        </ProtectedRoute>
                    } />
                    <Route path='*' exact element={<Error404 />} />
                    <Route path='/loginAdmin' exact element={<PageLogin />} />
                    <Route path='/Profile' exact element={
                        <ProtectedRoute user={null}>
                            <Profile />
                        </ProtectedRoute>
                    } /> */