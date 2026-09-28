// Site content. Sourced from the Enterprise Applications capabilities deck
// (September 2026). Keep claims here traceable to something we can back up.

export const PRACTICES = [
  {
    id: 'sap',
    path: '/sap',
    name: 'SAP',
    tagline: 'S/4HANA, BTP, CPQ and VC/AVC',
    summary: 'Greenfield and brownfield S/4HANA, rollouts, integration, data migration and cutover.',
  },
  {
    id: 'salesforce',
    path: '/salesforce',
    name: 'Salesforce',
    tagline: 'Clouds, Agentforce and custom apps',
    summary: 'Sales, Service, Experience and Data Cloud, Field Service, MuleSoft and custom application delivery.',
  },
  {
    id: 'ai',
    path: '/ai-automation',
    name: 'AI & Automation',
    tagline: 'Assistants, agents and workflows',
    summary: 'AI assistants and agents, document and knowledge automation, and AI for SAP and Salesforce.',
  },
  {
    id: 'ams',
    path: '/managed-services',
    name: 'Managed Services',
    tagline: 'Hypercare, L2/L3 and AMC',
    summary: 'Post-go-live stabilization, application support, integration monitoring and SLA-based AMC.',
  },
];

export const PRACTICE_PAGES = {
  sap: {
    eyebrow: 'SAP Practice',
    title: 'SAP S/4HANA, end to end.',
    intro:
      'Solution architecture and hands-on delivery across the S/4HANA core, the integration and data platform around it, and configure-price-quote for complex products.',
    groups: [
      {
        title: 'S/4HANA',
        items: ['FI/CO', 'MM', 'SD', 'PP / PP-PI', 'QM', 'EWM', 'PM', 'PS', 'TM', 'Batch Management'],
      },
      {
        title: 'Platform, integration & analytics',
        items: ['SAP BTP Integration Suite (CPI)', 'SAP Analytics Cloud (SAC)', 'Master Data Governance (MDG)', 'ABAP & Fiori'],
      },
      {
        title: 'Configure, price & quote',
        items: ['SAP CPQ', 'LO-VC / AVC', 'CPS'],
      },
    ],
    highlights: [
      { title: 'Implementation models', desc: 'Greenfield and brownfield implementations, template rollouts and upgrades.' },
      { title: 'Data migration & cutover', desc: 'Master data, open transactions, inventory and balances, with mock loads, reconciliation and go-live controls.' },
      { title: 'Manufacturing depth', desc: 'Complex products, Super BOM and routing, variant pricing and PP/SD integration for MTO and ETO.' },
      { title: 'Integration', desc: 'API-led integration on BTP / CPI between S/4HANA, CRM, CPQ and non-SAP systems.' },
    ],
    showL2C: true,
  },
  salesforce: {
    eyebrow: 'Salesforce Practice',
    title: 'Salesforce, built around your process.',
    intro:
      'Delivery, enhancement and support across the Salesforce clouds, with the engineering depth to build custom applications and connect Salesforce to SAP.',
    groups: [
      { title: 'Clouds', items: ['Sales Cloud', 'Service Cloud', 'Experience Cloud', 'Marketing Cloud', 'Data Cloud'] },
      { title: 'Platform & integration', items: ['Field Service / ServiceMax', 'Agentforce', 'MuleSoft'] },
      { title: 'Engineering', items: ['Lightning Web Components', 'Apex', 'OmniStudio', 'Custom applications'] },
    ],
    highlights: [
      { title: 'Enhancements', desc: 'Ongoing improvement of existing orgs: new features, fixes and technical debt reduction.' },
      { title: 'Dedicated resource model', desc: 'A named team working as an extension of yours, on agreed scope and capacity.' },
      { title: 'Salesforce to SAP', desc: 'Opportunity-to-order and customer data flows between Salesforce, CPQ and S/4HANA.' },
    ],
  },
  ai: {
    eyebrow: 'AI & Automation Practice',
    title: 'AI that works inside your enterprise systems.',
    intro:
      'Engineering-led AI and automation that plugs into SAP, Salesforce and your document estate, built to be supported after it ships.',
    groups: [
      { title: 'AI', items: ['AI assistants and agents', 'Claude / OpenAI workflows', 'Enterprise search', 'SAP and Salesforce AI'] },
      { title: 'Automation', items: ['Document and knowledge automation', 'Support automation', 'Reconciliation platforms'] },
      { title: 'Engineering', items: ['Python', 'Java', 'Microservices', 'Kafka'] },
    ],
    highlights: [
      { title: 'Start from a process', desc: 'We pick a measurable workflow first, such as document intake or support triage, before choosing models.' },
      { title: 'Application modernization', desc: 'Integrations and automation that remove manual steps around your core applications.' },
      { title: 'Supportable by design', desc: 'Logging, monitoring and handover so automation keeps working after go-live.' },
    ],
  },
  ams: {
    eyebrow: 'Managed Services',
    title: 'Support after go-live, on your terms.',
    intro:
      'We structure support around agreed scope, SLA, criticality and coverage hours, from hypercare through to a long-term AMC.',
    groups: [
      { title: 'Hypercare', items: ['Immediate post-go-live stabilization', 'Issue triage', 'Business validation', 'Daily governance', 'Defect closure'] },
      { title: 'L2 / L3 support', items: ['Functional support', 'Technical root cause', 'Integration issue handling', 'Enhancements', 'Release support'] },
      { title: 'Integration monitoring', items: ['CPI / API failures', 'Interface reconciliation', 'Retry and exception handling', 'Monitoring dashboards', 'Recurring issue reduction'] },
    ],
    highlights: [
      { title: '8x5 standard', desc: 'Business-hours coverage for most application landscapes.' },
      { title: 'Extended hours', desc: 'Longer coverage windows for multi-shift plants and multiple time zones.' },
      { title: 'Critical 24x7', desc: 'Round-the-clock cover for business-critical processes and interfaces.' },
      { title: 'Dedicated resources', desc: 'Named consultants, with Hyderabad-based resource support.' },
    ],
    highlightsTitle: 'Coverage options',
  },
};

