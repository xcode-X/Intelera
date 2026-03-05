/**
 * Default services used when API is unavailable (fallback for Nav and Services pages).
 * API returns same shape: { slug, title, shortDescription, description, features, process, ... }
 */
export const defaultServices = [
  {
    slug: 'security-assessment',
    title: 'Security Assessment',
    shortDescription: 'Comprehensive vulnerability and penetration testing.',
    description: 'We run scoped vulnerability scans and penetration tests to identify weaknesses before attackers do. Deliverables include prioritized findings and remediation guidance.',
    features: ['Vulnerability scanning', 'Penetration testing', 'Risk reporting'],
    process: [
      { step: 1, title: 'Scoping', description: 'Define scope and objectives.' },
      { step: 2, title: 'Assessment', description: 'Run tests and analyze findings.' },
      { step: 3, title: 'Report', description: 'Deliver actionable remediation plan.' },
    ],
  },
  {
    slug: 'secure-development',
    title: 'Secure Development',
    shortDescription: 'SDLC security, code review, and secure architecture.',
    description: 'Integrate security into your development lifecycle with secure code review, architecture assessment, and SAST/DAST tooling guidance.',
    features: ['Secure code review', 'Architecture review', 'SAST/DAST'],
    process: [],
  },
  {
    slug: 'compliance',
    title: 'Compliance & Audit',
    shortDescription: 'GDPR, SOC 2, ISO 27001 readiness.',
    description: 'Gap assessments, policy design, and audit support to get you ready for GDPR, SOC 2, ISO 27001, and industry-specific frameworks.',
    features: ['Gap assessment', 'Policy design', 'Audit support'],
    process: [],
  },
  {
    slug: 'web-security',
    title: 'Web Application Security',
    shortDescription: 'WAF, DDoS protection, and secure APIs.',
    description: 'Harden web applications and APIs with WAF deployment, API security review, and DDoS mitigation strategies.',
    features: ['WAF deployment', 'API security', 'DDoS mitigation'],
    process: [],
  },
  {
    slug: 'monitoring',
    title: 'Security Monitoring',
    shortDescription: 'SIEM, threat detection, incident response.',
    description: 'SIEM design, threat detection use cases, and incident response playbooks for 24/7 security operations.',
    features: ['SIEM design', 'Threat detection', 'IR playbooks'],
    process: [],
  },
  {
    slug: 'training',
    title: 'Security Training',
    shortDescription: 'Developer and staff security awareness.',
    description: 'Security awareness training, secure coding workshops, and phishing simulation to build a security-minded culture.',
    features: ['Awareness training', 'Secure coding', 'Phishing simulation'],
    process: [],
  },
];
