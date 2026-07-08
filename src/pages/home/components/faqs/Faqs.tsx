import React from 'react';
import './Faqs.scss';

export const Faqs: React.FC = () => {
  return (
    <>
      <section className="spad bg-gray-4" id="faqs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>PREGUNTAS FRECUENTES</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="section-title">
                <span>Servicios</span>
              </div>
              <div className="accordion" id="accordionExample1">
                <div className="card">
                  <div className="card-header" id="headingOne1">
                    <h2 className="mb-0">
                      <button
                        className="btn btn box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne1"
                        aria-expanded="true"
                        aria-controls="collapseOne1"
                      >
                        ¿Qué servicios ofrece EF Films?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne1"
                    className="collapse"
                    aria-labelledby="headingOne1"
                    data-parent="#accordionExample1"
                  >
                    <div className="card-body">
                      Contamos con una amplia variedad de opciones, podes conocer más haciendo{' '}
                      <a target="_blank" href="/valores-inmobiliaria">
                        click aquí
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingOne2">
                    <h2 className="mb-0">
                      <button
                        className="btn btn collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne2"
                        aria-expanded="false"
                        aria-controls="collapseOne2"
                      >
                        ¿Trabajan con sectores específicos?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne2"
                    className="collapse"
                    aria-labelledby="headingTwo1"
                    data-parent="#accordionExample1"
                  >
                    <div className="card-body">
                      Sí, EF Films se especializa en arquitectura, bienes raíces, alojamientos y
                      construcción.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingOne3">
                    <h2 className="mb-0">
                      <button
                        className="btn btn collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne3"
                        aria-expanded="false"
                        aria-controls="collapseOne3"
                      >
                        ¿Cual es la diferencia entre HD Y 4K?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne3"
                    className="collapse"
                    aria-labelledby="headingTwo3"
                    data-parent="#accordionExample1"
                  >
                    <div className="card-body">
                      La diferencia radica en que cuando la producción requiere de adaptación a
                      vertical u horizontal, en HD el video pierde calidad al adaptarlo. En cambio,
                      la adaptación en 4k no pierde cálidad.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingOne4">
                    <h2 className="mb-0">
                      <button
                        className="btn btn collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne4"
                        aria-expanded="false"
                        aria-controls="collapseOne4"
                      >
                        Para publicaciones en redes sociales, ¿Necesito 4k?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne4"
                    className="collapse"
                    aria-labelledby="headingOne4"
                    data-parent="#accordionExample1"
                  >
                    <div className="card-body">
                      Si el video solo va a ser publicado en un solo formato, como REEL vertical por
                      ejemplo, en IG o TikTok, el servicio HD es suficiente.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingOne5">
                    <h2 className="mb-0">
                      <button
                        className="btn btn collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne5"
                        aria-expanded="false"
                        aria-controls="collapseOne5"
                      >
                        ¿La producción se suspende por mal clima
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne5"
                    className="collapse"
                    aria-labelledby="headingOne5"
                    data-parent="#accordionExample1"
                  >
                    <div className="card-body">
                      Nosotros filmamos siempre, pero si preferis que la producción tenga sol, el
                      rodaje se reprograma para otro día.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="section-title">
                <span className="title">Metodología</span>
              </div>
              <div className="accordion" id="accordionExample2">
                <div className="card">
                  <div className="card-header" id="headingTwo1">
                    <h2 className="mb-0">
                      <button
                        className="btn btn box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo1"
                        aria-expanded="true"
                        aria-controls="collapseTwo1"
                      >
                        ¿Cómo es el proceso de producción de un video?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo1"
                    className="collapse"
                    aria-labelledby="headingOne2"
                    data-parent="#accordionExample2"
                  >
                    <div className="card-body">
                      Comienza con un contacto para entender la necesidad del cliente, seguida de
                      planificación del rodaje, grabación y edición.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo2">
                    <h2 className="mb-0">
                      <button
                        className="btn btn- collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo2"
                        aria-expanded="false"
                        aria-controls="collapseTwo2"
                      >
                        ¿Qué equipo técnico utilizan?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo2"
                    className="collapse"
                    aria-labelledby="headingTwo2"
                    data-parent="#accordionExample2"
                  >
                    <div className="card-body">
                      EF Films emplea drones y equipos de última generación para garantizar calidad
                      cinematográfica.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo3">
                    <h2 className="mb-0">
                      <button
                        className="btn btn- collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo3"
                        aria-expanded="false"
                        aria-controls="collapseTwo3"
                      >
                        ¿Se entregan los crudos?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo3"
                    className="collapse"
                    aria-labelledby="headingTwo3"
                    data-parent="#accordionExample2"
                  >
                    <div className="card-body">Si, pero tienen un costo adicional.</div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo4">
                    <h2 className="mb-0">
                      <button
                        className="btn btn- collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo4"
                        aria-expanded="false"
                        aria-controls="collapseTwo4"
                      >
                        ¿Como se entrega el video final?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo4"
                    className="collapse"
                    aria-labelledby="headingTwo4"
                    data-parent="#accordionExample2"
                  >
                    <div className="card-body">
                      El video se entrega listo para su publicación, con logos y textos de ser
                      requeridos.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo5">
                    <h2 className="mb-0">
                      <button
                        className="btn btn collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo5"
                        aria-expanded="false"
                        aria-controls="collapseTwo5"
                      >
                        ¿Puedo pedir cambios en la entrega final?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo5"
                    className="collapse"
                    aria-labelledby="headingTwo5"
                    data-parent="#accordionExample2 "
                  >
                    <div className="card-body">
                      Realizamos 2 chequeos con sus respectivos cambios, a partir de la tercera
                      entrega, los cambios tienen un costo adicional.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="section-title">
                <span className="title">Logística</span>
              </div>
              <div className="accordion" id="accordionExample3">
                <div className="card">
                  <div className="card-header" id="headingThree1">
                    <h2 className="mb-0">
                      <button
                        className="btn btn box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree1"
                        aria-expanded="true"
                        aria-controls="collapseThree1"
                      >
                        ¿Solo trabajan su ciudad?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree1"
                    className="collapse"
                    aria-labelledby="headingThree1"
                    data-parent="#accordionExample3"
                  >
                    <div className="card-body">
                      Nuestra base está en Mar del Plata, pero realizamos proyectos en otras
                      regiones según el caso.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree2">
                    <h2 className="mb-0">
                      <button
                        className="btn btn collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree2"
                        aria-expanded="false"
                        aria-controls="collapseThree2"
                      >
                        ¿Cuánto tiempo lleva la filmación del inmueble?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree2"
                    className="collapse"
                    aria-labelledby="headingThree2"
                    data-parent="#accordionExample3"
                  >
                    <div className="card-body">
                      Dependiente del serivio seleccionado y el tamaño del inmueble, puede demorar
                      desde 1hs hasta 3hs máximo. Pero por lo general el tiempo estimado es de 1
                      hora y media por rodaje.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree4">
                    <h2 className="mb-0">
                      <button
                        className="btn btn collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree3"
                        aria-expanded="false"
                        aria-controls="collapseThree3"
                      >
                        ¿Cuánto tiempo tarda la edición del proyecto?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree3"
                    className="collapse"
                    aria-labelledby="headingThree3"
                    data-parent="#accordionExample3"
                  >
                    <div className="card-body">
                      El tiempo varía dependiendo de la complejidad del servicio. Para producciones
                      estandar 5 días habiles. Para las más complejas, unos 15 días habiles.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="section-title">
                <span className="title">Personalización</span>
              </div>
              <div className="accordion" id="accordionExample4">
                <div className="card">
                  <div className="card-header" id="headingFour1">
                    <h2 className="mb-0">
                      <button
                        className="btn btn box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour1"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                      >
                        ¿Es posible solicitar un estilo específico para mi video?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour1"
                    className="collapse"
                    aria-labelledby="headingFour1"
                    data-parent="#accordionExample4"
                  >
                    <div className="card-body">
                      Sí, intentamos que la producción se ajuste a tu marca. Tambien podemos
                      ayudarte a definir un estilo.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFour2">
                    <h2 className="mb-0">
                      <button
                        className="btn btn collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour2"
                        aria-expanded="false"
                        aria-controls="collapseFour2"
                      >
                        ¿Ofrecen revisiones durante el proceso de edición?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour2"
                    className="collapse"
                    aria-labelledby="headingFour2"
                    data-parent="#accordionExample4"
                  >
                    <div className="card-body">
                      Sí, una vez terminado el proceso de edición se envia el material finalizado en
                      baja calidad para garantizar que el video cumpla con lo esperado. Una vez que
                      esta ok, realizamos el envio del material en alta calidad para su publicación
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="section-title">
                <span className="title">Presupuesto</span>
              </div>
              <div className="accordion" id="accordionExample5">
                <div className="card">
                  <div className="card-header" id="headingFive1">
                    <h2 className="mb-0">
                      <button
                        className="btn btn box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive1"
                        aria-expanded="true"
                        aria-controls="collapseFive1"
                      >
                        ¿Cuál es el costo de un proyecto audiovisual?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFive1"
                    className="collapse"
                    aria-labelledby="headingFive1"
                    data-parent="#accordionExample5"
                  >
                    <div className="card-body">
                      Los precios dependen del tipo de servicio que se requiera y requisitos
                      específicos del proyecto. Podes conultar valores de referencia haciendo{' '}
                      <a target="_blank" href="/valores-inmobiliaria">
                        click aquí
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFive2">
                    <h2 className="mb-0">
                      <button
                        className="btn btn collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive2"
                        aria-expanded="false"
                        aria-controls="collapseFive2"
                      >
                        ¿Se requiere un depósito antes de comenzar?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFive2"
                    className="collapse"
                    aria-labelledby="headingFive2"
                    data-parent="#accordionExample5"
                  >
                    <div className="card-body">
                      Si, normalmente solicitan un anticipo para iniciar la producción.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFive3">
                    <h2 className="mb-0">
                      <button
                        className="btn btn collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive3"
                        aria-expanded="false"
                        aria-controls="collapseFive3"
                      >
                        ¿Contamos con promociones?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFive3"
                    className="collapse"
                    aria-labelledby="headingFive3"
                    data-parent="#accordionExample5"
                  >
                    <div className="card-body">
                      Si, podes obtener descuentos contratando 3 producciones mensuales y obtener un
                      descuento extra obteniendo el servicio mensual. Tambien contamos con ofertas
                      en servicios especificos todos los meses.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFive4">
                    <h2 className="mb-0">
                      <button
                        className="btn btn collapsed box-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive4"
                        aria-expanded="false"
                        aria-controls="collapseFive4"
                      >
                        ¿Formas de pago?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFive4"
                    className="collapse"
                    aria-labelledby="headingFive4"
                    data-parent="#accordionExample5"
                  >
                    <div className="card-body">
                      Podes abonar nuestros servicios con efectivo o transferencia bancaria.
                    </div>
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

export default Faqs;
