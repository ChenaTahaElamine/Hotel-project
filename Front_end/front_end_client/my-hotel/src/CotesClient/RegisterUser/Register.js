import React, { useState } from 'react';
import Header from '../ComposantsPrincipaux/Header';
import Footer from '../ComposantsPrincipaux/Footer';
import Swal from 'sweetalert2';
import RegisterUser from '../../FicherDeConnection/RegisterUser';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [loading, setLoading] = useState(false);
    const { RegisterUserAccont } = RegisterUser();
    const navigate = useNavigate();

    const HandelOnsubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (email && password && name) {
            await RegisterUserAccont(name, email, password);
            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/");

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Veuillez remplir tous les champs de données"
            });
            setLoading(false);
        }
    }
    return (
        <>
            <Header Lieu="Index" />


            <section className="vh-100">
                <br />
                <br />
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ "border-radius": "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Ajouter un compte</p>

                                            <form className="mx-1 mx-md-4" onSubmit={HandelOnsubmit}>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            className="form-control"
                                                            onChange={(e) => {
                                                                setName(e.target.value);
                                                            }}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example1c">Entrez votre nom</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            className="form-control"
                                                            onChange={(e) => {
                                                                setEmail(e.target.value);
                                                            }}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example3c">Entrez votre email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            className="form-control"
                                                            onChange={(e) => {
                                                                setPassword(e.target.value);
                                                            }}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example4c">Votre mot de passe</label>
                                                    </div>
                                                </div>


                                                {
                                                    loading === true ? (
                                                        <div class="spinner-border text-success" role="status">
                                                            <span class="sr-only">Loading...</span>
                                                        </div>
                                                    ) : (
                                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                            <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                                        </div>
                                                    )
                                                }


                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </section>

            <br />
            <br />
            <br />

            <Footer />
        </>
    );
}

export default Register;
