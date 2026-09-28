import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import Link from '../components/Link';
import { useDocumentMeta } from '../lib/router';
import { ARTICLES } from '../data/articles';
import { BookButton, Container, PageHeader } from '../components/ui';
import NotFound from './NotFound';

export default function Insights() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes from our architects."
        intro="Practical guidance on SAP CPQ, S/4HANA variant configuration, BTP and enterprise integration."
      />
      <section className="pb-24 bg-white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {ARTICLES.map((a) => (
              <Link key={a.slug} to={`/insights/${a.slug}`} className="group flex flex-col rounded-[2rem] border border-slate-200 bg-slate-50 p-8 hover:bg-white hover:shadow-2xl transition-all">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[11px] font-black uppercase tracking-widest rounded-full">{a.category}</span>
                  <span className="text-slate-500 text-xs font-bold inline-flex items-center gap-1"><Clock size={12} /> {a.readTime}</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{a.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium flex-1">{a.excerpt}</p>
                <span className="text-blue-600 font-black text-sm inline-flex items-center gap-2">
                  Read article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export function Article({ slug }) {
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return <NotFound />;
  return <ArticleBody article={article} />;
}

function ArticleBody({ article }) {
  useDocumentMeta({ title: `${article.title} | Connecting Cloud`, description: article.excerpt });
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-24">
      <Link to="/insights" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 mb-10">
        <ArrowLeft size={14} /> All insights
      </Link>
      <span className="block w-fit px-3 py-1 bg-blue-100 text-blue-700 text-[11px] font-black uppercase tracking-widest rounded-full">{article.category}</span>
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 leading-tight tracking-tight">{article.title}</h1>
      <p className="mt-6 pb-8 border-b border-slate-200 text-sm font-bold text-slate-500">
        {article.author} · {article.readTime}
      </p>
      <div className="mt-10 space-y-6 text-slate-700 font-medium leading-relaxed">{article.content}</div>
      <div className="mt-16 p-8 md:p-10 bg-slate-50 rounded-[2rem] border border-slate-200">
        <h2 className="text-xl font-black text-slate-900 mb-3">Working on something similar?</h2>
        <p className="text-slate-600 font-medium mb-6">Talk it through with the architects who wrote this.</p>
        <BookButton source={`article-${article.slug}`} />
      </div>
    </article>
  );
}
