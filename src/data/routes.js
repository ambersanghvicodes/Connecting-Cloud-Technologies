// Page titles and descriptions. Plain JS so vite.config.js can also use it
// to write a static index.html per route at build time.

export const SITE_NAME = 'Connecting Cloud Technologies';

export const ROUTE_META = {
  '/': {
    title: 'Connecting Cloud | SAP, Salesforce, AI & Managed Services',
    description:
      'Architecture-led consulting and hands-on delivery for complex enterprise landscapes: SAP S/4HANA, Salesforce, AI & automation, and managed application support.',
  },
  '/sap': {
    title: 'SAP S/4HANA, BTP & CPQ Services | Connecting Cloud',
    description:
      'S/4HANA implementation and rollouts across FI/CO, MM, SD, PP/PP-PI, QM and EWM; BTP Integration Suite, MDG, SAC; SAP CPQ and VC/AVC; data migration and cutover.',
  },
  '/salesforce': {
    title: 'Salesforce Services | Connecting Cloud',
    description:
      'Sales, Service, Experience and Data Cloud; Field Service; Agentforce; MuleSoft; LWC, Apex and OmniStudio delivery with a dedicated resource model.',
  },
  '/ai-automation': {
    title: 'AI & Automation Engineering | Connecting Cloud',
    description:
      'AI assistants and agents, Claude and OpenAI workflows, document and knowledge automation, and AI for SAP and Salesforce landscapes.',
  },
  '/managed-services': {
    title: 'SAP & Salesforce Managed Services / AMC | Connecting Cloud',
    description:
      'Hypercare, L2/L3 application support, integration monitoring, enhancements and release management with 8x5, extended and 24x7 coverage options.',
  },
  '/industries/pharma': {
    title: 'SAP for Pharma & Life Sciences | Connecting Cloud',
    description:
      'Validated SAP delivery for regulated manufacturing: CSV and IQ/OQ/PQ, batch, lot and expiry control, export compliance and integrating acquired plants.',
  },
  '/approach': {
    title: 'Our Delivery Approach | Connecting Cloud',
    description:
      'An SAP Activate-based approach with a decision gate: Discover, Prepare and Explore to a defensible decision, then Realize, Deploy and Run.',
  },
  '/erp-decision-sprint': {
    title: 'ERP Decision Sprint: a defensible decision in 3 weeks | Connecting Cloud',
    description:
      'Extend your current ERP or implement SAP S/4HANA? A three-week, fixed-scope sprint that ends in a decision pack: recommendation, roadmap, timeline, cost model and risks.',
  },
  '/team': {
    title: 'Our Team | Connecting Cloud',
    description:
      'A senior-led team with named capability owners across SAP functional, SAP technical and BTP, Salesforce, AI automation, data migration and support.',
  },
  '/insights': {
    title: 'Insights | Connecting Cloud',
    description: 'Practical notes from our architects on SAP CPQ, S/4HANA AVC, BTP and enterprise integration.',
  },
  '/contact': {
    title: 'Contact | Connecting Cloud',
    description: 'Talk to Connecting Cloud about SAP, Salesforce, AI & automation or managed services.',
  },
  '/privacy': {
    title: 'Privacy Notice | Connecting Cloud',
    description: 'How Connecting Cloud Technologies handles information submitted through this website.',
  },
};

// Static meta for article pages; keep in sync with src/data/articles.jsx.
export const ARTICLE_META = {
  'python-scripting-in-sap-cpq': {
    title: 'Python Scripting in SAP CPQ: Keeping Quotes Fast | Connecting Cloud',
    description: 'Moving beyond basic IronPython scripts to quote-level orchestration that stays fast as configuration logic grows.',
  },
  'sap-cpq-and-s4hana-avc': {
    title: 'SAP CPQ & S/4HANA: The AVC Bridge | Connecting Cloud',
    description: 'How to map complex CPQ attributes to S/4HANA Advanced Variant Configuration characteristics.',
  },
  'headless-cpq-with-sap-btp': {
    title: 'Headless CPQ with SAP BTP | Connecting Cloud',
    description: 'Building custom configuration front-ends on BTP while using the SAP CPQ engine through its REST APIs.',
  },
};
