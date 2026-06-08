import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-8xl font-extrabold text-primary">404</p>
      <h1 className="text-3xl font-bold">Página no encontrada</h1>
      <p className="max-w-md text-text-light">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        to="/"
        className="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
