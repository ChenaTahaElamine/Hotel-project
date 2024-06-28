import React, { useState } from 'react';
import Logo from './Logo';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import AuthUser from '../../FicherDeConnection/AuthUser';
import { Fade, Flip } from 'react-reveal';



const Header = ({ Lieu }) => {
    const { getToken, http, logout, setToken, getUser } = AuthUser();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const user = getUser();


    const onClickFormLogin = async () => {

        const { value: email } = await Swal.fire({
            title: "Input email address",
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "Enter your email address"
        });



        const { value: password } = await Swal.fire({
            title: "Enter your password",
            input: "password",
            inputLabel: "Password",
            inputPlaceholder: "Enter your password",
            inputAttributes: {
                maxlength: "10",
                autocapitalize: "off",
                autocorrect: "off"
            }
        });


        if (email && password) {
            setLoading(true);
            await http.post("/user/login", { email: email, password: password })
                .then((res) => {
                    setToken(res.data.user, res.data.token);
                    setLoading(false);
                    navigate("/");
                })
                .catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error.response.data.message,
                        // footer: '<a href="#">Why do I have this issue?</a>'
                    });
                    setLoading(false);

                });
        }



    }

    const onClickLogout = async () => {


        Swal.fire({
            title: "Êtes-vous sûr ",
            text: "Êtes-vous sûr de vous déconnecter?",
            icon: "avertissement",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, déconnectez-vous"
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true);
                await http.get("/user/logoutUser", {

                    headers: {
                        'Content-Type': 'application/json',
                        "Accept": "application/json",
                        'Authorization': `Bearer ${getToken()}`,
                    },

                })
                    .then((res) => {
                        logout();
                        setLoading(false);
                        navigate("/");

                    })
                    .catch((error) => {
                        console.log(error);
                        setLoading(false);
                    });
                Swal.fire({
                    title: "déconnecter",
                    text: "Vous avez été déconnecté avec succès .",
                    icon: "succès"
                });
            }
        });

    }

    const choisissezEmplacementActif = (lieu) => {

        if (lieu === "Index") {
            return (
                <ul className="nav">

                    <li><Link to="/" className="active">Index</Link></li>
                    <li><Link to="/ResteurantPage">Resteurant</Link></li>
                    <li><Link to="/ChambresPage">Chambres</Link></li>

                    <Flip left>
                        {
                            getToken() == undefined ? (<>
                                {
                                    loading === true ? (
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    ) : (
                                        <li>
                                            <Link onClick={() => {
                                                onClickFormLogin();
                                            }}><i className="fa fa-sign-in"></i> Login</Link>
                                        </li>
                                    )
                                }
                            </>) : (<>

                                {
                                    loading === true ? (
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    ) : (
                                        <li><Link onClick={onClickLogout}><i className="fa fa-sign-in"></i> logout </Link></li>
                                    )
                                }



                            </>)
                        }
                    </Flip>



                </ul>
            );
        } else if (lieu === "Resteurant") {
            return (
                <ul className="nav">
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/ResteurantPage" className="active">Resteurant</Link></li>
                    <li><Link to="/ChambresPage">Chambres</Link></li>
                    <Flip left>
                        {
                            getToken() == undefined ? (<>
                                {
                                    loading === true ? (
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    ) : (
                                        <li>
                                            <Link onClick={() => {
                                                onClickFormLogin();
                                            }}><i className="fa fa-sign-in"></i> Login</Link>
                                        </li>
                                    )
                                }
                            </>) : (<>
                                <li><Link onClick={onClickLogout}><i className="fa fa-sign-in"></i> logout </Link></li>
                            </>)
                        }
                    </Flip>
                </ul>
            );

        } else if (lieu === "Chambres") {
            return (
                <ul className="nav">
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/ResteurantPage">Resteurant</Link></li>
                    <li><Link to="/ChambresPage" className="active">Chambres</Link></li>
                    <Flip left>
                        {
                            getToken() == undefined ? (<>
                                {
                                    loading === true ? (
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    ) : (
                                        <li>
                                            <Link onClick={() => {
                                                onClickFormLogin();
                                            }}><i className="fa fa-sign-in"></i> Login</Link>
                                        </li>
                                    )
                                }
                            </>) : (<>
                                <li><Link onClick={onClickLogout}><i className="fa fa-sign-in"></i> logout </Link></li>
                            </>)
                        }
                    </Flip>
                </ul>
            );

        } else if (lieu === "LoginPage") {
            return (
                <ul className="nav">
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/ResteurantPage">Resteurant</Link></li>
                    <li><Link to="/ChambresPage">Chambres</Link></li>

                    <Flip left>
                        {
                            getToken() == undefined ? (<>
                                {
                                    loading === true ? (
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    ) : (
                                        <li>
                                            <Link onClick={() => {
                                                onClickFormLogin();
                                            }}><i className="fa fa-sign-in"></i> Login</Link>
                                        </li>
                                    )
                                }
                            </>) : (<>
                                <li><Link onClick={onClickLogout}><i className="fa fa-sign-in"></i> logout </Link></li>
                            </>)
                        }
                    </Flip>
                </ul>
            );

        }
        else if (lieu === "PropertyDetails") {
            <ul className="nav">
                <li><Link to="/">Index</Link></li>
                <li><Link to="/ResteurantPage">Resteurant</Link></li>
                <li><Link to="/ChambresPage">Chambres</Link></li>
                <Flip left>
                    {
                        getToken() == undefined ? (<>
                            {
                                loading === true ? (
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                ) : (
                                    <li>
                                        <Link onClick={() => {
                                            onClickFormLogin();
                                        }}><i className="fa fa-sign-in"></i> Login</Link>
                                    </li>
                                )
                            }
                        </>) : (<>
                            <li><Link onClick={onClickLogout}><i className="fa fa-sign-in"></i> logout </Link></li>
                        </>)
                    }
                </Flip>
            </ul>
        } else { }
    }


    return (
        <>
            <div className="sub-header">
                <div className="container">
                    <div className="row">
                        <Fade left>
                            <div className="col-lg-8 col-md-8">
                                <ul className="info">
                                    <li><i className="fa fa-envelope"></i> info@company.com</li>
                                    <li><i className="fa fa-map"></i> Sunny Isles Beach, FL 33160</li>
                                </ul>
                            </div>
                        </Fade>
                        <div className="col-lg-4 col-md-4">
                            <Fade right>
                                <ul className="">
                                    {
                                        getToken() == undefined ? (<>
                                            <li><Link to="/RegisterUser">Ajouter un compte</Link></li>
                                        </>) : (<>
                                            <li>{`Bienvenue ${user.name}`}</li>
                                        </>)
                                    }

                                </ul>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>

            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <Logo />
                                {choisissezEmplacementActif(Lieu)}
                                <a className='menu-trigger' >
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