export const WHY_US = [
  { title: 'SAP enterprise delivery', desc: 'S/4HANA, ECC, CPQ, VC/AVC, CPI/BTP, data transition and integration.' },
  { title: 'Manufacturing understanding', desc: 'Complex products, BOMs, pricing, PP/SD integration and shop-floor-adjacent processes.' },
  { title: 'Pharma-relevant leadership', desc: 'Senior SAP leadership with CSV/GxP and pharma implementation experience.' },
  { title: 'Salesforce capability', desc: 'Sales Cloud, Service Cloud, LWC, Apex and custom application enhancement.' },
  { title: 'AI + automation engineering', desc: 'Python, integrations and enterprise automation to support modernization.' },
  { title: 'Support coverage', desc: 'Hypercare, L2/L3, integration monitoring, release support and SLA-based AMC.' },
];

export const EXPERIENCE = [
  { industry: 'Life sciences / healthcare', clients: ['Beckman Coulter', 'BDI Pharma'] },
  { industry: 'Industrial manufacturing', clients: ['Honeywell', 'Sulzer', 'Tennant', 'NLMK', 'American Air Filter', 'Applied Materials'] },
  { industry: 'Energy / engineering', clients: ['Baker Hughes', 'GE Aviation / Power Conversion / Oil & Gas'] },
  { industry: 'Consumer / process industries', clients: ['Essity', 'Metsä'] },
  { industry: 'Technology / electronics', clients: ['Fuji Xerox', 'Konica Minolta', 'Powell Electronics', 'Fireblocks'] },
  { industry: 'Discrete / global enterprise', clients: ['Mitsubishi'] },
];

export const EXPERIENCE_NOTE =
  'Selected experience of Connecting Cloud Technologies and its consulting team. Engagement models include direct delivery and SI / partner-led assignments. Where work was delivered through SIs or partners, it is not represented as a direct commercial customer relationship.';

export const PHARMA_CAPABILITIES = [
  { title: 'Validated SAP delivery', desc: 'CSV-compliant delivery with IQ/OQ/PQ, and every requirement traced to a test.' },
  { title: 'Batch, lot and expiry control', desc: 'Batch management, shelf-life and FEFO rules enforced for each market.' },
  { title: 'Export and regulated markets', desc: 'Export and tender order-to-cash with batch-level traceability for every shipment.' },
  { title: 'Plant integration after acquisition', desc: 'Decide early what follows a group template and what stays local.' },
  { title: 'Batch costing and finance', desc: 'Batch costing and multi-market finance from the first period close.' },
  { title: 'Contract manufacturing', desc: 'Domestic, export and contract-manufacturing sales, each tested as its own scenario.' },
];

