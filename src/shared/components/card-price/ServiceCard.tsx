import React, { useEffect, useState } from 'react';
import type { IAditionals, IServices } from '../../../core/models/Iservices';
import './ServiceCard.scss';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IServiceType } from '../../../core/models/IServiceType';
import ToggleSwitch from '../toggle-switch/ToggleSwitch';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { ADITIONALS } from '../../../core/models/Aditionals.enum';
import { formatNumber } from '../../utils/numbers';
import { ServiceGroup } from '../../../core/models/ServiceGroup.enum';

interface CardProps {
  key: number;
  service: IServices;
  serviceType: IServiceType;
}

function shouldShowThis(items: Array<IAditionals>, compareWith: string) {
  return items.some((item) => {
    return item.type === compareWith;
  });
}

const popoverBroker = (
  <Popover id="popover-basic" className="ef-popover">
    <Popover.Header as="h3">
      <strong>INCLUIR BROKER</strong>
    </Popover.Header>
    <Popover.Body>
      Una persona conduce la producción siguiendo un guión. La mejor manera de hacer crecer tu
      marca!
    </Popover.Body>
  </Popover>
);

const popoverDron = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">
      <strong>INCLUIR DRON</strong>
    </Popover.Header>
    <Popover.Body>Planos aéreos espectaculares para tu producción.</Popover.Body>
  </Popover>
);

const popoverIa = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">
      <strong>INCLUIR IA</strong>
    </Popover.Header>
    <Popover.Body>
      Inteligencia artificial para incorporar muebles virtuales / efectos / transiciones o
      edificaciones.
    </Popover.Body>
  </Popover>
);

/*const popoverContent = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">
      <strong>INCLUIR CONTENIDO</strong>
    </Popover.Header>
    <Popover.Body>3 Reels cortos adicionales para las redes sociales</Popover.Body>
  </Popover>
);*/

const popoverModeling = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">
      <strong>INCLUIR MODELADO</strong>
    </Popover.Header>
    <Popover.Body>Planos de broker realizando diferentes acciones.</Popover.Body>
  </Popover>
);

