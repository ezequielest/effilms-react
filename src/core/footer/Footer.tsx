import React from 'react';
import './Footer.scss';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { QRCodeSVG } from 'qrcode.react';
    
    export const Footer: React.FC = () => {

        return (
      <>
    <footer className="footer set-bg footer-bg">
        <div className="overlay"></div>
        <div className="container data">
            {/*<div className="footer__top">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="footer__top__text">
                            <h2>¿Querés trabajar con nosotros?</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer__top__newslatter">
                            <form action="#">
                                <input type="text" placeholder="Ingresa tu email">
                                <button type="submit"><i className="fa fa-send"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>*/}
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__logo">
                            <a className='bebas' href="http://effilms.com.ar">EF FILMS</a>
                        </div>
                        <p>Mar del Plata, 7600</p>
                        <ul>
                            <li>hello@effilms.com.ar</li>
                            <li><a className="text-primary" href="https://wa.me/5492236688588" target="_blank">+54 9 2236 68 8588</a></li>
                            <li><QRCodeSVG className='code-qr' value="https://effilms.com.ar/contacto" size={168} /></li>
                        </ul>
                        <div className="footer__social">
                            
                            <a href="https://api.whatsapp.com/send?phone=542236688588&text=Hola, me gustaría hacer contacto con ustedes." target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
                            <a href="https://www.instagram.com/effilms.com.ar/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.facebook.com/effilmscomar-113490327151297" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://www.youtube.com/channel/UCJcK7K_8LmDJ68tQeh776Wg" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                </div>
            </div>
            <div className="copyright">
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                        <div className="copyright__text">
                            <p>Copyright © <script>
                                document.write(new Date().getFullYear());
                            </script> | Todos los derechos reservados
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
        </>
      );
    };
    
    
export default Footer;
