import { useEffect } from 'react';
import './Testimonials.scss';
import { backWhatsapp, whatsappCustomer } from './testimonials-fn.js';
import Chats from './chat/Chats.js';
import type { ClientMessage } from '../../../../core/models/ITestimonials.js';

function Testimonials() {
  useEffect(() => {
    whatsappCustomer('bianchi', true);
  });

  function handleBackWhatsapp() {
    backWhatsapp();
  }

  const clientsMessage: Array<ClientMessage> = [
    {
      name: 'Etchegorry',
      image: '/img/testimonial/etchegorry.jpg',
      preMessage: 'Impecable !!!!...',
      hour: '14:09',
      cant: '5',
      messages: [
        {
          message: 'Impecable !!!!!!',
          hour: '14:09',
        },
        {
          message: 'Nuestros inversores contentos !!!!!!',
          hour: '14:09',
        },
        {
          message: '👏🏻👏🏻👏🏻👏🏻👏🏻',
          hour: '14:09',
        },
        {
          message: 'Cuando puedas pasamelo al formato horizontal para el canal',
          hour: '14:09',
        },
        {
          message: 'Muchas gracias',
          hour: '14:09',
        },
      ],
    },
  ];

  return (
    <>
      <section id="testimonials" className="testimonial spad bg-gray-2">
        <div className="vertical">
          EF<span className="dot-background">.</span>FILMS
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <span>Algunos mensajes de</span>
                <h2>Nuestros clientes</h2>
              </div>
            </div>
          </div>
          <div className="container-whatsapp">
            <div className="container-list-whatsapp">
              <div className="header-ws">
                <div className="container-img">
                  <img src="./img/testimonial/estfilms.png" alt="" />
                </div>
                <div className="icons">
                  <div> </div>
                  <div> </div>
                  <div> </div>
                </div>
              </div>

              {/*<div className="customer aurelia" onClick={() => {whatsappCustomer('aurelia', false)}}>
                                <div className="container-img">
                                    <img src="./img/testimonial/aurelia.jpg" alt="" />
                                </div>
                                <div className="user-message">
                                    <div className="left">
                                        <div>Aurelia</div>
                                        <div className="pre-message">Chicos queremos darle gracias...</div>
                                    </div>
                                    <div>
                                        <div className="hour-whatsapp">17:39</div>
                                        <div className="cont-whatsapp">2</div>
                                    </div>
                                </div>
                            </div>*/}
              <div
                className="customer bianchi"
                onClick={() => {
                  whatsappCustomer('bianchi', false);
                }}
              >
                <div className="container-img">
                  <img src="./img/testimonial/bianchi.jpg" alt="" />
                </div>
                <div className="user-message">
                  <div className="left">
                    <div>Bianchi Vende</div>
                    <div className="pre-message">Sin buscarlos encontré a los...</div>
                  </div>
                  <div>
                    <div className="hour-whatsapp">10:58</div>
                    <div className="cont-whatsapp">2</div>
                  </div>
                </div>
              </div>
              <div
                className="customer moire"
                onClick={() => {
                  whatsappCustomer('moire', false);
                }}
              >
                <div className="container-img moire">
                  <img src="./img/testimonial/moire.jpg" alt="" />
                </div>
                <div className="user-message">
                  <div className="left">
                    <div>Moirë Arquitectos</div>
                    <div className="pre-message">Queremos agradecerles por el increíble...</div>
                  </div>
                  <div>
                    <div className="hour-whatsapp">14:43</div>
                    <div className="cont-whatsapp">1</div>
                  </div>
                </div>
              </div>
              <div
                className="customer malov"
                onClick={() => {
                  whatsappCustomer('malov', false);
                }}
              >
                <div className="container-img">
                  <img src="./img/testimonial/malov.png" alt="" />
                </div>
                <div className="user-message">
                  <div className="left">
                    <div>Malov Arquitectura</div>
                    <div className="pre-message">👏🏻👏🏻👏🏻👏🏻👏🏻</div>
                  </div>
                  <div>
                    <div className="hour-whatsapp">14:43</div>
                    <div className="cont-whatsapp">2</div>
                  </div>
                </div>
              </div>
              <div
                className="customer soldeabril"
                onClick={() => {
                  whatsappCustomer('soldeabril', false);
                }}
              >
                <div className="container-img">
                  <img src="./img/testimonial/soldeabril.jpg" alt="" />
                </div>
                <div className="user-message">
                  <div className="left">
                    <div>Sol de Abril</div>
                    <div className="pre-message">El video es hermosooooooo...</div>
                  </div>
                  <div>
                    <div className="hour-whatsapp">19:12</div>
                    <div className="cont-whatsapp">3</div>
                  </div>
                </div>
              </div>

              {clientsMessage.map((client, index) => (
                <div
                  key={index}
                  className={`customer ${client.name}`}
                  onClick={() => {
                    whatsappCustomer(client.name, false);
                  }}
                >
                  <div className="container-img">
                    <img src={client.image} alt="" />
                  </div>
                  <div className="user-message">
                    <div className="left">
                      <div>{client.name}</div>
                      <div className="pre-message">{client.preMessage}</div>
                    </div>
                    <div>
                      <div className="hour-whatsapp">{client.hour}</div>
                      <div className="cont-whatsapp">{client.cant}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/*<div className="whatsapp aurelia" id="whatsapp-1">
                            <div className="whatsapp-chat">
                                <div className="whatsapp-chat-header">
                                    <div className="whatsapp-chat-header__back">
                                        <span onClick={() => {backWhatsapp()}}><i className="material-icons">&#xe5c4;</i></span>
                                        <img className="whatsapp-chat-header__back-photo" src="./img/testimonial/aurelia.jpg" alt="" />
                                    </div>

                                    <div className="whatsapp-chat-header__name">
                                        <p id="contactname">Aurelia</p>
                                        <p id="conection">en línea</p>

                                    </div>

                                    <div className="whatsapp-chat-header__calls">
                                        <ul className="whatsapp-chat-header__calls-items">
                                            <li><i className="material-icons">&#xe04b;</i></li>
                                            <li><i className="material-icons">&#xe0b0;</i></li>
                                            <li><i className="material-icons">&#xe5d4;</i></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="whatsapp-chat-messages">
                                    <div className="chats">
                                        <div className="whatsapp-chat-messages__protection">
                                            <i className="material-icons">&#xe63f;</i> Los mensajes y llamadas en este chat ahora están protegidos con cifrado de extremo a extremo. Toca para más información.
                                        </div> 

                                        <div className="whatsapp-chat-message whatsapp-chat-messages__receiver">
                                            Chicos queremos darle gracias porque desde el día uno se entusiasmaron al mismo nivel que nosotros (o sea, mucho) con la idea que teníamos, se pusieron la camiseta de Aurelia como si nos conocieran de toda la vida, y le dieron sus toques mágicos de creatividad y orden al relato de la historia que queríamos contar.

                                            <span className="whatsapp-chat-messages__datetime">
                                                17:39 <i className="material-icons checkmark">&#xe877;</i>
                                            </span>
                                        </div>

                                        <div className="whatsapp-chat-message whatsapp-chat-messages__receiver">
                                            El resultado fue mejor de lo que nosotros habíamos imaginado, y estamos seguros que eso es gracias a la pasión y el amor que le pusieron a cada toma que rodaron.

                                            <span className="whatsapp-chat-messages__datetime">
                                                17:39 <i className="material-icons checkmark">&#xe877;</i>
                                            </span>
                                        </div>

                                        <div className="whatsapp-chat-message whatsapp-chat-messages__sender">
                                            Gracias chicos, la verdad que fue un placer trabajar con ustedes!

                                            <span className="whatsapp-chat-messages__datetime">
                                                17:40
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                <div className="whatsapp-chat-send">
                                    <div className="whatsapp-chat-send__write">
                                        <span>
                                            <i className="material-icons">&#xe24e;</i>
                                        </span>
                                        <input type="text" placeholder="Escribir mensaje" />
                                        <ul>
                                            <li>
                                                <i className="material-icons rt">attach_file</i>
                                            </li>
                                            <li className="material-icons">camera_alt</li>
                                        </ul>
                                    </div>

                                    <div className="whatsapp-chat-send__record">
                                        <i className="material-icons">&#xe31d;</i>
                                    </div>
                                </div>
                            </div>
                        </div>*/}

            <div className="whatsapp bianchi" id="whatsapp-1">
              <div className="whatsapp-chat">
                <div className="whatsapp-chat-header">
                  <div className="whatsapp-chat-header__back">
                    <span
                      onClick={() => {
                        backWhatsapp();
                      }}
                    >
                      <i className="material-icons">&#xe5c4;</i>
                    </span>
                    <img
                      className="whatsapp-chat-header__back-photo"
                      src="./img/testimonial/bianchi.jpg"
                      alt=""
                    />
                  </div>

                  <div className="whatsapp-chat-header__name">
                    <p id="contactname">Bianchi</p>
                    <p id="conection">en línea</p>
                  </div>

                  <div className="whatsapp-chat-header__calls">
                    <ul className="whatsapp-chat-header__calls-items">
                      <li>
                        <i className="material-icons">&#xe04b;</i>
                      </li>
                      <li>
                        <i className="material-icons">&#xe0b0;</i>
                      </li>
                      <li>
                        <i className="material-icons">&#xe5d4;</i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="whatsapp-chat-messages">
                  <div className="chats">
                    <div className="whatsapp-chat-messages__protection">
                      <i className="material-icons">&#xe63f;</i> Los mensajes y llamadas en este
                      chat ahora están protegidos con cifrado de extremo a extremo. Toca para más
                      información.
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__receiver">
                      Sin buscarlos encontré a los mejores
                      <span className="whatsapp-chat-messages__datetime">
                        10:58 <i className="material-icons checkmark">&#xe877;</i>
                      </span>
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__sender">
                      ❤️❤️❤️
                      <span className="whatsapp-chat-messages__datetime">11:05</span>
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__receiver">
                      Y no son los mejores por sus trabajos que son excelentes. Sino por su humildad
                      y su predisposición a aprender y crecer. Gracias a los dos
                      <span className="whatsapp-chat-messages__datetime">
                        11:07 <i className="material-icons">&#xe876;</i>
                      </span>
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__sender">
                      Gracias Claudio, es un placer trabajar junto a vos!
                      <span className="whatsapp-chat-messages__datetime">11:10</span>
                    </div>
                  </div>
                </div>

                <div className="whatsapp-chat-send">
                  <div className="whatsapp-chat-send__write">
                    <span>
                      <i className="material-icons">&#xe24e;</i>
                    </span>
                    <input type="text" placeholder="Escribir mensaje" />
                    <ul>
                      <li>
                        <i className="material-icons rt">attach_file</i>
                      </li>
                      <li className="material-icons">camera_alt</li>
                    </ul>
                  </div>

                  <div className="whatsapp-chat-send__record">
                    <i className="material-icons">&#xe31d;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="whatsapp moire hide" id="whatsapp-3">
              <div className="whatsapp-chat">
                <div className="whatsapp-chat-header">
                  <div className="whatsapp-chat-header__back">
                    <span
                      onClick={() => {
                        backWhatsapp();
                      }}
                    >
                      <i className="material-icons">&#xe5c4;</i>
                    </span>
                    <img
                      className="whatsapp-chat-header__back-photo moire"
                      src="./img/testimonial/moire.jpg"
                      alt=""
                    />
                  </div>

                  <div className="whatsapp-chat-header__name">
                    <p id="contactname">Moirë</p>
                    <p id="conection">en línea</p>
                  </div>

                  <div className="whatsapp-chat-header__calls">
                    <ul className="whatsapp-chat-header__calls-items">
                      <li>
                        <i className="material-icons">&#xe04b;</i>
                      </li>
                      <li>
                        <i className="material-icons">&#xe0b0;</i>
                      </li>
                      <li>
                        <i className="material-icons">&#xe5d4;</i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="whatsapp-chat-messages">
                  <div className="chats">
                    <div className="whatsapp-chat-messages__protection">
                      <i className="material-icons">&#xe63f;</i> Los mensajes y llamadas en este
                      chat ahora están protegidos con cifrado de extremo a extremo. Toca para más
                      información.
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__receiver">
                      Queremos agradecerles por el increíble trabajo que hicieron, valoramos mucho
                      el profesionalismo con el que trabajaron desde el comienzo, siempre
                      proponiendo nuevas ideas y trabajando para generar el material que ha superado
                      nuestras expectativas. Nuevamente muchas gracias y seguiremos trabajando
                      juntos!
                      <span className="whatsapp-chat-messages__datetime">
                        16:02 <i className="material-icons checkmark">&#xe877;</i>
                      </span>
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__sender">
                      Un placer, gracias por la oportunidad!
                      <span className="whatsapp-chat-messages__datetime">16:15</span>
                    </div>
                  </div>
                </div>

                <div className="whatsapp-chat-send">
                  <div className="whatsapp-chat-send__write">
                    <span>
                      <i className="material-icons">&#xe24e;</i>
                    </span>
                    <input type="text" placeholder="Escribir mensaje" />
                    <ul>
                      <li>
                        <i className="material-icons rt">attach_file</i>
                      </li>
                      <li className="material-icons">camera_alt</li>
                    </ul>
                  </div>

                  <div className="whatsapp-chat-send__record">
                    <i className="material-icons">&#xe31d;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="whatsapp malov hide" id="whatsapp-4">
              <div className="whatsapp-chat">
                <div className="whatsapp-chat-header">
                  <div className="whatsapp-chat-header__back">
                    <span
                      onClick={() => {
                        backWhatsapp();
                      }}
                    >
                      <i className="material-icons">&#xe5c4;</i>
                    </span>
                    <img
                      className="whatsapp-chat-header__back-photo"
                      src="./img/testimonial/malov.png"
                      alt=""
                    />
                  </div>

                  <div className="whatsapp-chat-header__name">
                    <p id="contactname">Malov</p>
                    <p id="conection">en línea</p>
                  </div>

                  <div className="whatsapp-chat-header__calls">
                    <ul className="whatsapp-chat-header__calls-items">
                      <li>
                        <i className="material-icons">&#xe04b;</i>
                      </li>
                      <li>
                        <i className="material-icons">&#xe0b0;</i>
                      </li>
                      <li>
                        <i className="material-icons">&#xe5d4;</i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="whatsapp-chat-messages">
                  <div className="chats">
                    <div className="whatsapp-chat-messages__protection">
                      <i className="material-icons">&#xe63f;</i> Los mensajes y llamadas en este
                      chat ahora están protegidos con cifrado de extremo a extremo. Toca para más
                      información.
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__receiver">
                      👏🏻👏🏻👏🏻👏🏻👏🏻
                      <span className="whatsapp-chat-messages__datetime">
                        14:43 <i className="material-icons checkmark">&#xe877;</i>
                      </span>
                    </div>
                    <div className="whatsapp-chat-message whatsapp-chat-messages__receiver">
                      Son unos genios!!!!!
                      <span className="whatsapp-chat-messages__datetime">
                        14:43 <i className="material-icons checkmark">&#xe877;</i>
                      </span>
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__sender">
                      Gracias chicos!
                      <span className="whatsapp-chat-messages__datetime">14:52</span>
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__receiver">
                      Muchas gracias a ustedes por la buena onda y el profesionalismo!!!
                      <span className="whatsapp-chat-messages__datetime">
                        14:58 <i className="material-icons">&#xe876;</i>
                      </span>
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__sender">
                      Ya los llamaremos para cuando entreguemos la próxima obra!!
                      <span className="whatsapp-chat-messages__datetime">
                        11:39 <i className="material-icons">&#xe876;</i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="whatsapp-chat-send">
                  <div className="whatsapp-chat-send__write">
                    <span>
                      <i className="material-icons">&#xe24e;</i>
                    </span>
                    <input type="text" placeholder="Escribir mensaje" />
                    <ul>
                      <li>
                        <i className="material-icons rt">attach_file</i>
                      </li>
                      <li className="material-icons">camera_alt</li>
                    </ul>
                  </div>

                  <div className="whatsapp-chat-send__record">
                    <i className="material-icons">&#xe31d;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="whatsapp soldeabril hide" id="whatsapp-3">
              <div className="whatsapp-chat">
                <div className="whatsapp-chat-header">
                  <div className="whatsapp-chat-header__back">
                    <span
                      onClick={() => {
                        backWhatsapp();
                      }}
                    >
                      <i className="material-icons">&#xe5c4;</i>
                    </span>
                    <img
                      className="whatsapp-chat-header__back-photo"
                      src="./img/testimonial/soldeabril.jpg"
                      alt=""
                    />
                  </div>

                  <div className="whatsapp-chat-header__name">
                    <p id="contactname">Sol de Abril</p>
                    <p id="conection">en línea</p>
                  </div>

                  <div className="whatsapp-chat-header__calls">
                    <ul className="whatsapp-chat-header__calls-items">
                      <li>
                        <i className="material-icons">&#xe04b;</i>
                      </li>
                      <li>
                        <i className="material-icons">&#xe0b0;</i>
                      </li>
                      <li>
                        <i className="material-icons">&#xe5d4;</i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="whatsapp-chat-messages">
                  <div className="chats">
                    <div className="whatsapp-chat-messages__protection">
                      <i className="material-icons">&#xe63f;</i> Los mensajes y llamadas en este
                      chat ahora están protegidos con cifrado de extremo a extremo. Toca para más
                      información.
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__receiver">
                      El video es hermosooooooooo 😍😍😍😍
                      <span className="whatsapp-chat-messages__datetime">
                        19:12 <i className="material-icons checkmark">&#xe877;</i>
                      </span>
                    </div>
                    <div className="whatsapp-chat-message whatsapp-chat-messages__receiver">
                      NOS ENCANTO
                      <span className="whatsapp-chat-messages__datetime">
                        19:12 <i className="material-icons checkmark">&#xe877;</i>
                      </span>
                    </div>
                    <div className="whatsapp-chat-message whatsapp-chat-messages__receiver">
                      Son unos genios, quiero subir todo ya!!!!!
                      <span className="whatsapp-chat-messages__datetime">
                        19:13 <i className="material-icons checkmark">&#xe877;</i>
                      </span>
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__sender">
                      Nos alegra mucho que les haya gustado, gracias por elegirnos!
                      <span className="whatsapp-chat-messages__datetime">19:15</span>
                    </div>
                  </div>
                </div>

                <div className="whatsapp-chat-send">
                  <div className="whatsapp-chat-send__write">
                    <span>
                      <i className="material-icons">&#xe24e;</i>
                    </span>
                    <input type="text" placeholder="Escribir mensaje" />
                    <ul>
                      <li>
                        <i className="material-icons rt">attach_file</i>
                      </li>
                      <li className="material-icons">camera_alt</li>
                    </ul>
                  </div>

                  <div className="whatsapp-chat-send__record">
                    <i className="material-icons">&#xe31d;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="whatsapp beco hide" id="whatsapp-3">
              <div className="whatsapp-chat">
                <div className="whatsapp-chat-header">
                  <div className="whatsapp-chat-header__back">
                    <span
                      onClick={() => {
                        backWhatsapp();
                      }}
                    >
                      <i className="material-icons">&#xe5c4;</i>
                    </span>
                    <img
                      className="whatsapp-chat-header__back-photo"
                      src="./img/testimonial/beco.jpg"
                      alt=""
                    />
                  </div>

                  <div className="whatsapp-chat-header__name">
                    <p id="contactname">BECO</p>
                    <p id="conection">en línea</p>
                  </div>

                  <div className="whatsapp-chat-header__calls">
                    <ul className="whatsapp-chat-header__calls-items">
                      <li>
                        <i className="material-icons">&#xe04b;</i>
                      </li>
                      <li>
                        <i className="material-icons">&#xe0b0;</i>
                      </li>
                      <li>
                        <i className="material-icons">&#xe5d4;</i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="whatsapp-chat-messages">
                  <div className="chats">
                    <div className="whatsapp-chat-messages__protection">
                      <i className="material-icons">&#xe63f;</i> Los mensajes y llamadas en este
                      chat ahora están protegidos con cifrado de extremo a extremo. Toca para más
                      información.
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__receiver">
                      Chicos, impecable los videos!
                      <span className="whatsapp-chat-messages__datetime">
                        10:35 <i className="material-icons checkmark">&#xe877;</i>
                      </span>
                    </div>

                    <div className="whatsapp-chat-message whatsapp-chat-messages__sender">
                      Buenisimo, gracias por la oportunidad!
                      <span className="whatsapp-chat-messages__datetime">10:38</span>
                    </div>
                  </div>
                </div>

                <div className="whatsapp-chat-send">
                  <div className="whatsapp-chat-send__write">
                    <span>
                      <i className="material-icons">&#xe24e;</i>
                    </span>
                    <input type="text" placeholder="Escribir mensaje" />
                    <ul>
                      <li>
                        <i className="material-icons rt">attach_file</i>
                      </li>
                      <li className="material-icons">camera_alt</li>
                    </ul>
                  </div>

                  <div className="whatsapp-chat-send__record">
                    <i className="material-icons">&#xe31d;</i>
                  </div>
                </div>
              </div>
            </div>

            {clientsMessage.map((client: ClientMessage, index) => (
              <Chats key={index} client={client} onBackWhatsapp={handleBackWhatsapp} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
