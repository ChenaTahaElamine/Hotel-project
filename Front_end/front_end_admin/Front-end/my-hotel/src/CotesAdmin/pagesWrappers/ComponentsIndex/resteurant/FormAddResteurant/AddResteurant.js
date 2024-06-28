import React, { useState } from 'react';
import Header from '../../../../header/Header';
import SideBar from '../../../../sideBar/SideBar';
import PageBreadcrumb from '../../../PageBreadcrumb';
import { useStateRestaurantAppContext } from '../../../../UseStateRestaurant';
import { useNavigate } from 'react-router-dom';
// import { useAppContext } from '../../../../AppContext';
// import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { useStateArticleBlogAppContext } from '../../../../UseStateArticleBlog';


const AddResteurant = () => {
    const { objRestaurantTable } = useStateRestaurantAppContext();
 

    const [nomParam, setNomParam] = useState("");
    const [descriptionParam, setDescriptionParam] = useState("");
    const [menuParam, setMenuParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    const submitMethod = async (e) => {
        setLoading(true);
        e.preventDefault();
        const resteurantData = {
            nom: nomParam,
            description: descriptionParam,
            menu: menuParam,
        }

        try {
            const res = await objRestaurantTable.storeRestaurant(resteurantData);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${nomParam} a été enregistré avec succès `,
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false);
            navigate("/resteurant");
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

                <PageBreadcrumb location={"add resteurant"} />
                <div className='container-fluid'>
                    <div className='row'>
                        <h1>Add resteurant</h1>
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
                                    <label for="" className="col-form-label">nom</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="titre" id="titre"
                                        placeholder="Your titre"
                                        value={nomParam}
                                        onChange={(e) => {
                                            setNomParam(e.target.value);
                                        }}
                                    />
                                    {renderErrors("nom")}
                                </div>
                                <div className="col-md-6 form-group mb-3"></div>
                            </div>
                            {/* */}
                            <div className="row mb-5">
                                <div className="col-md-12 form-group mb-3">
                                    <label for="message" className="col-form-label">menu </label>
                                    <textarea
                                        className="form-control"
                                        name="menu"
                                        id="menu"
                                        cols="30"
                                        rows="4"
                                        placeholder="Write your menu"
                                        value={menuParam}
                                        onChange={(e) => {
                                            setMenuParam(e.target.value);
                                        }}
                                    ></textarea>
                                    {renderErrors("menu")}
                                </div>
                            </div>
                            {/* */}
                            <div className="row mb-5">
                                <div className="col-md-12 form-group mb-3">
                                    <label for="message" className="col-form-label">description </label>
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        id="description"
                                        cols="30"
                                        rows="4"
                                        placeholder="Write your description"
                                        value={descriptionParam}
                                        onChange={(e) => {
                                            setDescriptionParam(e.target.value);
                                        }}
                                    ></textarea>
                                    {renderErrors("description")}
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

export default AddResteurant;
