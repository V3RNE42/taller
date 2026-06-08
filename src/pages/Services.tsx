import { useLanguage } from '../context/LanguageContext';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';

export default function Services() {
  const { t } = useLanguage();

  const services = t('services.items');
  const serviceItems = Array.isArray(services) ? services : [];

  return (
    <div>
      {/* Cabecera */}
      <section className="bg-gradient-to-br from-primary-dark to-primary flex min-h-[30vh] items-center">
        <div className="mx-auto max-w-6xl px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {t('services.title')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((item: any, index: number) => (
              <ServiceCard
                key={item.id ?? index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
