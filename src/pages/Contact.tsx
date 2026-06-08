import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../config/site.config';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          subject: `Nuevo contacto desde web: ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setToast({ type: 'success', message: t('contact.formSuccess') });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setToast({ type: 'error', message: t('contact.formError') });
      }
    } catch {
      setToast({ type: 'error', message: t('contact.formError') });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 5000);
    }
  };

  return (
    <div>
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed right-4 top-4 z-50 flex items-center gap-3 rounded-lg px-6 py-4 shadow-lg transition-all duration-500 animate-fade-in ${
            toast.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {toast.type === 'success' ? (
            <CheckCircle className="h-5 w-5 text-green-600" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600" />
          )}
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}

      {/* Header */}
      <section className="bg-gradient-to-r from-primary-dark to-primary py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t('contact.title')}</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Grid: Info + Form */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Column — Contact Info */}
            <div className="rounded-xl bg-surface p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold">{t('contact.infoTitle')}</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('contact.address')}</p>
                    <p className="text-text-light text-sm">
                      {siteConfig.business.location.address}, {siteConfig.business.location.city},{' '}
                      {siteConfig.business.location.postalCode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('contact.phone')}</p>
                    <a
                      href={`tel:${siteConfig.business.contact.phone}`}
                      className="text-text-light text-sm transition-colors hover:text-primary"
                    >
                      {siteConfig.business.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('contact.email')}</p>
                    <a
                      href={`mailto:${siteConfig.business.contact.email}`}
                      className="text-text-light text-sm transition-colors hover:text-primary"
                    >
                      {siteConfig.business.contact.email}
                    </a>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="mb-2 font-semibold">{t('contact.schedule')}</p>
                    <div className="space-y-1 text-sm">
                      <p>
                        <span className="font-medium">{siteConfig.business.hours.weekdays.label}:</span>{' '}
                        {siteConfig.business.hours.weekdays.time}
                      </p>
                      <p>
                        <span className="font-medium">{siteConfig.business.hours.friday.label}:</span>{' '}
                        {siteConfig.business.hours.friday.time}
                      </p>
                      <p className="text-gray-400">
                        <span className="font-medium">{siteConfig.business.hours.weekend.label}:</span>{' '}
                        {siteConfig.business.hours.weekend.time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Form */}
            <div className="rounded-xl bg-surface p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold">{t('contact.formTitle')}</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium">
                    {t('contact.formName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary"
                    placeholder={t('contact.formName')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium">
                    {t('contact.formEmail')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary"
                    placeholder={t('contact.formEmail')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                    {t('contact.formPhone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary"
                    placeholder={t('contact.formPhone')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium">
                    {t('contact.formMessage')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary"
                    placeholder={t('contact.formMessage')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <svg
                      className="h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                  {loading ? 'Enviando...' : t('contact.formSubmit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="w-full">
        <iframe
          src={siteConfig.business.location.googleMapsEmbed}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Alcantarauto"
        />
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