function ServiceCard({ service, serviceType }: CardProps) {
  const [estimatedHour, setEstimatedHour] = useState(service.hours);
  const [isBrokerOn, setIsBrokerOn] = useState(false);
  const [isDronOn, setIsDronOn] = useState(false);
  const [isModelingOn, setIsModelingOn] = useState(false);
  //const [isContentOn, setIsContentOn] = useState(false);
  const [isIaOn, setIsIaOn] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    if (service.group === ServiceGroup.PREMIUM) {
      const nextState = {
        dron: true,
        broker: true,
        model: true,
        content: false,
        ia: false,
      };

      setIsDronOn(true);
      setIsBrokerOn(true);
      setIsModelingOn(true);
      //setIsContentOn(false);
      setIsIaOn(true);

      recalcEstimatedHours(nextState);
    } else {
      setEstimatedHour(service.hours);
    }
  }, [service.id]);

  const recalcEstimatedHours = ({
    dron,
    broker,
    model,
    ia,
  }: {
    dron: boolean;
    broker: boolean;
    model: boolean;
    ia: boolean;
  }) => {
    let total = service.hours;

    if (dron) {
      total += service.aditionals.find((a) => a.type === ADITIONALS.DRON)?.hours || 0;
    }
    if (broker) {
      total += service.aditionals.find((a) => a.type === ADITIONALS.BROKER)?.hours || 0;
    }
    if (model) {
      total += service.aditionals.find((a) => a.type === ADITIONALS.MODEL)?.hours || 0;
    }
   /* if (content) {
      total += service.aditionals.find((a) => a.type === ADITIONALS.CONTENT)?.hours || 0;
    }*/
    if (ia) {
      total += service.aditionals.find((a) => a.type === ADITIONALS.IA)?.hours || 0;
    }

    setEstimatedHour(total);
  };

  const handleToggle = (newValue: boolean, aditionalType: string) => {
    const nextState = {
      dron: aditionalType === ADITIONALS.DRON ? newValue : isDronOn,
      broker: aditionalType === ADITIONALS.BROKER ? newValue : isBrokerOn,
      model: aditionalType === ADITIONALS.MODEL ? newValue : isModelingOn,
      //content: aditionalType === ADITIONALS.CONTENT ? newValue : isContentOn,
      ia: aditionalType === ADITIONALS.IA ? newValue : isIaOn,
    };

    setIsDronOn(nextState.dron);
    setIsBrokerOn(nextState.broker);
    setIsModelingOn(nextState.model);
    //setIsContentOn(nextState.content);
    setIsIaOn(nextState.ia);

    recalcEstimatedHours(nextState);
    recalcAditionalPrice(newValue, aditionalType);
  };

  function recalcAditionalPrice(value: boolean, aditionalType: string) {
    const aditional = service.aditionals.find((el) => {
      return el.type === aditionalType;
    });
    if (!aditional) return;
    setFinalPrice((prev) => {
      if (prev === 0) return prev;
      return value ? prev + aditional.price : prev - aditional.price;
    });
  }

  function formatHours(hours: number): string {
    const base = Math.floor(hours); // parte entera (ej: 2)
    const decimal = hours - base; // parte decimal (ej: 0.3)

    const text = base === 1 ? 'hora' : 'horas';

    if (decimal === 0) {
      return `${base} ${text}`;
    } else if (decimal > 0 && decimal <= 0.5) {
      return `${base} ${text} y media`;
    } else {
      return `${base + 1} ${text}`;
    }
  }

  const handleSelectMeters = (meters: React.ChangeEvent<HTMLSelectElement>) => {
    const m2Selected = meters.target.value;
    const value = service.prices.find((el) => {
      return el.maxM2.toString() === m2Selected;
    });

    if (value) {
      let finalPrice = value?.value;

      if (isDronOn) {
        const aditionalDron = service.aditionals.find((el) => {
          return el.type === ADITIONALS.DRON;
        });
        if (aditionalDron) {
          finalPrice += aditionalDron.price;
        }
      }

      if (isBrokerOn) {
        const aditionalBroker = service.aditionals.find((el) => {
          return el.type === ADITIONALS.BROKER;
        });
        if (aditionalBroker) {
          finalPrice += aditionalBroker.price;
        }
      }

      if (isModelingOn) {
        const aditionalBroker = service.aditionals.find((el) => {
          return el.type === ADITIONALS.MODEL;
        });
        if (aditionalBroker) {
          finalPrice += aditionalBroker.price;
        }
      }

      /*if (isContentOn) {
        const aditionalBroker = service.aditionals.find((el) => {
          return el.type === ADITIONALS.CONTENT;
        });
        if (aditionalBroker) {
          finalPrice += aditionalBroker.price;
        }
      }*/

      if (isIaOn) {
        const aditionalBroker = service.aditionals.find((el) => {
          return el.type === ADITIONALS.IA;
        });
        if (aditionalBroker) {
          finalPrice += aditionalBroker.price;
        }
      }

      setFinalPrice(finalPrice);
    }
  };

  return (
    <>
      <div
        className={`card-value highlighted${service.isHighlighted ? 'highlighted' : ''}`}
        key={service.id}
      >
        {service.isPromo && <div className="label-highlighted">{service.discount}</div>}

        <div className={`header-card ` + serviceType.class}>
          <div className="image-container gopro">
            <div className="title">{service.service}</div>
          </div>
        </div>

        <div className="content">
          {/*<div className="description">
            {service.description}
              <div className={'examples'}>
                {service.video && (
                  <a target="_blank" href={service.video} className="link" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faArrowRightLong} className="icon" /> ver ejemplo
                  </a>
                )}

                {service.slider && (
                  <a>ACTIVAR</a>
                  <a onClick={() => showSlider(service.slider)} className="link">
                    &gt; ver ejemplo
                  </a>
                )}
              </div>
            </div>*/}

          <div className={`aditionals ` + service.group}>
            {shouldShowThis(service.aditionals, ADITIONALS.BROKER) && (
             <div className="title">Adicionar</div>
            )}
            {shouldShowThis(service.aditionals, ADITIONALS.BROKER) && (
              <div>
                <div className="desc">Broker</div>
                <div>
                  <ToggleSwitch
                    checked={isBrokerOn}
                    disabled={service.group === ServiceGroup.PREMIUM}
                    onChange={(checked) => handleToggle(checked, ADITIONALS.BROKER)}
                  />
                </div>
                <div className={'info-icon'}>
                  <OverlayTrigger
                    trigger={['hover', 'focus', 'click']}
                    placement="top"
                    overlay={popoverBroker}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </OverlayTrigger>
                </div>
              </div>
            )}
            {shouldShowThis(service.aditionals, ADITIONALS.MODEL) && (
              <div>
                <div className="desc">Modelado</div>
                <div>
                  <ToggleSwitch
                    checked={isModelingOn}
                    disabled={service.group === ServiceGroup.PREMIUM}
                    onChange={(checked) => {
                      handleToggle(checked, ADITIONALS.MODEL);
                    }}
                  />
                </div>
                <div className={'info-icon'}>
                  <OverlayTrigger
                    trigger={['hover', 'focus', 'click']}
                    placement="top"
                    overlay={popoverModeling}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </OverlayTrigger>
                </div>
              </div>
            )}

            {/*shouldShowThis(service.aditionals, ADITIONALS.CONTENT) && (
              <div>
                <div className="desc">Contenido</div>
                <div>
                  <ToggleSwitch
                    checked={isContentOn}
                    onChange={(checked) => {
                      handleToggle(checked, ADITIONALS.CONTENT);
                    }}
                  />
                </div>
                <div className={'info-icon'}>
                  <OverlayTrigger
                    trigger={['hover', 'focus', 'click']}
                    placement="top"
                    overlay={popoverContent}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </OverlayTrigger>
                </div>
              </div>
            )*/}
            {shouldShowThis(service.aditionals, ADITIONALS.DRON) && (
              <div>
                <div className="desc">Dron</div>
                <div>
                  <ToggleSwitch
                    checked={isDronOn}
                    disabled={service.group === ServiceGroup.PREMIUM}
                    onChange={(checked) => {
                      handleToggle(checked, ADITIONALS.DRON);
                    }}
                  />
                </div>
                <div className={'info-icon'}>
                  <OverlayTrigger
                    trigger={['hover', 'focus', 'click']}
                    placement="top"
                    overlay={popoverDron}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </OverlayTrigger>
                </div>
              </div>
            )}
            {shouldShowThis(service.aditionals, ADITIONALS.IA) && (
              <div>
                <div className="desc">IA</div>
                <div>
                  <ToggleSwitch
                    checked={isIaOn}
                    disabled={service.group === ServiceGroup.PREMIUM}
                    onChange={(checked) => {
                      handleToggle(checked, ADITIONALS.IA);
                    }}
                  />
                </div>
                <div className={'info-icon'}>
                  <OverlayTrigger
                    trigger={['hover', 'focus', 'click']}
                    placement="top"
                    overlay={popoverIa}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </OverlayTrigger>
                </div>
              </div>
            )}
          </div>

          {estimatedHour && (
            <div className="estimatedTime">
              Tiempo estimado de producción
              <div className="hours">{formatHours(estimatedHour)}</div>
            </div>
          )}

          <div className="meters">
            <div>
              <span className="title">Seleccionar m2</span>
              {service.prices && service.prices.length > 0 && (
                <select onChange={handleSelectMeters}>
                  <option defaultChecked></option>
                  {service.prices.map((price, i) => (
                    <React.Fragment key={i}>
                      <option key={i} value={price.maxM2}>
                        Hasta {price.maxM2}m2 cubiertos
                      </option>
                    </React.Fragment>
                  ))}
                </select>
              )}
            </div>
          </div>
          <div className="prices">
            <div>
              {finalPrice === 0 && (
                <div className="m2-leyend">SELECCIONA METROS CUADRADOS PARA CONOCER EL VALOR</div>
              )}
              {finalPrice !== 0 && `$` + formatNumber(finalPrice) + `.-`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
