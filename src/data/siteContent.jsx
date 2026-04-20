import {
  Activity,
  Box,
  FileText,
  Repeat,
  Settings,
  Share2,
  Target,
  Truck,
  CreditCard,
} from 'lucide-react';

export const L2C_STAGES = [
  {
    id: 'lead',
    title: 'Lead & Opportunity',
    platform: 'Salesforce Sales Cloud',
    icon: <Target className="w-6 h-6" />,
    description:
      'Capture and qualify high-intent leads. We synchronize your marketing data with sales activity to ensure no prospect falls through the cracks.',
    deliverables: ['Lead Scoring Models', 'Automated Routing', 'Pipeline Forecasting'],
    color: 'bg-blue-500',
  },
  {
    id: 'quote',
    title: 'Configure, Price, Quote',
    platform: 'SAP CPQ',
    icon: <FileText className="w-6 h-6" />,
    description:
      'The "Engine Room." We build complex product configurations and pricing rules so your sales team can generate error-free quotes in minutes, not days.',
    deliverables: ['Pricing Guardrails', 'Automated Proposals', 'Margin Protection'],
    color: 'bg-blue-600',
  },
  {
    id: 'order',
    title: 'Order Management',
    platform: 'SAP S/4HANA',
    icon: <Truck className="w-6 h-6" />,
    description:
      'The Bridge. Upon contract signature, data flows instantly into S/4HANA for fulfillment, inventory check, and logistics triggering.',
    deliverables: ['Bi-directional Sync', 'Inventory Integration', 'ERP Automation'],
    color: 'bg-slate-700',
  },
  {
    id: 'billing',
    title: 'Billing & Revenue',
    platform: 'SAP Billing / Salesforce Billing',
    icon: <CreditCard className="w-6 h-6" />,
    description:
      'Revenue realization. We automate complex recurring billing, subscription management, and revenue recognition compliance.',
    deliverables: ['Subscription Billing', 'Rev-Rec Compliance', 'Payment Gateways'],
    color: 'bg-emerald-600',
  },
  {
    id: 'retention',
    title: 'Renewal & Growth',
    platform: 'The Unified Ecosystem',
    icon: <Repeat className="w-6 h-6" />,
    description:
      'Closing the loop. Using integrated data to predict churn and automate renewal quotes based on original contract terms.',
    deliverables: ['Renewal Automation', 'Churn Analytics', 'Upsell Triggers'],
    color: 'bg-indigo-600',
  },
];

export const SYSTEMS = [
  {
    id: 'sap-cpq',
    name: 'SAP CPQ',
    role: 'Enterprise Quote Engine',
    icon: <FileText size={22} />,
    desc: 'Complex pricing and multi-channel quoting.',
  },
  {
    id: 'sap-vc',
    name: 'SAP VC',
    role: 'Classic Configuration',
    icon: <Settings size={22} />,
    desc: 'Legacy variant configuration maintenance.',
  },
  {
    id: 'sap-sales-cloud',
    name: 'SAP Sales Cloud',
    role: 'CRM & Revenue Cloud',
    icon: <Target size={22} />,
    desc: 'Lead management and sales automation.',
  },
  {
    id: 's4-avc',
    name: 'S/4HANA AVC',
    role: 'Advanced Configuration',
    icon: <Box size={22} />,
    desc: 'High-performance variant configuration modeling.',
  },
  {
    id: 'sf',
    name: 'Salesforce',
    role: 'Revenue Cloud & CRM',
    icon: <Target size={22} />,
    desc: 'Primary customer interface and quote management.',
  },
  {
    id: 'sap-cpi',
    name: 'SAP CPI',
    role: 'Integration Suite',
    icon: <Share2 size={22} />,
    desc: 'Cloud-based orchestration and logic mapping.',
  },
];

export const EFFICIENCY_DATA = [
  { stage: 'Quoting', legacy: 45, nexa: 12 },
  { stage: 'Order Sync', legacy: 24, nexa: 2 },
  { stage: 'Billing', legacy: 72, nexa: 8 },
  { stage: 'Reporting', legacy: 30, nexa: 5 },
];

export const CASE_STUDIES = [
  {
    id: 1,
    client: 'Lead to Cash Integration',
    challenge:
      'Sales reps manually transferring opportunity data to finance teams, causing 12% order errors and 5-day fulfillment delays across departments.',
    solution:
      'Unified Salesforce Sales Cloud to SAP S/4HANA pipeline with automated data synchronization and real-time inventory validation.',
    results: [
      { label: 'Quote Accuracy', value: '100%' },
      { label: 'Entry Time', value: '-92%' },
      { label: 'Error Rate', value: '<1%' },
    ],
    tag: 'CRM → ERP',
  },
  {
    id: 2,
    client: 'CPQ to Billing Automation',
    challenge:
      'Complex subscription renewals tracked in spreadsheets. Billing cycles took 10 days to reconcile every month with manual intervention.',
    solution:
      'Salesforce CPQ & Billing integrated with SAP Finance for automated revenue recognition and subscription lifecycle management.',
    results: [
      { label: 'Billing Cycle', value: '2 Days' },
      { label: 'Revenue Leakage', value: '0%' },
      { label: 'Renewal Rate', value: '+15%' },
    ],
    tag: 'CPQ → Billing',
  },
  {
    id: 3,
    client: 'Multi-Level Approval Workflows',
    challenge:
      'Highly regulated pricing required 4 levels of manual approval. Complex quotes took 2 weeks to reach customers with compliance risks.',
    solution:
      'Automated approval workflows in SAP CPQ with real-time margin validation against S/4HANA costs and compliance guardrails.',
    results: [
      { label: 'Approval Time', value: '4 Hours' },
      { label: 'Margin Growth', value: '+4.5%' },
      { label: 'Sales Adoption', value: '98%' },
    ],
    tag: 'CPQ → ERP',
  },
];

export const SPECIALIZED_STACK = [
  { id: 'sap-cpq', name: 'SAP CPQ', role: 'Enterprise Quote Engine', icon: <FileText size={18} /> },
  { id: 'sap-vc', name: 'SAP Variant Config', role: 'Classic VC Modeling', icon: <Settings size={18} /> },
  { id: 'sf', name: 'Salesforce', role: 'Revenue Cloud & CRM', icon: <Target size={18} /> },
  { id: 's4-avc', name: 'S/4HANA AVC', role: 'Advanced VC Modeling', icon: <Box size={18} /> },
  { id: 'sap-cpi', name: 'SAP CPI', role: 'BTP Orchestration', icon: <Share2 size={18} /> },
  { id: 'ms-dyn', name: 'Dynamics 365', role: 'Unified Operations', icon: <Activity size={18} /> },
];
