import React, { useState } from 'react';
import Header from '../../../../header/Header';
import SideBar from '../../../../sideBar/SideBar';
import PageBreadcrumb from '../../../PageBreadcrumb';
import { useAppContext } from '../../../../AppContext';
import { useNavigate } from 'react-router-dom';
import { useStateArticleBlogAppContext } from '../../../../UseStateArticleBlog';

const UpdateArticleBlog = () => {

    const { objArticleBlog } = useStateArticleBlogAppContext();


    const articlaBlog = objArticleBlog.getArticleBlog();
    const [title, setTitle] = useState("");
    const [contenu, setContenu] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);


    const MethodSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const articleData = {
            id: articlaBlog.id,
            title: title,
            contenu: contenu,
            date_publication: articlaBlog.date_publication
        }

        try {
            const res = await objArticleBlog.UpdateArticleBlog(articleData);
            setLoading(false);
            navigate("/articles_blog");
        } catch (error) {
            console.log(error);
            setErrors(error.response.data.errors);
            setLoading(false);
        }
    }
    const renderErrors = (field) => {
        return errors?.[field]?.map((error, index) => (
            <div key={index} className="alert alert-danger mt-2" role="alert">
                {error}
            </div>
        )
        );
    }

    return (

        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <Header />
            <SideBar />
            <div className="page-wrapper">

                <PageBreadcrumb location={"update article blog"} />
                <div className='container-fluid'>
                    <div className='row'>

                        <div className="col-lg-5 d-none d-lg-block bg-register-image mt-4">
                            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://th.bing.com/th/id/OIP.bPBCgvp9N0SUbVYJnBg2IQHaEo?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="p-5">

                                <form className="user" onSubmit={(e) => {
                                    MethodSubmit(e);
                                }}>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"

                                                placeholder={articlaBlog.title}
                                                onChange={(e) => {
                                                    setTitle(e.target.value);
                                                }}
                                            />
                                            {renderErrors("title")}
                                        </div>
                                        {/* <div className="col-sm-6">
                                            <label class="form-label" for="customFile">Selection des images de votre article blog</label>
                                            <input type="file" class="form-control" id="customFile" />
                                        </div> */}
                                    </div>
                                    <div className="form-group">
                                        {/* <div class="mb-3"> */}
                                        <label for="exampleFormControlTextarea1" className="form-label">contenu</label>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="6"
                                            onChange={(e) => {
                                                setContenu(e.target.value);
                                            }}
                                        >{articlaBlog.contenu}</textarea>
                                        {renderErrors("contenu")}
                                        {/* </div> */}
                                    </div>
                                    {/* <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleRepeatPassword" placeholder="Repeat Password" />
                                        </div>
                                    </div> */}
                                    {
                                        loading ?
                                            <div className="col-md-5 form-group text-center">
                                                <div className="spinner-border text-success" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                            :
                                            <div className="col-xs-12">
                                                <button type='submit' className="btn btn-primary btn-user btn-block">
                                                    Register la modification
                                                </button>

                                            </div>
                                    }


                                </form>
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

export default UpdateArticleBlog;
