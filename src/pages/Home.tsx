import { useLanguage } from '../context/LanguageContext';

import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { Award, Clock, ThumbsUp, MapPin } from 'lucide-react';

const whyUsIcons = [Award, Clock, ThumbsUp, MapPin] as const;

export default function Home() {
  const { t } = useLanguage();

  const services: any[] = t('services.items') as any;
  const featuredServices = services.slice(0, 3);

  const whyUsList: any[] = t('whyUs.items') as any;

  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Servicios Destacados */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            {t('services.title')}
          </h2>
          <p className="text-text-light mx-auto mb-10 max-w-2xl text-center text-lg">
            {t('services.subtitle')}
          </p>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {featuredServices.map((service: any, index: number) => (
              <div
                key={service.id ?? index}
                className={`animate-fade-in-up stagger-${index + 1}`}
              >
                <ServiceCard icon={service.icon} title={service.title} description={service.description} index={index} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/servicios"
              className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Ver todos los servicios
            </a>
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            {t('whyUs.title')}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyUsList.map((item: any, index: number) => {
              const IconComponent = whyUsIcons[index] ?? whyUsIcons[0];
              return (
                <div
                  key={item.id ?? index}
                  className={`animate-fade-in-up stagger-${index + 1} flex flex-col items-center text-center`}
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-text-light max-w-xs text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection />
    </div>
  );
}
