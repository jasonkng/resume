import { Resume } from './resume.model';

/**
 * All of the site's content lives here. Edit, save, and the page updates.
 * TypeScript will flag any field you mistype or forget.
 */
export const RESUME: Resume = {
  profile: {
    name: 'Jason Kng',
    initials: 'JK',
    title: 'Full Stack Developer',
    tagline:
      'I design and deliver secure, scalable enterprise software with Java, Spring Boot and Angular — from legacy reverse-engineering to cloud-native platforms.',
    location: 'Singapore',
    email: 'jasonkngjunhui@hotmail.sg',
    // phone: '+65 0000 0000',
    availability: 'Open to new opportunities',
    featuredStack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Redis', 'Kubernetes'],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jason-kng/', icon: 'linkedin' },
      { label: 'GitHub', url: 'https://github.com/jasonkng', icon: 'github' },
    ],
  },

  sections: [
    { id: 'about', label: 'About', title: 'Bridging product vision and engineering', visible: true },
    { id: 'skills', label: 'Skills', title: 'Tools I build with', visible: true },
    { id: 'experience', label: 'Experience', title: 'Where I have made an impact', visible: true },
    { id: 'education', label: 'Education', title: 'Academic background', visible: true },
    { id: 'contact', label: 'Contact', title: 'Get in touch', visible: true },
  ],

  summary: [
    'Technical professional with 5+ years of experience designing and delivering enterprise software solutions using Java, Spring Boot, and modern web technologies.',
    'Proven ability to work closely with business stakeholders and engineering teams to define requirements, prioritize features, and deliver secure, scalable products. Brings a strong understanding of software architecture, agile development, and data-driven decision-making to bridge the gap between product vision and technical execution.',
  ],

  highlights: [
    { value: '5+', label: 'Years building enterprise software' },
    { value: '200K', label: 'Concurrent sessions supported' },
    { value: '6-figure', label: 'Annual subscription savings' },
    { value: '7', label: 'Developers led end-to-end' },
  ],

  skillGroups: [
    { name: 'Languages', icon: 'code-slash', skills: ['Java', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
    {
      name: 'Frameworks',
      icon: 'layers',
      skills: ['Spring', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'Angular'],
    },
    { name: 'Data & Caching', icon: 'database', skills: ['MySQL', 'MariaDB', 'Redis'] },
    {
      name: 'Cloud & DevOps',
      icon: 'cloud-arrow-up',
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Nginx', 'Apache'],
    },
    {
      name: 'Testing',
      icon: 'check2-circle',
      skills: ['JUnit 5', 'Mockito', 'Spring Boot Test', 'Playwright', 'k6'],
    },
    { name: 'Tooling', icon: 'tools', skills: ['Git', 'Maven'] },
  ],

  experience: [
    {
      role: 'Full Stack Developer',
      company: 'DBS Bank Limited',
      start: 'May 2024',
      achievements: [
        'Reverse-engineered and documented undocumented legacy and third-party identity systems, translating complex authentication and authorization flows into a scalable in-house Spring Boot and Angular platform supporting up to 200,000 concurrent sessions; implemented token and session management, Redis-based caching, and system integrations, delivering six-figure annual subscription cost savings.',
        'Improved application deployment and runtime scalability by migrating services from manually managed virtual machine environments to Kubernetes/OpenShift, leveraging containerization and automated scaling to improve deployment reliability and operational efficiency.',
        'Designed and developed full-stack features across Spring Boot and Angular, integrating multiple REST APIs and supporting frontend micro frontend architecture while collaborating with engineering teams to define API contracts and deliver scalable user-facing workflows.',
        'Integrated AI-assisted development into unit and integration testing workflows across backend and frontend applications, accelerating test generation and refinement while validating results using JUnit 5, Mockito, Spring Boot Test, and Playwright.',
      ],
      tech: ['Spring Boot', 'Angular', 'Redis', 'Kubernetes', 'OpenShift', 'Micro Frontends', 'JUnit 5', 'Playwright'],
    },
    {
      role: 'Frontend Developer',
      company: 'DBS Bank Limited',
      start: 'Sept 2021',
      end: 'Apr 2024',
      achievements: [
        'Led a team of 7 developers in the end-to-end development of Citibank Taiwan processes on the DBS platform, driving frontend architecture decisions, collaborating with UX designers on interaction design, and delivering a production-ready solution within six months.',
        'Designed and developed reusable Angular shared libraries to standardize common frontend functionality across applications, managing library versioning and publishing packages to JFrog for consumption by downstream applications.',
        'Established automated unit and integration testing for shared frontend libraries using Jasmine and Karma, improving early bug detection by ~20% and strengthening code reliability and maintainability across consuming applications.',
      ],
      tech: ['Angular', 'TypeScript', 'Shared Libraries', 'JFrog', 'Jasmine', 'Karma'],
    },
    {
      role: 'BIM & 3D Printing Engineer',
      company: 'Witteveen+Bos South-East Asia Pte. Ltd.',
      start: 'Sept 2019',
      end: 'Aug 2020',
      achievements: [
        'Developed an Android-based QR-scanning application and integrated it with IBIS (Integrated Building Information System), a BIM-enabled construction workflow platform, to support logistics integration testing, replacing handheld scanners and reducing testing time by approximately 75%.',
        'Designed and modeled 3D-printable architectural components for housing, leveraging Revit, Rhino/Grasshopper, and Dynamo for BIM, parametric design, and automated geometry generation.',
      ],
      tech: ['Android', 'QR Scanning', 'Revit', 'Rhino/Grasshopper', 'Dynamo'],
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
    heading: "Let's build something great together",
    message:
      "Whether it's a full-stack role, a platform modernisation, or a tricky identity integration, I'd love to hear about it.",
  },
};
