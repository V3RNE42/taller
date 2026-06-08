import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import { siteConfig } from './config/site.config';
import { navigationConfig } from './config/navigation';
import {
  Wrench,
  Globe,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';

export default function Layout() {
  const { t, lang, setLang } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');

  const isActive = (path: string) => location.pathname === path;

  const navLinks = navigationConfig.links;

  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col">
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 z-50 bg-surface shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary-dark transition-colors"
          >
            <Wrench className="h-7 w-7" />
            <span>{siteConfig.business.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary font-semibold'
                    : 'text-text-light hover:text-primary'
                }`}
              >
                {t(`nav.${link.name}`) || link.label}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="ml-2 flex items-center gap-1 rounded-lg border border-secondary-light/30 px-3 py-1.5 text-sm text-text-light hover:border-primary hover:text-primary transition-colors"
              aria-label={t('nav.toggleLang') || 'Toggle language'}
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase">{lang}</span>
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center text-text-light hover:text-primary transition-colors md:hidden"
            aria-label={mobileOpen ? t('nav.close') || 'Cerrar menú' : t('nav.menu') || 'Abrir menú'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col border-t border-gray-100 px-4 pb-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-text-light hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {t(`nav.${link.name}`) || link.label}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-text-light hover:bg-gray-50 hover:text-primary transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase">{lang}</span>
            </button>
          </nav>
        </div>
      </header>

      {/* ========== MAIN CONTENT ========== */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-secondary-dark text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand & Tagline */}
            <div>
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-bold text-white hover:text-primary-light transition-colors mb-3"
              >
                <Wrench className="h-6 w-6" />
                <span>{siteConfig.business.name}</span>
              </Link>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t('footer.tagline') || siteConfig.business.tagline}
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-300">
                <Clock className="h-4 w-4" />
                {t('footer.hours') || 'Horario'}
              </h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <span className="text-gray-400">{siteConfig.business.hours.weekdays.label}:</span>{' '}
                  {siteConfig.business.hours.weekdays.time}
                </li>
                <li>
                  <span className="text-gray-400">{siteConfig.business.hours.friday.label}:</span>{' '}
                  {siteConfig.business.hours.friday.time}
                </li>
                <li>
                  <span className="text-gray-400">{siteConfig.business.hours.weekend.label}:</span>{' '}
                  {siteConfig.business.hours.weekend.time}
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
                {t('footer.contact') || 'Contacto'}
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                  <span>
                    {siteConfig.business.location.address},{' '}
                    {siteConfig.business.location.city},{' '}
                    {siteConfig.business.location.postalCode}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-primary-light" />
                  <a
                    href={`tel:${siteConfig.business.contact.phone}`}
                    className="hover:text-primary-light transition-colors"
                  >
                    {siteConfig.business.contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-primary-light" />
                  <a
                    href={`mailto:${siteConfig.business.contact.email}`}
                    className="hover:text-primary-light transition-colors"
                  >
                    {siteConfig.business.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-gray-600/50 pt-6 text-center text-sm text-gray-400">
            &copy; {year} {siteConfig.business.name} &mdash;{' '}
            {t('footer.rights') || 'Todos los derechos reservados.'}
          </div>
        </div>
      </footer>
    </div>
  );
}
