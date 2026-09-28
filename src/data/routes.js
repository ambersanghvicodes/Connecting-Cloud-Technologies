// Every page: its URL, title, description and keywords. Plain JS so
// vite.config.js can also use it to write a static index.html per route.

export const SITE_URL = 'https://www.connectingcloud.co';

const PAGES = [
  {
    page: 'home', path: '/',
    title: 'SAP, Salesforce & AI Consulting | Connecting Cloud Technologies',
    description: 'SAP CPQ, Variant Configuration and S/4HANA specialists, with Salesforce, AI & automation and managed services. Implementations, migrations and support for manufacturing, life sciences, energy, process and technology companies.',
    keywords: 'SAP CPQ, SAP S/4HANA, Advanced Variant Configuration, SAP BTP, Salesforce, AI automation, SAP managed services, VC to AVC migration, ECC to S/4HANA',
  },
  {
    page: 'services', path: '/services',
    title: 'SAP & Salesforce Services | Connecting Cloud Technologies',
    description: 'SAP CPQ engineering, S/4HANA and AVC, BTP/CPI integration, Salesforce and managed services. Architect-led delivery for enterprise manufacturers.',
    keywords: 'SAP CPQ services, S/4HANA services, BTP CPI services, Salesforce services, SAP managed services',
  },
  {
    page: 'cases', path: '/cases',
    title: 'Implementation Briefs | Connecting Cloud Technologies',
    description: 'Representative SAP CPQ, S/4HANA AVC, Salesforce and BTP integration engagements delivered by our team.',
    keywords: 'SAP CPQ project, SAP AVC implementation, Salesforce Revenue Cloud project, BTP integration project',
  },
  {
    page: 'process', path: '/methodology',
    title: 'Delivery Methodology | Connecting Cloud Technologies',
    description: 'Our delivery framework for SAP and Salesforce programmes: clean core assessment, integration architecture, configuration engineering and resilient scaling.',
    keywords: 'SAP implementation methodology, SAP CPQ project approach, clean core, SAP delivery framework',
  },
  {
    page: 'insights', path: '/insights',
    title: 'SAP CPQ & AVC Technical Insights | Connecting Cloud',
    description: 'Technical notes on SAP CPQ scripting, S/4HANA AVC integration and headless CPQ on SAP BTP from Connecting Cloud architects.',
    keywords: 'SAP CPQ blog, SAP CPQ scripting, AVC integration, BTP headless CPQ, IronPython CPQ',
  },
  {
    page: 'l2c', path: '/l2c',
    title: 'Lead-to-Cash with SAP CPQ & S/4HANA | Connecting Cloud Technologies',
    description: 'End-to-end lead-to-cash across SAP Sales Cloud or Salesforce, SAP CPQ, S/4HANA and SAP billing, without manual handoffs.',
    keywords: 'lead to cash SAP, quote to cash, SAP CPQ S/4HANA integration, SAP billing',
  },

  // SAP specialist services
  {
    page: 'sap-cpq-implementation', path: '/sap-cpq-implementation',
    title: 'SAP CPQ Implementation Services | Connecting Cloud Technologies',
    description: 'End-to-end SAP CPQ implementation: guided selling, IronPython scripting, Responsive UI, pricing engine, and CRM/ERP integration. Quote 1.0 and 2.0.',
    keywords: 'SAP CPQ implementation, SAP CPQ consultant, SAP CPQ partner, IronPython CPQ, Responsive UI CPQ',
  },
  {
    page: 'sap-avc-implementation', path: '/sap-avc-implementation',
    title: 'SAP Variant Configuration & AVC Implementation | Connecting Cloud Technologies',
    description: 'SAP VC and Advanced Variant Configuration (AVC) implementation: knowledge base design, BOM explosion, CPS on BTP and CPQ integration.',
    keywords: 'SAP AVC implementation, SAP variant configuration, configure to order SAP, CPS BTP',
  },
  {
    page: 'sap-commissions-implementation', path: '/sap-commissions-implementation',
    title: 'SAP Commissions Implementation Services | Connecting Cloud Technologies',
    description: 'SAP Commissions (formerly Callidus) implementation: commission plan design, territory and quota management, and CPQ-to-Commissions integration.',
    keywords: 'SAP Commissions implementation, SAP ICM, Callidus implementation, incentive compensation management',
  },
  {
    page: 'sap-vc-to-avc-migration', path: '/sap-vc-to-avc-migration',
    title: 'SAP VC to AVC Migration | Connecting Cloud Technologies',
    description: 'SAP Variant Configuration to Advanced Variant Configuration migration: knowledge base assessment, parallel validation, CPS on BTP setup and cutover.',
    keywords: 'SAP VC to AVC migration, LO-VC to AVC, SAP AVC migration, variant configuration migration',
  },
  {
    page: 'sap-cpq-quote-2-migration', path: '/sap-cpq-quote-2-migration',
    title: 'SAP CPQ Quote 1.0 to Quote 2.0 Migration | Connecting Cloud Technologies',
    description: 'SAP CPQ Quote 1.0 to 2.0 migration: IronPython script adaptation, Responsive UI rebuild, Business Partner migration and integration retesting.',
    keywords: 'SAP CPQ Quote 2.0 migration, CPQ Quote 1 to 2, SAP CPQ upgrade, IronPython migration',
  },
  {
    page: 'ecc-to-s4hana-migration', path: '/ecc-to-s4hana-migration',
    title: 'SAP ECC to S/4HANA Migration | Connecting Cloud Technologies',
    description: 'SAP ECC to S/4HANA migration: brownfield, bluefield and greenfield paths, with VC-to-AVC migration run in parallel. Plan ahead of the 2027 ECC deadline.',
    keywords: 'SAP ECC to S4HANA migration, ECC migration 2027, brownfield S4HANA, greenfield SAP migration',
  },

  // Architecture deep dives
  {
    page: 'architecture', capability: 'avc', path: '/architecture/avc',
    title: 'SAP S/4HANA Advanced Variant Configuration (AVC) | Connecting Cloud',
    description: 'S/4HANA AVC constraint modelling, Super BOM resolution and routing automation for complex manufacturers.',
    keywords: 'SAP AVC, Advanced Variant Configuration, S/4HANA configuration, Super BOM',
  },
  {
    page: 'architecture', capability: 'cpq', path: '/architecture/cpq',
    title: 'SAP CPQ Integration & Configuration Architecture | Connecting Cloud',
    description: 'SAP CPQ with Python scripting, multi-level configuration, document generation and API-first headless architecture.',
    keywords: 'SAP CPQ integration, SAP CPQ architecture, headless CPQ, SAP CPQ REST API',
  },
  {
    page: 'architecture', capability: 'sf', path: '/architecture/sf',
    title: 'Salesforce Revenue Cloud & CPQ Integration | Connecting Cloud',
    description: 'Salesforce CPQ and Revenue Cloud: guided selling, dynamic pricing, subscription management and revenue recognition.',
    keywords: 'Salesforce CPQ, Salesforce Revenue Cloud, subscription billing',
  },
  {
    page: 'architecture', capability: 'btp', path: '/architecture/btp',
    title: 'SAP BTP & CPI Integration Architecture | Connecting Cloud',
    description: 'Event-driven SAP BTP/CPI integration connecting CPQ, CRM and ERP: iFlow design, API-first architecture and enterprise integration patterns.',
    keywords: 'SAP BTP, SAP CPI, SAP Integration Suite, CPI iFlow, SAP middleware',
  },

  // Capabilities
  {
    page: 'sap-s4hana', path: '/sap',
    title: 'SAP S/4HANA Implementation & Transformation | Connecting Cloud Technologies',
    description: 'S/4HANA implementation, rollouts and data migration across FI/CO, MM, SD, PP/PP-PI, QM, EWM and PM, with BTP integration, MDG and SAC.',
    keywords: 'SAP S/4HANA implementation, S/4HANA rollout, SAP FICO, SAP MM, SAP SD, SAP PP, SAP data migration',
  },
  {
    page: 'salesforce', path: '/salesforce',
    title: 'Salesforce Implementation & Enhancement | Connecting Cloud Technologies',
    description: 'Sales, Service, Experience and Data Cloud; Revenue Cloud; Field Service; Agentforce; LWC, Apex and OmniStudio, integrated with SAP.',
    keywords: 'Salesforce implementation, Salesforce consultant, Service Cloud, Revenue Cloud, Salesforce SAP integration',
  },
  {
    page: 'ai-automation', path: '/ai-automation',
    title: 'AI & Automation for SAP and Salesforce | Connecting Cloud Technologies',
    description: 'AI assistants and agents, document and support automation, and Claude/OpenAI workflows integrated with SAP and Salesforce.',
    keywords: 'enterprise AI, SAP AI, SAP Joule, Agentforce, document automation, AI agents',
  },
  {
    page: 'managed-services', path: '/managed-services',
    title: 'SAP & Salesforce Managed Services | Connecting Cloud Technologies',
    description: 'Hypercare, L2/L3 application support, integration monitoring, enhancements and release management with 8x5, extended and 24x7 coverage.',
    keywords: 'SAP managed services, SAP AMS, SAP support, Salesforce support, SAP AMC',
  },

  // Industries
  {
    page: 'industries', path: '/industries',
    title: 'Industries We Serve | Connecting Cloud Technologies',
    description: 'SAP and Salesforce delivery for industrial manufacturing, life sciences, energy and engineering, consumer and process industries, technology and global enterprises.',
    keywords: 'SAP manufacturing, SAP pharma, SAP energy, SAP process industries, SAP high tech',
  },
  {
    page: 'industrial-manufacturing', path: '/industries/industrial-manufacturing',
    title: 'SAP for Industrial Manufacturing | Connecting Cloud Technologies',
    description: 'Configure-to-order and engineer-to-order on SAP: CPQ, VC/AVC, S/4HANA manufacturing and PLM/CRM integration for industrial manufacturers.',
    keywords: 'SAP industrial manufacturing, configure to order, engineer to order SAP, SAP CPQ manufacturing',
  },
  {
    page: 'life-sciences', path: '/industries/pharma',
    title: 'SAP for Life Sciences & Pharma | Connecting Cloud Technologies',
    description: 'Validated SAP for pharma, diagnostics and healthcare: CSV and IQ/OQ/PQ, batch, lot and expiry control, and export compliance.',
    keywords: 'SAP pharma, validated SAP, SAP GxP, SAP batch management, SAP life sciences',
  },
  {
    page: 'energy-engineering', path: '/industries/energy-engineering',
    title: 'SAP for Energy & Engineering | Connecting Cloud Technologies',
    description: 'Engineer-to-order, project systems, plant maintenance and field service on SAP for energy and engineering companies.',
    keywords: 'SAP energy, SAP engineer to order, SAP PS, SAP PM, ServiceMax SAP',
  },
  {
    page: 'consumer-process', path: '/industries/consumer-process',
    title: 'SAP for Consumer & Process Industries | Connecting Cloud Technologies',
    description: 'Process manufacturing, batch and quality, warehouse and transport, and pricing on SAP S/4HANA for consumer and process industries.',
    keywords: 'SAP process manufacturing, SAP PP-PI, SAP EWM, SAP consumer products',
  },
  {
    page: 'technology-electronics', path: '/industries/technology-electronics',
    title: 'SAP & Salesforce for Technology Companies | Connecting Cloud Technologies',
    description: 'Quote-to-cash, partner portals, CRM-to-ERP integration and service contracts for technology and electronics companies.',
    keywords: 'SAP high tech, Salesforce technology companies, SAP CPQ electronics, quote to cash',
  },
  {
    page: 'global-enterprise', path: '/industries/global-enterprise',
    title: 'SAP for Global & Discrete Enterprises | Connecting Cloud Technologies',
    description: 'Global template design, country and plant rollouts, data migration and follow-the-sun SAP support for global enterprises.',
    keywords: 'SAP global template, SAP rollout, SAP data migration, SAP follow the sun support',
  },
];

export const PAGE_LIST = PAGES;

export const ROUTE_META = Object.fromEntries(PAGES.map((p) => [p.path, p]));

// URLs from earlier versions of the site that should land somewhere sensible.
export const PATH_ALIASES = {
  '/approach': '/methodology',
  '/erp-decision-sprint': '/',
  '/team': '/',
  '/privacy': '/',
  '/contact': '/',
};
