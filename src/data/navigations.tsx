// components/Nav/navigation.ts

export interface NavItem {
  label: string;
  path: string;
  hash?: string;
}

export const HOME_NAV: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Equipo',
    path: '/',
    hash: 'equipo',
  },
  {
    label: 'Servicios',
    path: '/servicios',
  },
  {
    label: 'Testimonios',
    path: '/',
    hash: 'testimonials',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'FAQs',
    path: '/',
    hash: 'faqs',
  },
  {
    label: 'Contacto',
    path: '/contacto',
  },
];

export const SERVICES_NAV: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Servicios',
    path: '/servicios',
  },
  {
    label: 'Modalidad',
    path: '/servicios',
    hash: 'modalidad',
  },
  {
    label: 'Individuales',
    path: '/servicios',
    hash: 'individuals',
  },
  {
    label: 'Mensuales',
    path: '/servicios',
    hash: 'monthly',
  },
  {
    label: 'Plan 6M',
    path: '/servicios',
    hash: 'plan6m',
  },
  {
    label: 'Contacto',
    path: '/contacto',
  },
];