export const PHARMA_PROOF = [
  {
    client: 'Julphar, UAE',
    tag: 'Validated SAP implementation',
    what: 'Validated SAP for a multi-dosage maker, including sterile injectables: batch, quality and export sales. CSV-compliant with IQ/OQ/PQ.',
    lesson: 'Plan validation from day one; trace every requirement to a test.',
  },
  {
    client: 'Mylan / Matrix Laboratories',
    tag: 'Pharma center of excellence',
    what: 'Multi-plant order-to-cash after acquisition by a US parent, with batch-controlled dispatch to regulated markets.',
    lesson: 'Decide early what follows a group template and what stays local.',
  },
  {
    client: 'Merck Sharp & Dohme',
    tag: 'Finance & controlling',
    what: 'FI/CO implementation and support for a manufacturer supplying medicines to 140+ countries.',
    lesson: 'Batch costing and multi-market finance from the first close.',
  },
  {
    client: 'NATCO Pharma',
    tag: 'Sales & distribution',
    what: 'Domestic, export and contract-manufacturing sales, with batch and expiry control through dispatch.',
    lesson: 'Test contract manufacturing as its own scenario.',
  },
  {
    client: 'Hetero Drugs',
    tag: 'Export order-to-cash',
    what: 'Export and tender order-to-cash with batch-level traceability for every shipment.',
    lesson: 'Prove traceability and system performance at export volume.',
  },
  {
    client: 'BDI Pharma, USA',
    tag: 'Distribution & cold chain',
    what: 'Lot and expiry control, consignment and cold-chain distribution of plasma therapies, vaccines and oncology products.',
    lesson: 'Enforce FEFO and shelf-life rules for each market.',
  },
  {
    client: 'Beckman Coulter',
    tag: 'Diagnostics quote-to-cash',
    what: 'SAP quote-to-cash for a diagnostics and laboratory-instruments maker: configurable products, pricing and quote-to-order integration.',
    lesson: 'Consistent product data and pricing from quote to order.',
  },
];

export const PHARMA_PROOF_NOTE =
  'Delivered by members of our team, including through previous employers; not all are Connecting Cloud contracts.';

export const APPROACH_PHASES = [
  {
    id: '01',
    name: 'Discover',
    focus: 'Business case & current state',
    items: ['Confirm goals and constraints', 'Current landscape', 'Data, interfaces, reports', 'Quality and compliance touchpoints'],
  },
  {
    id: '02',
    name: 'Prepare',
    focus: 'Mobilize the assessment',
    items: ['Governance and owners', 'Access and documents', 'Workstream plan', 'Weighted decision criteria'],
  },
  {
    id: '03',
    name: 'Explore',
    focus: 'Fit-to-standard / fit-gap',
    items: ['Process fit against the target platform', 'Industry scenario walkthroughs', 'Customization and risk', 'Recommendation inputs'],
  },
  {
    id: '04',
    name: 'Realize',
    focus: 'Build and validate',
    items: ['Configure the approved solution', 'Data migration cycles', 'Interfaces and reports', 'SIT / UAT / validation scripts'],
  },
  {
    id: '05',
    name: 'Deploy',
    focus: 'Cutover and go-live',
    items: ['Training and readiness', 'Cutover rehearsal', 'Final data load', 'Go-live governance'],
  },
  {
    id: '06',
    name: 'Run',
    focus: 'Hypercare and AMC',
    items: ['Stabilization and defect closure', 'L2/L3 support', 'Release and enhancement model', 'SLA / support transition'],
  },
];

// Index after which the decision gate sits (between Explore and Realize).
export const DECISION_GATE_AFTER = 2;

export const SPRINT = {
  questions: [
    'How soon can we go live?',
    'How much data must move, and how much can be archived?',
    'What will implementation cost?',
    'What AMC / support model fits after go-live?',
    'Which option fits our manufacturing and compliance needs long term?',
  ],
  weeks: [
    {
      label: 'Week 1',
      phase: 'Discover',
      items: ['Goals, constraints and timeline', 'Current landscape, data, interfaces and reports', 'Quality and compliance touchpoints'],
    },
    {
      label: 'Week 2',
      phase: 'Prepare',
      items: ['Owners and governance', 'Weighted decision criteria agreed with management', 'Workstream plan for the options'],
    },
    {
      label: 'Week 3',
      phase: 'Explore',
      items: ['Fit-to-standard / fit-gap per option', 'Industry scenario walkthroughs', 'Customization, risk and cost inputs'],
    },
  ],
  deliverables: ['Platform recommendation', 'Implementation roadmap', 'Timeline to go-live', 'Cost model incl. AMC', 'Data migration approach', 'Risk register'],
};

export const TEAM_LEADERSHIP = [
  {
    initials: 'PY',
    name: 'Prashant Yadav',
    role: 'Engagement & SAP Solution Lead',
    points: [
      'Client-facing solution ownership',
      'S/4HANA business process and solution leadership',
      'MTO / ETO and complex manufacturing solution architecture',
      'CPQ, VC/AVC, S/4 and end-to-end integration',
      'Governance, delivery oversight and issue resolution',
    ],
  },
  {
    initials: 'PS',
    name: 'Pallavi Sanghvi',
    role: 'SAP Solution & Transformation Architect',
    points: [
      'SAP BTP/CPI integration and API-led solutions',
      'Cross-functional process and solution design',
      'Legacy-to-SAP transformation and system integration',
      'Quote-to-Cash / Order-to-Cash transformation',
      'SAP VC/AVC and landscape architecture',
    ],
  },
  {
    initials: 'ST',
    name: 'Satish Kumar Tirupati',
    role: 'Senior SAP Program Advisor',
    points: [
      '34 years overall, 24 years SAP',
      'S/4 greenfield and brownfield leadership',
      'Pharma CSV/GxP and validation governance',
      'Migration, cutover and SI management',
    ],
  },
  {
    initials: 'AA',
    name: 'Anand Anbarasan',
    role: 'SAP SD / CS / CPQ & AMS Lead',
    points: [
      '18+ years SAP SD, CS, PS, EWM',
      '5 end-to-end implementations, 3 rollouts, 2 upgrades',
      'Production support and incident governance',
      'CPI / C4C / S/4 process integration',
    ],
  },
];

