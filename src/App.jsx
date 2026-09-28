import { usePath, useDocumentMeta } from './lib/router';
import { ROUTE_META } from './data/routes';
import Navigation from './components/Navigation';
import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';
import Practice from './pages/Practice';
import Pharma from './pages/Pharma';
import Approach from './pages/Approach';
import Sprint from './pages/Sprint';
import Team from './pages/Team';
import Insights, { Article } from './pages/Insights';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

const ROUTES = {
  '/': Home,
  '/sap': () => <Practice id="sap" />,
  '/salesforce': () => <Practice id="salesforce" />,
  '/ai-automation': () => <Practice id="ai" />,
  '/managed-services': () => <Practice id="ams" />,
  '/industries/pharma': Pharma,
  '/approach': Approach,
  '/erp-decision-sprint': Sprint,
  '/team': Team,
  '/insights': Insights,
  '/contact': Contact,
  '/privacy': Privacy,
};

function Page({ path }) {
  const Component = ROUTES[path];
  useDocumentMeta(ROUTE_META[path] || ROUTE_META['/']);
  return <Component />;
}

export default function App() {
  const path = usePath();
  const articleSlug = path.startsWith('/insights/') ? path.slice('/insights/'.length) : null;

  let content;
  if (ROUTES[path]) content = <Page key={path} path={path} />;
  else if (articleSlug) content = <Article key={path} slug={articleSlug} />;
  else content = <NotFound />;

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-left antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="flex-1">{content}</main>
      <SiteFooter />
    </div>
  );
}
