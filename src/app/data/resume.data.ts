import { Resume } from './resume.model';

/**
 * All of the site's content lives here. Edit, save, and the page updates.
 * TypeScript will flag any field you mistype or forget.
 */
export const RESUME: Resume = {
  profile: {
    name: 'Jason Kng',
    title: 'Full Stack Developer',
    tagline:
      'I build secure, scalable enterprise platforms with Java, Spring Boot and Angular — from reverse-engineering legacy identity systems to running them on Kubernetes and OpenShift.',
    location: 'Singapore',
    email: 'jasonkngjunhui@hotmail.sg',
    // phone: '+65 0000 0000',
    availability: 'Open to new opportunities',
    featuredStack: [
      { label: 'backend', items: ['Java', 'Spring Boot', 'Redis'] },
      { label: 'security', items: ['OAuth 2.0', 'OpenID Connect'] },
      { label: 'frontend', items: ['Angular', 'RxJS', 'Signals'] },
      { label: 'platform', items: ['Kubernetes', 'OpenShift', 'Jenkins'] },
      { label: 'testing', items: ['JUnit 5', 'Playwright', 'k6'] },
      { label: 'ai', items: ['Claude Code'] },
    ],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jason-kng/', icon: 'linkedin' },
      { label: 'GitHub', url: 'https://github.com/jasonkng', icon: 'github' },
    ],
  },

  sections: [
    { id: 'about', label: 'About', title: 'About', visible: true },
    { id: 'experience', label: 'Experience', title: 'Experience', visible: true },
    { id: 'skills', label: 'Skills', title: 'Skills', visible: true },
    { id: 'education', label: 'Education', title: 'Education', visible: true },
    { id: 'contact', label: 'Contact', title: 'Contact', visible: true },
  ],

  summary: [
    'Technical professional with 5+ years of experience designing and delivering enterprise software solutions using Java, Spring Boot, and modern web technologies.',
    'Proven ability to work closely with business stakeholders and engineering teams to define requirements, prioritize features, and deliver secure, scalable products. Brings a strong understanding of software architecture, agile development, and data-driven decision-making to bridge the gap between product vision and technical execution.',
  ],

  highlights: [
    { value: '200K', label: 'Concurrent sessions on the in-house identity platform' },
    { value: '5+', label: 'Workstreams that now go live without a shell change' },
    { value: '6-figure', label: 'Annual subscription costs saved' },
    { value: '7', label: 'Developers led on the Citibank Taiwan migration' },
  ],

  skillGroups: [
    { name: 'Languages', skills: ['Java', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
    { name: 'Frontend', skills: ['Angular', 'RxJS', 'Angular Signals', 'Module Federation'] },
    { name: 'Backend', skills: ['Spring Boot', 'Spring', 'Spring Data JPA', 'Hibernate', 'OAuth 2.0/OIDC'] },
    { name: 'Data', skills: ['MySQL', 'MariaDB', 'Redis'] },
    { name: 'DevOps', skills: ['Docker', 'Kubernetes', 'OpenShift', 'Jenkins', 'Nginx', 'Apache', 'Maven', 'Git'] },
    { name: 'Observability & quality', skills: ['OpenTelemetry', 'Kibana', 'SonarQube'] },
    { name: 'Testing', skills: ['JUnit 5', 'Mockito', 'Spring Boot Test', 'Playwright', 'Jasmine', 'Karma', 'k6'] },
    { name: 'Tools', skills: ['Claude Code', 'Figma'] },
  ],

  experience: [
    {
      role: 'Full Stack Developer',
      company: 'DBS Bank Limited',
      start: 'May 2024',
      achievements: [
        'Reverse-engineered legacy and third-party identity systems to build an in-house Spring Boot and Angular platform supporting up to 200,000 concurrent sessions; implemented OAuth 2.0/OIDC authentication, token/session management, and Redis caching, saving six figures in annual subscription costs.',
        'Implemented a micro frontend architecture using Module Federation and Nginx routing, so 5+ workstreams can now go live independently, with no change request, package import, or full regression needed on the Angular shell.',
        'Translated business requirements into full-stack features: defined edge-case behavior with UX in Figma, shaped data models and API contracts, and turned those edge cases into AI-assisted tests using Claude Code, validated with JUnit 5, Mockito, Spring Boot Test, and Playwright.',
        'Migrated services end to end from manually managed VMs to Kubernetes/OpenShift, using containerization and automated scaling to improve deployment reliability, and added OpenTelemetry tracing across Angular and Spring Boot with logs centralized and searchable in Kibana.',
      ],
      tech: [
        'Spring Boot',
        'Angular',
        'OAuth 2.0/OIDC',
        'Redis',
        'Module Federation',
        'Nginx',
        'Figma',
        'Claude Code',
        'JUnit 5',
        'Playwright',
        'Kubernetes',
        'OpenShift',
        'OpenTelemetry',
        'Kibana',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'DBS Bank Limited',
      start: 'Sept 2021',
      end: 'Apr 2024',
      achievements: [
        'Led a team of 7 developers across frontend architecture, UX design, and backend integration to migrate Citibank Taiwan processes from an external platform to DBS’s in-house platform, ensuring compliance with internal design standards and delivery within six months.',
        'Owned and standardized a shared Angular dropdown component in an internal UI library, migrating inconsistent single- and multi-value handling to Angular ControlValueAccessor for consistent form integration and reusable value management across consuming applications.',
        'Early adopter of AI-assisted development, leveraging AI to generate and refine unit and integration test cases for shared Angular libraries using Jasmine and Karma, improving test coverage and supporting earlier bug detection across consuming applications.',
      ],
      tech: ['Angular', 'ControlValueAccessor', 'Jasmine', 'Karma'],
    },
    {
      role: 'BIM & 3D Printing Engineer',
      company: 'Witteveen+Bos South-East Asia Pte. Ltd.',
      start: 'Sept 2019',
      end: 'Aug 2020',
      achievements: [
        'Collaborated with Housing & Development Board (HDB) to design and prototype IBIS, an innovative web application that optimizes construction workflows, streamlines processes, and enhances operational efficiency.',
        'Engineered an Android application to replace the handheld QR scanner for seamless integration testing with IBIS, streamlining the process and reducing the testing timeline by approximately 75%.',
      ],
      tech: ['Android', 'IBIS'],
    },
  ],

  education: [
    {
      degree: 'Master of Engineering',
      field: 'Sustainable Infrastructure Engineering',
      school: 'Singapore Institute of Technology',
      start: '2021',
      end: '2021',
    },
    {
      degree: 'Bachelor of Engineering',
      field: 'Sustainable Infrastructure Engineering',
      school: 'Singapore Institute of Technology',
      start: '2017',
      end: '2020',
    },
  ],

  contact: {
    heading: 'Let’s build something together',
    message:
      'Whether it’s a full-stack role, a platform migration or an identity integration, I’d like to hear about it.',
  },
};
