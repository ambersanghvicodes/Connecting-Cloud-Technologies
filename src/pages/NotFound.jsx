import { useDocumentMeta } from '../lib/router';
import { ButtonLink } from '../components/ui';

export default function NotFound() {
  useDocumentMeta({ title: 'Page not found | Connecting Cloud', description: 'This page does not exist.' });
  return (
    <section className="pt-40 pb-32 text-center px-4">
      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">We couldn&rsquo;t find that page.</h1>
      <ButtonLink to="/">Back to home</ButtonLink>
    </section>
  );
}
