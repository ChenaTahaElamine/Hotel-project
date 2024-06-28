import React, { useEffect } from 'react';
import Header from '../../../header/Header';
import SideBar from '../../../sideBar/SideBar';
import PageBreadcrumb from '../../PageBreadcrumb';
import Table from './TableArticlesBlogs/Table';
import Pagination from './TableArticlesBlogs/Pagination';
import Search from "./TableArticlesBlogs/Search";
import { useStateArticleBlogAppContext } from '../../../UseStateArticleBlog';
import { useAppContext } from '../../../AppContext';

function Articles_blog(props) {

    const { objArticleBlog } = useStateArticleBlogAppContext();
    const { objAuthUser } = useAppContext();

    const ArticleBlogsIndex = async () => {
        objArticleBlog.setTokenMethode(objAuthUser.getToken());
        await objArticleBlog.indexArticleBlogs();
    }

    useEffect(() => {

        if (objArticleBlog.getToken()) {
            if (objArticleBlog.getTableArticleblogSerch() !== "") {
                objArticleBlog.fetchArticleBlogSearch(objArticleBlog.getPageTableArticleBlog());
            } else {
                ArticleBlogsIndex();
            }
        }


    }, [objArticleBlog.getPageTableArticleBlog()]);
    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <Header />
            <SideBar />
            <div className="page-wrapper">

                <PageBreadcrumb location={"Articles blog"} />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="card">

                            <div className="card-body">
                                <Search />
                                <Table />
                            </div>
                            <div className="card-body">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer"> © 2021 Material Pro Admin by <a href="https://www.wrappixel.com/">wrappixel.com </a>
                </footer>
            </div>

        </div>

    );
}


export default Articles_blog;