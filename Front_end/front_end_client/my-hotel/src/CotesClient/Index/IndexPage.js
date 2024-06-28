import React from 'react';
import Header from '../ComposantsPrincipaux/Header';
import Footer from '../ComposantsPrincipaux/Footer';
import { Link } from 'react-router-dom';
import { Fade, Flip } from 'react-reveal';



const IndexPage = () => {

    return (
        <>
            <Header Lieu="Index" />
            <div className="featured section">
                <div className="container">
                    <div className="row">
                        <Fade left>
                            <div className="col-lg-4">
                                <div className="left-image">
                                    <img src="assets/images/featured.jpg" alt="" />
                                    <Link to="/">
                                        <img src="assets/images/featured-icon.png" alt=""
                                            style={{ "maxWidth": "60px", "padding": "0px" }} />
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                        <Flip left>
                            <div className="col-lg-5">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                                Constantine
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Constantine est l'une des villes<strong> les plus importantes de l’Est algérien .</strong>
                                                Elle occupe une position géographique centrale dans cette région,
                                                étant une ville charnière entre le Tell et les Hautes Plaines,
                                                au croisement des grands axes nord-sud (Skikda-Biskra) et ouest-est (Sétif-Annaba)4.<a href="https://fr.wikipedia.org/wiki/Constantine_(Alg%C3%A9rie)"
                                                    target="_blank">pour plus des details</a> </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                My Hotel
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Bienvenue à  <strong>My hotel</strong>,  l'épicentre du luxe et du raffinement,
                                                où chaque instant est une célébration de l'élégance et du confort.
                                                notre hôtel se dresse fièrement comme une oasis de tranquillité au cœur de l'effervescence de la ville.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Pourquoi My Hotel est votre meilleur choix ?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Bienvenue sur le site de <strong>My Hotel</strong> où l'élégance rencontre le confort.
                                                Explorez nos chambres luxueuses et découvrez une cuisine d'exception dans notre restaurant gastronomique.
                                                Organisez des événements inoubliables dans nos espaces polyvalents et détendez-vous dans notre spa.
                                                Profitez de services personnalisés avec notre conciergerie dédiée,
                                                connectez-vous avec un Wi-Fi haut débit, et découvrez notre engagement envers la durabilité.
                                                Découvrez nos offres spéciales et devenez membre pour des avantages exclusifs.
                                                Réservez dès maintenant pour une expérience hôtelière exceptionnelle.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                        <Fade right>
                            <div className="col-lg-3">
                                <div className="info-table">
                                    <ul>
                                        <li>
                                            <img src="assets/images/info-icon-01.png" alt="" style={{ "maxWidth": "52px" }} />
                                            <h4>250 m2<br /><span>Total Flat Space</span></h4>
                                        </li>
                                        <li>
                                            <img src="assets/images/info-icon-02.png" alt="" style={{ "maxWidth": "52px" }} />
                                            <h4>Contract<br /><span>Contract Ready</span></h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

            <div className="video section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center">
                                <h6>| Video View</h6>
                                <h2>Obtenez une vue plus rapprochée & des sensations différentes</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Fade left>
                <div className="video-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="video-frame">
                                    <img src="assets/images/video-frame.jpg" alt="" />
                                    <a href="https://www.youtube.com/watch?v=4K6Sh1tsAW4" target="_blank"><i className="fa fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            <div className="fun-facts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wrapper">
                                <div className="row">
                                    <Flip left>
                                        <div className="col-lg-4">
                                            <div className="counter">
                                                <h2 className="timer count-title count-number" data-to="34" data-speed="1000">34</h2>
                                                <p className="count-text ">Buildings<br />Finished Now</p>
                                            </div>
                                        </div>
                                    </Flip>
                                    <Flip left>
                                        <div className="col-lg-4">
                                            <div className="counter">
                                                <h2 className="timer count-title count-number" data-to="12" data-speed="1000">12</h2>
                                                <p className="count-text ">Years<br />Experience</p>
                                            </div>
                                        </div>
                                    </Flip>
                                    <Flip left>
                                        <div className="col-lg-4">
                                            <div className="counter">
                                                <h2 className="timer count-title count-number" data-to="24" data-speed="1000">24</h2>
                                                <p className="count-text ">Awwards<br />Won 2023</p>
                                            </div>
                                        </div>
                                    </Flip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center">
                                <h6>| CONTACTEZ-NOUS</h6>
                                <h2>Entrez en contact avec nos agents</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <Fade left>
                                <div id="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
                                        width="100%" height="500px" frameBorder="0"
                                        style={{ "border": "0", "maxWidth": "1000px", "boxShadow": "0px 0px 15px rgba(0, 0, 0, 0.15)" }}
                                        allowFullScreen=""></iframe>
                                </div>
                            </Fade>
                            <div className="row">
                                <Fade left>
                                    <div className="col-lg-6">
                                        <div className="item phone">
                                            <img src="assets/images/phone-icon.png" alt="" style={{ "maxWidth": "52px" }} />

                                            <h6>010-020-0340<br /><span>Phone Number</span></h6>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade left>
                                    <div className="col-lg-6">
                                        <div className="item email">
                                            <img src="assets/images/email-icon.png" alt="" style={{ "maxWidth": "52px" }} />
                                            <h6>info@villa.co<br /><span>Business Email</span></h6>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <Fade right>
                            <div className="col-lg-5">
                                <form id="contact-form" action="" method="post">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <label htmlFor="name">Full Name</label>
                                                <input type="name" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <label htmlFor="email">Email Address</label>
                                                <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..."
                                                    required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <label htmlFor="subject">Subject</label>
                                                <input type="subject" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <label htmlFor="message">Message</label>
                                                <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="orange-button">Send Message</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
}

export default IndexPage;
