import type { IServiceType } from "../core/models/IServiceType";
import { ServiceGroup } from "../core/models/ServiceGroup.enum";

  export const serviceTypes: Array<IServiceType> = [
    {
      id: 1,
      title: 'SERVICIOS INICIALES',
      subTitle: 'SMARTPHONE',
      key: ServiceGroup.INITIAL,
      description: `Producciones de buena calidad realizadas con SMARTPHONE, con entrada de inversion baja, pensadas para mostrar la propiedad de forma clara, simple y efectiva.`,
      class: 'initial bg-gray-4',
      listPro: ['Inversion baja', 'Entregas en 72hs'],
      listDownSide: ['Cámara profesional', 'Servicio de dron', 'Edición avanzada','Guión'],
    },
    {
      id: 2,
      title: 'SERVICIOS ESTANDAR',
      subTitle: 'EQUIPO ESTANDAR',
      key: ServiceGroup.STANDARD,
      description: `Subimos de nivel e incorporamos cámaras profesionales y mejor trabajo en post producción.`,
      class: 'standard bg-gray-3',
      listPro: ['Cámara profesional', 'Dron opcional', 'Cálidad profesional','Checkeo de guión', 'Servicio de dron'],
      listDownSide: ['Edición avanzada','Planificación'],
    },
    {
      id: 3,
      title: 'SERVICIOS PREMIUM',
      subTitle: 'EQUIPO PROFESIONAL',
      key: ServiceGroup.PREMIUM,
      description: `Producciones épicas con mucho impacto visual. No solo vendemos la propiedad sino que tambien trabajamos en la marca y el crecimiento de la misma.`,
      class: 'premium bg-gray-4',
      listPro: ['Guión y planificación', 'Crecimiento de marca', 'Alto impacto visual','Edición avanzada'],
      listDownSide: [],
    },
    {
      id: 4,
      title: "CREACION DE CONTENIDO",
      subTitle: "SERVICIO PREMIUM",
      key: ServiceGroup.CONTENT_CREATION,
      description: "El servicio para marcas que realmente quieren despegar con contenido de calidad PREMIUM.",
      class: "content-creation bg-gray-3",
      listPro: ["Mayor contenido", "Mayor alcance", "Mayor crecimiento"],
      listDownSide: [],
    }
  ];