import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Team.scss';

export const Team: React.FC = () => {
  return (
    <>
        <section className="team spad bg-gray-3" id="equipo">
        <div className="container">
            <div className="row">
                <div className="col-lg-9 col-md-8 col-sm-6">
                    <div className="section-title">
                        <span>Nuestro equipo</span>
                        <h2>Te presentamos a nuestra familia</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="team__item set-bg eze">
                        <div className="team__text">
                            <div className="team__title">
                                <h5>Ezequiel Estigarribia</h5>
                                <span>CO FUNDADOR</span>
                            </div>
                            <p>Fundador Y líder audiovisual del equipo.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team__item set-bg debo">
                        <div className="team__text">
                            <div className="team__title">
                                <h5>Débora Frojan</h5>
                                <span>CO FUNDADORA</span>
                            </div>
                            <p>Fundadora y administradora.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team__item set-bg benja">
                        <div className="team__text">
                            <div className="team__title">
                                <h5>Benjamin Gaggino</h5>
                                <span>EDITOR LIDER Y FX</span>
                            </div>
                            <p>Líder del equipo de edición. Experto 3D y efectos visuales.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team__item set-bg emma">
                        <div className="team__text">
                            <div className="team__title">
                                <h5>Emmanuel Badía</h5>
                                <span>EDITOR</span>
                            </div>
                            <p>Realizador y editor de fotografía.</p>
                       {/*div className="team__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.instagram.com/effilms.com.ar" target="_blank"><i className="fa fa-instagram"></i></a>
                            </div>*/}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    {/**style="background-position-x: 0px;" */}
                    <div className="team__item set-bg martu"  data-setbg="img/team/martu.png">
                        <div className="team__text">
                            <div className="team__title">
                                <h5>Martina Plaza</h5>
                                <span>Editora y MKT</span>
                            </div>
                            <p>Realizadora, editora y generadora de contenido.</p>
                         {/*div className="team__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.instagram.com/effilms.com.ar" target="_blank"><i className="fa fa-instagram"></i></a>
                            </div>*/}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team__item set-bg anonimus">
                        <div className="team__text">
                            <div className="team__title">
                                <h5>Acá podrías estar vos!</h5>
                                <span>Tu rol favorito</span>
                            </div>
                            <p>Si queres ser parte, completa este formulario</p>
                            <div className="team__social">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd05Iba1UM9gKgqSIzdq_DlBEGuiCvPXuj6ZY_0OXzs1ISqzg/viewform?usp=publish-editor" target="_blank"><FontAwesomeIcon icon={faArrowRight} /> FORMULARIO</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};


  export default Team;