import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaSecondary?: string;
  ctaSecondaryLink?: string;
  image?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  ctaSecondary,
  ctaSecondaryLink,
  image,
}: HeroProps) {
  const { t } = useLanguage();

  const resolvedTitle = title ?? t('hero.title');
  const resolvedSubtitle = subtitle ?? t('hero.subtitle');
  const resolvedDescription = description ?? t('hero.description');
  const resolvedCtaText = ctaText ?? t('hero.ctaText');
  const resolvedCtaLink = ctaLink ?? '/contacto';
  const resolvedCtaSecondary = ctaSecondary ?? t('hero.ctaSecondary');
  const resolvedCtaSecondaryLink = ctaSecondaryLink ?? '/servicios';

  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)',
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            {resolvedSubtitle && (
              <p className="animate-fade-in-up stagger-1 text-lg md:text-xl text-white/90 font-medium mb-3">
                {resolvedSubtitle}
              </p>
            )}

            <h1 className="animate-fade-in-up stagger-2 text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              {resolvedTitle}
            </h1>

            {resolvedDescription && (
              <p className="animate-fade-in-up stagger-3 text-lg text-white/80 max-w-2xl mx-auto md:mx-0 mb-8">
                {resolvedDescription}
              </p>
            )}

            <div className="animate-fade-in-up stagger-4 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              {resolvedCtaText && (
                <a
                  href={resolvedCtaLink}
                  className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-primary-light hover:text-white transition-all duration-300 shadow-lg"
                >
                  {resolvedCtaText}
                </a>
              )}

              {resolvedCtaSecondary && (
                <a
                  href={resolvedCtaSecondaryLink}
                  className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  {resolvedCtaSecondary}
                </a>
              )}
            </div>
          </div>

          {image && (
            <div className="animate-fade-in-up stagger-5 flex-1 flex justify-center">
              <img
                src={image}
                alt={resolvedTitle}
                className="w-full max-w-md h-auto rounded-xl shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
