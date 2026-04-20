import React from 'react';
import { Box, Cpu, Target, Layers, FileText, Zap, Share2, Database } from 'lucide-react';

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'cases', label: 'Case Studies' },
  { id: 'process', label: 'CCT Method' },
  { id: 'insights', label: 'Cloud Insights' },
];

export const EXPERTISE_DATA = {
  avc: {
    title: 'SAP S/4HANA AVC',
    subtitle: 'Advanced Variant Configuration',
    description: 'The backbone of modern industrial manufacturing logic, providing high-performance configuration within the digital core.',
    leftCard: {
      icon: <Box size={32} />,
      title: 'High-Level Modeling',
      desc: 'Executing complex constraint-based logic directly within S/4HANA to eliminate data redundancy.',
      bullets: ['Constraint Net Optimization', 'Syntax-driven Logic', 'Performance-tuned Engines']
    },
    rightCard: {
      icon: <Cpu size={32} />,
      title: 'Back-end Integration',
      desc: 'Seamlessly connecting product models to production orders and material requirements planning (MRP).',
      bullets: ['Low-level Configuration', 'Super BOM Resolution', 'Routing Automation']
    }
  },
  sf: {
    title: 'Salesforce Revenue Cloud',
    subtitle: 'Lead-to-Cash Automation',
    description: 'Streamlining the quote-to-cash process by connecting CRM speed with enterprise-grade billing logic.',
    leftCard: {
      icon: <Target size={32} />,
      title: 'Guided Selling',
      desc: 'Empowering sales teams with intelligent guardrails and automated discount approvals.',
      bullets: ['CPQ Product Rules', 'Dynamic Pricing Tables', 'Contract Lifecycle Mgmt']
    },
    rightCard: {
      icon: <Layers size={32} />,
      title: 'Revenue Lifecycle',
      desc: 'Bridging the gap between a signed deal and recognized revenue through automated billing.',
      bullets: ['Subscription Management', 'Usage-based Billing', 'Revenue Recognition']
    }
  },
  cpq: {
    title: 'SAP CPQ Integration',
    subtitle: 'Complex Quoting Logic',
    description: 'Scalable cloud quoting that handles millions of attribute combinations without compromising on speed.',
    leftCard: {
      icon: <FileText size={32} />,
      title: 'Quoting Velocity',
      desc: 'Generating complex technical quotes in seconds using cloud-native configuration engines.',
      bullets: ['Python-based Scripting', 'Multi-level Configuration', 'Document Generation']
    },
    rightCard: {
      icon: <Zap size={32} />,
      title: 'API First approach',
      desc: 'Extending quoting capabilities to external portals and commerce sites via headless APIs.',
      bullets: ['RESTful Orchestration', 'Commerce Cloud Sync', 'Partner Portal Access']
    }
  },
  btp: {
    title: 'BTP & CPI Orchestration',
    subtitle: 'Enterprise Middleware',
    description: 'The "glue" that connects your disparate cloud systems into a single, cohesive business process.',
    leftCard: {
      icon: <Share2 size={32} />,
      title: 'Integration Suite',
      desc: 'Managing the traffic between SAP and non-SAP environments with industrial reliability.',
      bullets: ['Event-driven Architecture', 'Pre-packaged iFlows', 'Protocol Transformation']
    },
    rightCard: {
      icon: <Database size={32} />,
      title: 'Extensibility',
      desc: 'Building clean-core side-by-side extensions to keep your digital core upgrade-stable.',
      bullets: ['AppGyver No-code', 'CAP Model Services', 'HANA Cloud persistence']
    }
  }
};

export const EXPERTISE_ITEMS = [
  { id: 'avc', title: 'SAP S/4HANA AVC', icon: <Box size={16}/>, desc: 'Advanced Variant Configuration' },
  { id: 'sf', title: 'Salesforce Revenue Cloud', icon: <Target size={16}/>, desc: 'Lead-to-Cash automation' },
  { id: 'cpq', title: 'SAP CPQ Integration', icon: <FileText size={16}/>, desc: 'Complex quoting logic' },
  { id: 'btp', title: 'BTP & CPI Orchestration', icon: <Share2 size={16}/>, desc: 'Enterprise middleware' }
];

export const CASE_STUDIES = [
  {
    id: 1,
    client: "Global Industrial Corp",
    tag: "SAP S/4HANA",
    title: "Reducing Quote-to-Order time by 85%",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    stats: "85% faster processing"
  },
  {
    id: 2,
    client: "TechFlow Systems",
    tag: "Salesforce",
    title: "Global Revenue Cloud Implementation",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    stats: "$20M leakage prevented"
  },
  {
    id: 3,
    client: "Aerospace Dynamics",
    tag: "BTP Integration",
    title: "Harmonizing 12 Legacy ERP Systems",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    stats: "Real-time sync"
  }
];

export const BLOG_POSTS = [
  // ... (and so on for the rest of the data)
];