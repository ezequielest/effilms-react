/*BASEPRICE ES EL VALOR NETO POR PRODUCCION (CON DESCUENTO), CON ESTE SE CALCULA EL AHORRO*/

import type { Iplans } from '../core/models/Iplans';
import { ServiceGroup } from '../core/models/ServiceGroup.enum';

export const plans: Array<Iplans> = [
  {
    type: ServiceGroup.INITIAL,
    title: 'INICIAL',
    class: 'initial',
    availablePlaces: 0,
    included: [
      {
        description: 'Servicio SMARTPHONE',
        class: 'bold',
      },
      {
        description: 'Ideal para iniciar',
        class: '',
      },
      {
        description: 'Broker conduciendo video',
        class: '',
      },
    ],
    hasPhoto: false,
    isHighlighted: false,
    value: 0,
    saveCash: 0,
    totalPercentDiscount: 0,
  },
  {
    type: ServiceGroup.STANDARD,
    title: 'ESTANDAR',
    class: 'standard',
    availablePlaces: 2,
    included: [
      {
        description: 'Servicio PROFESIONAL',
        class: 'bold',
      },
      {
        description: 'Equipo profesional',
        class: '',
      },
      {
        description: 'Video CÁMARA + DRON',
        class: '',
      },
      {
        description: 'Broker conduciendo video',
        class: '',
      },
    ],
    hasPhoto: false,
    isHighlighted: false,
    value: 0,
    saveCash: 0,
    totalPercentDiscount: 0,
  },
  {
    type: ServiceGroup.PREMIUM,
    title: 'PREMIUM',
    class: 'premium',
    availablePlaces: 0,
    included: [
      {
        description: 'Servicio PREMIUM',
        class: 'bold',
      },
      {
        description: 'Videos de alto impacto',
        class: '',
      },
      {
        description: 'Adaptación de formato',
        class: '',
      },
      {
        description: 'Efectos de texto',
        class: '',
      },
      {
        description: 'Broker y modelados',
        class: '',
      },
    ],
    hasPhoto: false,
    isHighlighted: false,
    value: 0,
    saveCash: 0,
    totalPercentDiscount: 0,
  },
];
