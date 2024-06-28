import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../AppContext';

function PageLogin(props) {
    const { objAuthUser } = useAppContext();
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const objTokenAndAdmin = await objAuthUser.loginMethode(userName, password);
            objAuthUser.setToken(objTokenAndAdmin["token"]);
            objAuthUser.setUser(objTokenAndAdmin["admin"]);

            sessionStorage.setItem("token", JSON.stringify(objTokenAndAdmin["token"]));
            sessionStorage.setItem("admin", JSON.stringify(objTokenAndAdmin["admin"]));

            setLoading(false);
            navigate("/");

        } catch (error) {
            navigate("/loginAdmin");
        }

    };

    return (

        <div className="main-wrapper">

            <div
                className="auth-wrapper
                        d-flex
                        no-block
                        justify-content-center
                        align-items-center
                        "
                style={{
                    "background": " url('../../assets/images/background/login-register.jpg') no-repeat center center",
                    "background-size": "cover"
                }}
            >
                <div className="auth-box p-4 bg-white rounded">
                    {/* form de login */}

                    <div id="loginform">
                        <div className="logo">
                            <h3 className="box-title mb-3">Sign In</h3>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <form
                                    className="form-horizontal mt-3 form-material"
                                    id="loginform"
                                    onSubmit={handleSubmit}
                                    method="post"
                                >
                                    <div className="form-group mb-3">
                                        <div className="">
                                            <input
                                                className="form-control"
                                                type="text"
                                                required=""
                                                placeholder="Username"
                                                name='user_name'
                                                value={userName}
                                                onChange={handleChangeUserName}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <div className="">
                                            <input
                                                className="form-control"
                                                type="password"
                                                required=""
                                                placeholder="Password"
                                                name='password'
                                                value={password}
                                                onChange={handleChangePassword}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="d-flex">

                                        </div>
                                    </div>
                                    <div className="form-group text-center mt-4 mb-3">
                                        {
                                            loading ?
                                                <div className="col-md-5 form-group text-center">
                                                    <div className="spinner-border text-success" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                                :
                                                <div className="col-xs-12">
                                                    <button
                                                        className="
                                                        btn btn-info
                                                        d-block
                                                        w-100
                                                        waves-effect waves-light
                                                        "
                                                        type="submit"
                                                    >
                                                        Log In
                                                    </button>

                                                </div>
                                        }

                                    </div>
                                    <div className="row">

                                    </div>
                                    <div className="form-group mb-0 mt-4">
                                        <div className="col-sm-12 justify-content-center d-flex">

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* form de recover password*/}
                    <div id="recoverform">
                        <div className="logo">
                            <h3 className="font-weight-medium mb-3">Recover Password</h3>
                            <span className="text-muted"
                            >Enter your Email and instructions will be sent to you!</span
                            >
                        </div>
                        <div className="row mt-3 form-material">
                            <form className="col-12" action="index.html">
                                <div className="form-group row">
                                    <div className="col-12">
                                        <input
                                            className="form-control"
                                            type="email"
                                            required=""
                                            placeholder="Username"
                                        />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-12">
                                        <button
                                            className="btn d-block w-100 btn-primary text-uppercase"
                                            type="submit"
                                            name="action"
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div >


    );
}

export default PageLogin;