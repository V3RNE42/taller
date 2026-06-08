import { useLanguage } from '../context/LanguageContext';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
}: CTASectionProps) {
  const { t } = useLanguage();

  const resolvedTitle = title ?? t('cta.title');
  const resolvedDescription = description ?? t('cta.description');
  const resolvedButtonText = buttonText ?? t('cta.buttonText');
  const resolvedButtonHref = buttonHref ?? 'tel:+34634547785';

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="animate-fade-in-up stagger-1 text-3xl md:text-4xl font-extrabold text-white mb-4">
          {resolvedTitle}
        </h2>

        <p className="animate-fade-in-up stagger-2 text-lg text-white/80 max-w-2xl mx-auto mb-8">
          {resolvedDescription}
        </p>

        <a
          href={resolvedButtonHref}
          className="animate-fade-in-up stagger-3 inline-block bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-primary-light hover:text-white transition-all duration-300 shadow-lg"
        >
          {resolvedButtonText}
        </a>
      </div>
    </section>
  );
}