export const TEAM_PODS = [
  { initials: 'VK', name: 'Vikas Kumar', role: 'SAP FI/CO Lead', desc: 'S/4 Finance, GL/AP/AR/AA, CO, FI-MM/SD integration, cutover and support.' },
  { initials: 'SP', name: 'Shubham Patil', role: 'SAP MM / Ariba Lead', desc: 'P2P, sourcing, supplier lifecycle, master data, Ariba and MM support.' },
  { initials: 'AH', name: 'Amol Hatkar', role: 'SAP PP / PP-PI / QM Lead', desc: 'PP, VC/AVC, Super BOM and routing, variant pricing, QM alignment and manufacturing support.' },
  { initials: 'YS', name: 'Yashwant Singh', role: 'SAP Technical / BTP Lead', desc: 'SAP BTP, Integration Suite/CPI, ABAP, Fiori, SAC, security, roles and technical governance.' },
  { initials: 'SG', name: 'Shailender Gupta', role: 'Salesforce Delivery Lead', desc: 'Sales Cloud, Service Cloud, LWC, Apex, enhancements and dedicated resource model.' },
  { initials: 'AP', name: 'Abhinav Porwal', role: 'AI & Automation Lead', desc: 'Python, Java, microservices, Kafka, reconciliation platforms, Claude/OpenAI and automation engineering.' },
];

export const TEAM_SHARED_ROLES = [
  { role: 'Data Migration & Cutover Leadership', owners: 'Satish Kumar Tirupati + Anand Anbarasan', desc: 'Master data, open transactions, inventory, balances, mock loads, reconciliation and go-live controls.' },
  { role: 'Managed Services / AMS', owners: 'Anand Anbarasan', desc: 'Hypercare, L2/L3 support, releases, incidents, enhancements and AMC aligned to SLAs.' },
];

export const L2C_STAGES = [
  {
    id: 'lead',
    title: 'Lead & Opportunity',
    platform: 'Salesforce / SAP Sales Cloud',
    description: 'Capture and qualify opportunities so account, product and pricing context carries forward into the quote.',
    deliverables: ['Account and opportunity model', 'Guided selling inputs', 'CRM to CPQ hand-off'],
  },
  {
    id: 'quote',
    title: 'Configure, Price, Quote',
    platform: 'SAP CPQ',
    description: 'Turn complex product rules into valid quotes, with pricing guardrails and approvals that protect margin.',
    deliverables: ['Product and pricing models', 'Approval workflows', 'Quote document generation'],
  },
  {
    id: 'order',
    title: 'Order & Fulfillment',
    platform: 'SAP S/4HANA with VC / AVC',
    description: 'Accepted quotes become sales orders in S/4HANA, with configuration resolved into BOMs and routings for production.',
    deliverables: ['Sales order integration', 'Super BOM and routing resolution', 'Credit and availability checks'],
  },
  {
    id: 'cash',
    title: 'Billing & Revenue',
    platform: 'SAP S/4HANA Finance',
    description: 'Invoicing, collections and revenue recognition connected back to the original order and quote.',
    deliverables: ['Billing integration', 'Revenue recognition', 'Cash application'],
  },
];

export const SAP_SPECIALIST_SERVICES = [
  { path: '/sap-cpq-implementation', name: 'SAP CPQ Implementation', desc: 'Quote 1.0 & 2.0, scripting, integrations' },
  { path: '/sap-avc-implementation', name: 'SAP VC & AVC Implementation', desc: 'KB design, BOM, CPS on BTP' },
  { path: '/sap-commissions-implementation', name: 'SAP Commissions', desc: 'ICM, territory, quota management' },
  { path: '/sap-cpq-quote-2-migration', name: 'CPQ Quote 1.0 → 2.0', desc: 'Scripts, Responsive UI, Business Partners' },
  { path: '/sap-vc-to-avc-migration', name: 'VC → AVC Migration', desc: 'KB assessment, parallel validation, cutover' },
  { path: '/ecc-to-s4hana-migration', name: 'ECC → S/4HANA Migration', desc: 'Brownfield, bluefield, greenfield' },
];
