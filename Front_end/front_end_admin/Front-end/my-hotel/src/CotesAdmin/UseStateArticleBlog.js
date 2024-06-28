import React, { createContext, useContext, useState } from 'react';
import ArticleBlogIndex from "../FicherDeConnection/FicherArticleBlog/ArticleBlog";
import AddImageArticleBlog from '../FicherDeConnection/FicherArticleBlog/AddImageArticleBlog';


const UseStateArticleBlog = createContext();


export const AppProviderStateArticleBlog = ({ children }) => {

    //----< table article blog
    const [token, setToken] = useState(null);
    const [articleBlogs, setArticleBlogs] = useState([]);
    const [pageTableArticleBlog, setPageTableArticleBlog] = useState(1);
    const [linksPaginateArticleblog, setLinksPaginateArticleblog] = useState([]);
    const [tableArticleblogSerch, setTableArticleblogSerch] = useState("");
    const [ArticleBlog, setArticleBlog] = useState({});
    const [articleBlogImage, setArticleBlogImage] = useState("");
    //--->

    const objArticleBlog = {
        setArticleBlogImageMethod: (articleBlogImageParam) => { setArticleBlogImage(articleBlogImageParam); },
        getArticleBlogImage: () => { return articleBlogImage; },

        setPageTableArticleBlogMethod: (pageTableArticleBlogParam) => {
            setPageTableArticleBlog(pageTableArticleBlogParam);
        },
        getPageTableArticleBlog: () => {
            return pageTableArticleBlog;
        },
        setLinksPaginateArticleblogMethod: (linksPaginateArticleblogParam) => {
            setLinksPaginateArticleblog(linksPaginateArticleblogParam);
        },
        getLinksPaginateArticleblog: () => {
            return linksPaginateArticleblog;
        },
        setTableArticleblogSerchMethod: (tableArticleblogSerchParam) => {
            setTableArticleblogSerch(tableArticleblogSerchParam);
        },
        getTableArticleblogSerch: () => {
            return tableArticleblogSerch;
        },
        getArticleBlogs: () => {
            return articleBlogs;
        },
        setArticleBlogsMethod: (articleBlogsParam) => {
            setArticleBlogs(articleBlogsParam);
        },
        setArticleBlogMethod: (articleBlogParam) => {
            setArticleBlog(articleBlogParam);
        },
        getArticleBlog: () => {
            return ArticleBlog;
        },

        getToken: () => {
            const tokenString = sessionStorage.getItem("token");
            const userToken = JSON.parse(tokenString);
            return userToken;
        },
        setTokenMethode: (TokenParam) => {
            setToken(TokenParam);
        },
        // ------
        deleteImage: async (fileName) => {
            const res = await AddImageArticleBlog.delete(token, fileName);
            console.log(res);
            return res;
        },
        UpdateArticleBlog: async (objNewDate) => {
            const res = ArticleBlogIndex.update(token, objNewDate);
            return res;
        },
        storeArticleBlog: async (articleData) => {
            const res = ArticleBlogIndex.store(token, articleData);
            return res;
        },
        deleteArticleBlog: async (idParam) => {
            try {
                const response = await ArticleBlogIndex.delete(token, idParam);
                console.log(response);
                setPageTableArticleBlog(2);
                setPageTableArticleBlog(1);
                return response;
            } catch (error) {
                console.log("chena taha elamine ", error);
            }


        },

        fetchArticleBlogSearch: async (page = 1) => {
            if (tableArticleblogSerch) {

                const articleBlogs = await ArticleBlogIndex.search(token, page, tableArticleblogSerch);
                setArticleBlogs(articleBlogs.data);
                setLinksPaginateArticleblog(articleBlogs.links);
                setPageTableArticleBlog(page);
                return articleBlogs;

            } else if (tableArticleblogSerch === "") {

                const articleBlogs = await ArticleBlogIndex.index(token, pageTableArticleBlog);
                setArticleBlogs(articleBlogs.data);
                setLinksPaginateArticleblog(articleBlogs.links);
                return articleBlogs;
            }

        },
        fetchNextArticleBlogsTable: (link) => {
            const url = new URL(link);

            setPageTableArticleBlog(url.searchParams.get("page"));
        },
        indexArticleBlogs: async () => {

            const articleBlogs = await ArticleBlogIndex.index(objArticleBlog.getToken(), pageTableArticleBlog);
            setArticleBlogs(articleBlogs.data);
            setLinksPaginateArticleblog(articleBlogs.links);
            return articleBlogs;
        },

    }
    return (
        <UseStateArticleBlog.Provider value={{ objArticleBlog }}>
            {children}
        </UseStateArticleBlog.Provider>
    );
};



export const useStateArticleBlogAppContext = () => {
    return useContext(UseStateArticleBlog);
};
