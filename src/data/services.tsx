import { ADITIONALS } from "../core/models/Aditionals.enum";
import type { IServices, IServicesSmall } from "../core/models/Iservices";
import { ServiceGroup } from "../core/models/ServiceGroup.enum";
import { ServiceType } from "../core/models/serviceType.enum";


export const servicesArray: Array<IServices> = [
    {
    id: 1,
    type: ServiceType.VIDEO,
    group: ServiceGroup.INITIAL,
    service: 'VIDEO',
    description: 'Video completo con broker mostrando el inmueble.',
    slider:'',
    video: 'https://www.instagram.com/p/DLDpb5vPUfQ/',
    discount: 0,
    discountMontly: 15,
    isBaseMontly: true,
    title: 'Smartphone',
    priceSince: 0,
    prices: [{
      isBasePrise: false,
      maxM2: 50,
      value: 90000
    },{
      isBasePrise: false,
      maxM2: 100,
      value: 110000
    },
    {
      isBasePrise: true,
      maxM2: 200,
      value: 130000
    }],
    aditionals: [/*{
      type: ADITIONALS.DRON,
      hours: 0.15,
      price: 90000
    },*/{
      type: ADITIONALS.BROKER,
      hours: 0.30,
      price: 30000
    },{
      type: ADITIONALS.MODEL,
      hours: 0.30,
      price: 20000
    }],
    isHighlighted: false,
    isPromo: false,
    isNew: false,
    isVideo: true,
    hours: 1,
    delivery: 5,
    },
    {
    id: 2,
    type: ServiceType.FOTO,
    group: ServiceGroup.INITIAL,
    service: 'FOTOGRAFÍA',
    description: 'Pack de 10 o 25 fotos profesionales editadas del inmueble.',
    discount: 0,
    slider:'',
    video: '',
    discountMontly: 0,
    isBaseMontly: false,
    title: 'SMARTPHONE',
    priceSince: 0,
    prices: [{
        isBasePrise: false,
        maxM2: 100,
        value: 40000
    },{
        isBasePrise: false,
        maxM2: 200,
        value: 50000
    },{
        isBasePrise: false,
        maxM2: 400,
        value: 60000
    }],
    aditionals: [/*{
      type: ADITIONALS.DRON,
      hours: 0.15,
      price: 90000
    }*/],
    isHighlighted: false,
    isPromo: false,
    isNew: false,
    isVideo: false,
    hours: 1,
    delivery: 5
    },{
      id: 3,
    type: ServiceType.FULL,
    group: ServiceGroup.INITIAL,
    service: 'VIDEO + FOTO',
    description: 'Tené la cobertura completa. Servicio de foto y video',
    video: 'https://www.instagram.com/p/DDqXK-dRB5U/',
    slider: '',
    discount: 0,
    discountMontly: 0,
    isBaseMontly: false,
    title: 'Smartphone',
    priceSince: 0,
    prices: [{
      isBasePrise: false,
      maxM2: 50,
      value: 120000
    },{
      isBasePrise: true,
      maxM2: 100,
      value: 140000
    },
    {
      isBasePrise: false,
      maxM2: 200,
      value: 160000
    }],
    aditionals: [/*{
      type: ADITIONALS.DRON,
      hours: 0.25,
      price: 90000
    },*/{
      type: ADITIONALS.BROKER,
      hours: 0.25,
      price: 30000
    },{
      type: ADITIONALS.MODEL,
      hours: 0.25,
      price: 20000
    }],
    isHighlighted: false,
    isPromo: false,
    isNew: false,
    isVideo: true,
    hours: 1.5,
    delivery: 5
    },  {
      id: 4,
    type: ServiceType.VIDEO,
    group: ServiceGroup.STANDARD,
    service: 'VIDEO',
    description: 'Video con broker mostrando el inmueble. Equipo profesional',
    video: 'https://www.youtube.com/watch?v=2ezasH5vDJI&t=5s',
    slider:'',
    discount: 0,
    discountMontly: 20,
    isBaseMontly: true,
    title: '',
    priceSince: 0,
    prices: [{
      isBasePrise: false,
      maxM2: 100,
      value: 150000
    },{
      isBasePrise: false,
      maxM2: 200,
      value: 180000
    },
    {
      isBasePrise: true,
      maxM2: 400,
      value: 200000
    }],
    aditionals: [{
      type: ADITIONALS.DRON,
      hours: 0.15,
      price: 100000
    },{
      type: ADITIONALS.BROKER,
      hours: 0.30,
      price: 30000
    },{
      type: ADITIONALS.MODEL,
      hours: 0.30,
      price: 20000
    }],
    isHighlighted: false,
    isPromo: false,
    isNew: false,
    isVideo: true,
    hours: 1,
    delivery: 5
    },
    {
      id: 5,
    type: ServiceType.FOTO,
    group: ServiceGroup.STANDARD,
    service: 'FOTOGRAFÍA HDR',
    description: 'Pack de fotos profesionales editadas del inmueble con cámara profesional.',
    video: '',
    slider: '',
    title: '',
    discount: 0,
    discountMontly: 0,
    isBaseMontly: false,
    priceSince: 0,
    prices: [{
      isBasePrise: false,
      maxM2: 100,
      value: 75000
    },{
    isBasePrise: false,
    maxM2: 200,
    value: 95000
    },{
    isBasePrise: false,
    maxM2: 400,
    value: 120000
    }],
    aditionals: [{
      type: ADITIONALS.DRON,
      hours: 0.30,
      price: 100000
    }],
    isHighlighted: false,
    isPromo: false,
    isNew: false,
    isVideo: false,
    hours: 1,
    delivery: 5
    },{
      id: 6,
    type: ServiceType.FULL,
    group: ServiceGroup.STANDARD,
    service: 'VIDEO + FOTO',
    description: 'Cobertura completa profesional. VIDEO + FOTOGRAFÍA.',
    video: 'https://www.instagram.com/reel/C3GX_M-RBrO/',
    slider: '',
    title: '',
    discount: 0,
    discountMontly: 0,
    isBaseMontly: false,
    priceSince: 0,
    prices: [{
      isBasePrise: false,
      maxM2: 100,
      value: 200000
    },{
      isBasePrise: false,
      maxM2: 200,
      value: 220000
    },
    {
      isBasePrise: true,
      maxM2: 400,
      value: 250000
    }],
    aditionals: [{
      type: ADITIONALS.DRON,
      hours: 0.15,
      price: 100000
    },{
      type: ADITIONALS.BROKER,
      hours: 0.30,
      price: 30000
    },{
      type: ADITIONALS.MODEL,
      hours: 0.30,
      price: 20000
    }],
    isHighlighted: false,
    isPromo: false,
    isNew: false,
    isVideo: true,
    hours: 2,
    delivery: 5
    },{ 
      id: 7,
        type: ServiceType.VIDEO,
        group: ServiceGroup.PREMIUM,
        service: 'VIDEO',
        description: 'Video de alto impacto donde el guión es clave. Video con CÁMARA + DRON. Incluye efectos y transiciones profesionales',
        video: '',
        slider: '',
        title: '',
        discount: 0,
        discountMontly: 20,
        isBaseMontly: true,
        priceSince: 0,
        prices: [{
          isBasePrise: false,
          maxM2: 200,
          value: 230000
        },
        {
          isBasePrise: false,
          maxM2: 400,
          value: 280000
        },
        {
          isBasePrise: true,
          maxM2: 600,
          value: 330000
        }],aditionals: [{
          type: ADITIONALS.DRON,
          hours: 0.50,
          price: 140000
        },{
          type: ADITIONALS.BROKER,
          hours: 0.50,
          price: 45000
        },{
          type: ADITIONALS.MODEL,
          hours: 0.50,
          price: 35000
        },{
          type: ADITIONALS.CONTENT,
          hours: 1.00,
          price: 150000
        }],
        isHighlighted: false,
        isPromo: false,
        isNew: false,
        isVideo: true,
        hours: 1.5,
        delivery: 5,

        },{
          id: 8,
        type: ServiceType.FOTO,
        group: ServiceGroup.PREMIUM,
        service: 'FOTOGRAFÍA HDR', /*BASE PREMIUM */
        description: 'Pack de fotos profesionales editadas del inmueble con cámara profesional.',
        video: '',
        slider: '',
        title: '',
        discount: 0,
        discountMontly: 0,
        isBaseMontly: false,
        priceSince: 0,
        prices: [{
          isBasePrise: false,
          maxM2: 200,
          value: 80000
          },{
          isBasePrise: true,
          maxM2: 400,
          value: 100000
          },{
          isBasePrise: false,
          maxM2: 600,
          value: 120000
        }],
        aditionals: [{
          type: ADITIONALS.DRON,
          hours: 0.30,
          price: 100000
        }],
        isHighlighted: false,
        isPromo: false,
        isNew: false,
        isVideo: true,
        hours: 1,
        delivery: 5
        },
        {
          id: 9,
            type: ServiceType.FULL,
            group: ServiceGroup.PREMIUM,
            service: 'VIDEO + FOTO', 
            description: 'Cobertura completa profesional. VIDEO + FOTOGRAFÍA.',
            video: 'https://www.instagram.com/p/DMqfv4axS-e/',
            slider:'',
            title:'',
            discount: 0,
            discountMontly: 0,
            isBaseMontly: false,
            priceSince: 0,  
            prices: [{
                isBasePrise: false,
                maxM2: 200,
                value: 360000
              },{
                isBasePrise: false,
                maxM2: 400,
                value: 410000
              },{
                isBasePrise: false,
                maxM2: 600,
                value: 510000
              }],
              aditionals: [{
                type: ADITIONALS.DRON,
                hours: 0.5,
                price: 120000
              },{
                type: ADITIONALS.BROKER,
                hours: 0.5,
                price: 40000
              },{
                type: ADITIONALS.MODEL,
                hours: 0.5,
                price: 30000
              },{
                type: ADITIONALS.CONTENT,
                hours: 1,
                price: 150000
              }],
              isHighlighted: false,
              isPromo: false,
              isNew: false,
              isVideo: true,
              hours: 2.5,
              delivery: 5
            },
];

