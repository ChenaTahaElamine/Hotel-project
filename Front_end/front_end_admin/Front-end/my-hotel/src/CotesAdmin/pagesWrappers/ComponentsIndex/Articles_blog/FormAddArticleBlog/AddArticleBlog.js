import React, { useState } from 'react';
import Header from '../../../../header/Header';
import SideBar from '../../../../sideBar/SideBar';
import PageBreadcrumb from '../../../PageBreadcrumb';
import { useAppContext } from '../../../../AppContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useStateArticleBlogAppContext } from '../../../../UseStateArticleBlog';


const AddArticleBlog = () => {
    
    const { objArticleBlog } = useStateArticleBlogAppContext();

    const [titre, setTitre] = useState("");
    const [contenu, setContenu] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    const submitMethod = async (e) => {
        setLoading(true);
        e.preventDefault();
        const articleData = {
            title: titre,
            contenu: contenu,
            date_publication: new Date().toISOString().slice(0, 10)
        }

        try {
            const res = await objArticleBlog.storeArticleBlog(articleData);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${titre} a été enregistré avec succès `,
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false);
            navigate("/articles_blog");
        } catch (error) {
            setLoading(false);
            console.log(error);
            setErrors(error.response.data.errors);

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

                <PageBreadcrumb location={"add article blog"} />
                <div className='container-fluid'>
                    <div className='row'>
                        <h1>Add article blog</h1>
                    </div>
                    <div className="form h-100 contact-wrap p-5">

                        <form
                            className="mb-5"
                            id="contactForm"
                            name="contactForm"
                            onSubmit={(e) => {
                                submitMethod(e);
                            }}
                        >
                            <div className="row">
                                <div className="col-md-6 form-group mb-3">
                                    <label for="" className="col-form-label">titre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="titre" id="titre"
                                        placeholder="Your titre"
                                        value={titre}
                                        onChange={(e) => {
                                            setTitre(e.target.value);
                                        }}
                                    />
                                    {renderErrors("title")}
                                </div>
                                <div className="col-md-6 form-group mb-3">

                                </div>
                            </div>

                            {/* <div className="row">
                                <div className="col-md-12 form-group mb-3">
                                    <label for="budget" className="col-form-label">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Your subject" />
                                </div>
                            </div> */}

                            <div className="row mb-5">
                                <div className="col-md-12 form-group mb-3">
                                    <label for="message" className="col-form-label">contenu </label>
                                    <textarea
                                        className="form-control"
                                        name="contenu"
                                        id="contenu"
                                        cols="30"
                                        rows="4"
                                        placeholder="Write your contenu"
                                        value={contenu}
                                        onChange={(e) => {
                                            setContenu(e.target.value);
                                        }}
                                    ></textarea>
                                    {renderErrors("contenu")}
                                </div>
                            </div>
                            <div className="row justify-content-center">

                                {
                                    loading ?
                                        <div className="col-md-5 form-group text-center">
                                            <div className="spinner-border text-success" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                        :
                                        <div className="col-md-5 form-group text-center">
                                            <input type="submit" value="Send Message" className="btn btn-block btn-primary rounded-0 py-2 px-4" />
                                            <span className="submitting"></span>
                                        </div>
                                }


                                <div className="col-md-5 form-group text-center">

                                </div>
                            </div>
                        </form>

                        {/* <div id="form-message-warning mt-4"></div>
                        <div id="form-message-success">
                            Your message was sent, thank you!
                        </div> */}


                    </div>
                </div>
                <footer className="footer"> © 2021 Material Pro Admin by <a href="https://www.wrappixel.com/">wrappixel.com </a>
                </footer>
            </div>
        </div>
    );
}

export default AddArticleBlog;
