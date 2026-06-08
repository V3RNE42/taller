export const navigationConfig = {
  logo: {
    text: 'Alcantarauto',
    icon: 'Wrench',
  },
  links: [
    { name: 'home', path: '/', label: 'Inicio' },
    { name: 'services', path: '/servicios', label: 'Servicios' },
    { name: 'contact', path: '/contacto', label: 'Contacto' },
  ],
} as const;
