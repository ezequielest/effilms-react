import './ServicesSlide.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useState } from 'react';
import YoutubeModal from '../../../../shared/components/youtube-modal/YoutubeModal';

export default function ServicesSlide() {
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const services = [
    {
      type: 'arq',
      name: 'Arquitectura',
      example: 'https://www.youtube.com/embed/c4BdDy8lVjc?si=YDF28O-R1uGOao8A',
    },
    {
      type: 'realestate',
      name: 'Real Estate',
      example: 'https://www.youtube.com/embed/UqVSL2XISdY?si=DZEyxjOgRcU5P29G',
    },
    {
      type: 'devs',
      name: 'Desarrollos',
      example: 'https://www.youtube.com/embed/cj5IrhTj8Xs?si=Or_d2TNP8rBJAHVS',
    },
    {
      type: 'inst',
      name: 'Institucionales',
      example: 'https://www.youtube.com/embed/WNKtXL7lc-o?si=ulgTv9riPMb063cz',
    },
  ];

  const handleOpenModal = (type: string) => {
    const service = services.find((s) => s.type === type);
    if (service) {
      setVideoUrl(service.example);
      setShowModal(true);
    }
  };

  return (
    <>
      <section className="project">
        <div className="container-fluid">
          {/**style={margin-right: 0, margin-left:0} */}
          <div className="row">
            <div className="project__slider owl-carousel">
              <Slider {...settings}>
                <div className="project__slider__item bg bg-1">
                  <p>01</p>
                  <div className="project__slider__item__hover">
                    <a
                      target="_blank"
                      onClick={(e) => {
                        e.preventDefault();
                        handleOpenModal('arq');
                      }}
                      className="btn primary-btn btn-center"
                    >
                      VER VIDEO
                    </a>
                    <span>ARQUITECTURA</span>
                    <h5>ARQUITECTURA</h5>
                  </div>
                </div>

                <div className="project__slider__item bg bg-2">
                  <p>02</p>
                  <div className="project__slider__item__hover">
                    <a
                      target="_blank"
                      onClick={(e) => {
                        e.preventDefault(); // opcional: si querés evitar comportamiento predeterminado
                        handleOpenModal('realestate');
                      }}
                      className="btn primary-btn btn-center"
                    >
                      VER VIDEO
                    </a>
                    <span>REAL ESTATE</span>
                    <h5>REAL ESTATE</h5>
                  </div>
                </div>

                <div className="project__slider__item bg bg-3">
                  <p>03</p>
                  <div className="project__slider__item__hover">
                    <a
                      target="_blank"
                      onClick={(e) => {
                        e.preventDefault(); // opcional: si querés evitar comportamiento predeterminado
                        handleOpenModal('devs');
                      }}
                      className="btn primary-btn btn-center"
                    >
                      VER VIDEO
                    </a>
                    <span>DESARROLLOS</span>
                    <h5>DESARROLLOS</h5>
                  </div>
                </div>

                <div className="project__slider__item bg bg-4">
                  <p>04</p>
                  <div className="project__slider__item__hover">
                    <a target="_blank" href="/alojamientos" className="btn primary-btn btn-center">
                      CONOCER
                    </a>
                    <span>ALOJAMIENTOS</span>
                    <h5>ALOJAMIENTOS</h5>
                  </div>
                </div>

                <div className="project__slider__item bg bg-5">
                  <p>05</p>
                  <div className="project__slider__item__hover">
                    <a
                      target="_blank"
                      onClick={(e) => {
                        e.preventDefault(); // opcional: si querés evitar comportamiento predeterminado
                        handleOpenModal('inst');
                      }}
                      className="btn primary-btn btn-center"
                    >
                      VER VIDEO
                    </a>
                    <span>INSTITUCIONAL</span>
                    <h5>INSTITUCIONAL</h5>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <YoutubeModal show={showModal} onHide={() => setShowModal(false)} videoUrl={videoUrl} />
    </>
  );
}

/**

           { 
           //style={margin-right: 0, margin-left:0}}
            <div className="row">
                <div className="project__slider owl-carousel">
                    <div className="col-lg-3">
                        <div className="project__slider__item bg bg-1">
                            <p>01</p>
                            <div className="project__slider__item__hover">
                                <a target="_blank" onClick={(e) => {
    e.preventDefault(); // opcional: si querés evitar comportamiento predeterminado
    seeExample('arq');
  }} className="btn primary-btn btn-center">VER VIDEO</a>
                                <span>ARQUITECTURA</span>
                                <h5>ARQUITECTURA</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="project__slider__item bg bg-2">
                            <p>02</p>
                            <div className="project__slider__item__hover">
                                <a target="_blank" onClick={(e) => {
    e.preventDefault(); // opcional: si querés evitar comportamiento predeterminado
    seeExample('realestate');
  }}className="btn primary-btn btn-center">VER VIDEO</a>
                                <span>REAL ESTATE</span>
                                <h5>REAL ESTATE</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="project__slider__item bg bg-3">
                            <p>03</p>
                            <div className="project__slider__item__hover">
                                <a target="_blank" onClick={(e) => {
    e.preventDefault(); // opcional: si querés evitar comportamiento predeterminado
    seeExample('devs');
  }}  className="btn primary-btn btn-center">VER VIDEO</a>
                                <span>DESARROLLOS</span>
                                <h5>DESARROLLOS</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="project__slider__item bg bg-4">
                            <p>04</p>
                            <div className="project__slider__item__hover">
                                <a target="_blank" href="/alojamientos" className="btn primary-btn btn-center">CONOCER</a>
                                <span>ALOJAMIENTOS</span>
                                <h5>ALOJAMIENTOS</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="project__slider__item bg bg-5">
                            <p>05</p>
                            <div className="project__slider__item__hover">
                                <a target="_blank" onClick={(e) => {
    e.preventDefault(); // opcional: si querés evitar comportamiento predeterminado
    seeExample('inst');
  }}  className="btn primary-btn btn-center">VER VIDEO</a>
                                <span>INSTITUCIONAL</span>
                                <h5>INSTITUCIONAL</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

*/
