import { ArrowRight, Box, LayoutGrid, Link as LinkIcon } from 'lucide-react';

export const ARTICLES = [
  {
    slug: 'python-scripting-in-sap-cpq',
    category: 'SAP CPQ',
    title: 'Python Scripting in SAP CPQ: Keeping Quotes Fast',
    excerpt: 'Moving beyond basic IronPython scripts to quote-level orchestration that stays fast as configuration logic grows.',
    readTime: '5 min read',
    author: 'Connecting Cloud SAP Practice',
    content: (
      <>
        <p className="text-lg leading-relaxed">
          In many enterprise landscapes, SAP CPQ is the &lsquo;brain&rsquo; of the sales organization. As configuration logic grows,
          script performance can become a bottleneck. We advocate a <strong>clean scripting</strong> approach.
        </p>
        <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">Where time goes</h2>
        <p>
          Heavy scripts that run on every quote load are the usual culprit. Moving that work to the events that actually need it,
          such as adding an item to the cart, keeps the quote screen responsive.
        </p>
        <pre className="bg-slate-900 rounded-2xl p-6 my-8 overflow-x-auto text-blue-300 font-mono text-sm leading-relaxed">
{`# Avoid heavy lookups inside loops
items = context.Quote.MainItems
lookup = build_price_lookup(items)   # one query, reused below
for item in items:
    apply_price(item, lookup)`}
        </pre>
        <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">Architectural strategy</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Use <strong>Global Scripts</strong> for cross-product logic.</li>
          <li>Use <strong>Custom Tables</strong> for large attribute datasets instead of hard-coded JSON strings.</li>
          <li>Minimize <strong>REST API calls</strong> inside the configuration engine.</li>
        </ul>
      </>
    ),
  },
  {
    slug: 'sap-cpq-and-s4hana-avc',
    category: 'Integration',
    title: 'SAP CPQ & S/4HANA: The AVC Bridge',
    excerpt: 'How to map complex CPQ attributes to S/4HANA Advanced Variant Configuration characteristics.',
    readTime: '4 min read',
    author: 'Connecting Cloud SAP Practice',
    content: (
      <>
        <p className="text-lg leading-relaxed">
          A common failure point in quote-to-cash projects is the translation gap between sales logic (CPQ) and production logic (AVC).
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl">
            <p className="font-black text-blue-600 mb-2">CPQ side</p>
            <p className="text-sm text-slate-600">Customer experience, bundling, discounting and eligibility.</p>
          </div>
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
            <p className="font-black text-slate-900 mb-2">AVC side</p>
            <p className="text-sm text-slate-600">Technical constraints, BOM resolution, routing and production feasibility.</p>
          </div>
        </div>
        <p>
          Success needs a <strong>master-data-first</strong> mindset. Attributes in CPQ should map 1:1 to characteristics (CT04) in S/4HANA,
          so the sales order (VA01) can resolve the Super BOM as soon as it arrives through the interface.
        </p>
      </>
    ),
  },
  {
    slug: 'headless-cpq-with-sap-btp',
    category: 'Technical Strategy',
    title: 'Headless CPQ with SAP BTP',
    excerpt: 'Building custom configuration front-ends on BTP while using the SAP CPQ engine through its REST APIs.',
    readTime: '4 min read',
    author: 'Connecting Cloud SAP Practice',
    content: (
      <>
        <p className="text-lg leading-relaxed">
          <strong>Headless CPQ</strong> lets you embed configuration logic in partner portals, customer-facing sites and mobile apps
          while keeping one set of product rules.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-300 my-8">
          <div className="flex flex-col items-center"><Box className="text-blue-600" /><span className="text-xs font-bold mt-1">CPQ engine</span></div>
          <ArrowRight className="text-slate-300" />
          <div className="flex flex-col items-center"><LinkIcon className="text-blue-600" /><span className="text-xs font-bold mt-1">BTP API Management</span></div>
          <ArrowRight className="text-slate-300" />
          <div className="flex flex-col items-center"><LayoutGrid className="text-blue-600" /><span className="text-xs font-bold mt-1">React / UI5 app</span></div>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">Why teams do it</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Brand control: you own the configuration UI.</li>
          <li>Reach: the same logic serves sales users and end customers.</li>
          <li>Performance: the CPQ admin UI is decoupled from the end-user experience.</li>
        </ul>
      </>
    ),
  },
];