export const customArray: Array<IServicesSmall> = [
      {
        id: 1,
        service: 'INSTITUCIONALES',
        description: 'Video institucional para tu empresa.',
        video: 'https://www.youtube.com/watch?v=WNKtXL7lc-o',
        priceSince: 450000,
        isHighlighted: false,
        isPromo: false,
        discount: 0
      },
      {id: 2,
        service: 'CAMPOS',
        description: 'Producción audiovidual para campos.',
        video: 'https://www.youtube.com/watch?v=DxaDVne_Wks',
        priceSince: 400000,
        isHighlighted: false,
        isPromo: false,
        discount: 0
      },
      {
        id: 3,
        service: 'EDIFICIOS',
        description: 'Producción audiovidual para edificios.',
        video: 'https://www.instagram.com/p/C4ysFMixPrq/',
        priceSince: 400000,
        isHighlighted: false,
        isPromo: false,
        discount: 0
      },
      {
        id: 4,
        service: 'BARRIOS PRIVADOS',
        description: 'Producción audiovidual para barrios privados.',
        video: 'https://www.youtube.com/watch?v=GCE-opUPhmE',
        priceSince: 400000,
        isHighlighted: false,
        isPromo: false,
        discount: 0
      },{
        id: 5,
        service: 'EVENTOS',
        description: 'Cobertura de evento y video resumen con cámara profesional.',
        video: '',
        priceSince: 150000,
        isHighlighted: false,
        isPromo: false,
        discount: 0
      }];