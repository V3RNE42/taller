export const siteConfig = {
  business: {
    name: 'Alcantarauto',
    tagline: 'Servicio Rápido y Eficiente',
    description:
      'Taller mecánico multimarca en Triana, Sevilla. Especializados en diagnóstico, reparación y mantenimiento de todo tipo de vehículos.',
    founded: '2024',
    location: {
      address: 'Calle Salado, 30',
      city: 'Sevilla',
      postalCode: '41010',
      neighborhood: 'Triana',
      country: 'España',
      mapUrl: 'https://maps.app.goo.gl/mnYQpimzpcXFfwc7A',
      coordinates: { lat: 37.383, lng: -6.001 },
      googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.535473222448!2d-6.007163425223023!3d37.377167034966035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126d3a3ce50435%3A0xe4b9a290c5ce4292!2sTaller%20Mec%C3%A1nico%20Alcantarauto!5e0!3m2!1ses!2ses!4v1780943341696!5m2!1ses!2ses',
    },
    contact: {
      email: 'info@alcantarauto.com',
      phone: '+34 634 54 77 85',
      phoneDisplay: '634 54 77 85',
      whatsapp: '+34634547785',
    },
    hours: {
      weekdays: { time: '8:00 – 16:30' },
      friday: { time: '8:00 – 14:00' },
      weekend: { time: 'Cerrado' },
    },
  },
  theme: {
    colorScheme: 'light',
  },
  seo: {
    titleTemplate: '%s | Alcantarauto',
    defaultTitle: 'Alcantarauto — Taller Mecánico en Triana, Sevilla',
    defaultDescription:
      'Taller mecánico multimarca en Triana. Servicio rápido y eficiente. Mecánica, revisiones, frenos, averías y más. Calle Salado 30, Sevilla.',
    siteUrl: 'https://alcantarauto.com',
  },
} as const;
