/* ------------------------------------------------------------------ */
/*  Structured data for the portfolio — single source of truth.        */
/*  No invented URLs, dates, scores, or credentials live here.         */
/* ------------------------------------------------------------------ */

export const personalInfo = {
  name: 'Athul George',
  initials: 'AG',
  role: 'Computer Science & Engineering Student',
  tagline: 'Building useful digital experiences with code.',
  description:
    'Final-year B.Tech CSE student passionate about frontend development, React, and building useful software projects. Currently looking for internship opportunities to learn, grow, and contribute to meaningful projects.',
  email: 'athulgeorge010@gmail.com',
  phone: '6282584182',
  phoneHref: 'tel:+916282584182',
  phoneDisplay: '+91 62825 84182',
  linkedinUrl: 'https://in.linkedin.com/in/athul-george-483b38357',
  location: 'Pala, India',
  study: 'B.Tech Computer Science & Engineering',
  university: 'St. Joseph\'s College of Engineering and Technology, Pala',
  degreePeriod: '2023–2027',
};

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
];

/* Section ids used for the scroll-spy active indicator */
export const navSectionIds = navLinks.map((l) => l.href.slice(1));

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export const heroTechBadges = [
  { name: 'React', color: '#61dafb' },
  { name: 'Python', color: '#4f9ef8' },
  { name: 'Java', color: '#f5a85c' },
  { name: 'Git', color: '#f2745c' },
  { name: 'SQL', color: '#a78bfa' },
];

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */

export const aboutText = [
  'I\'m a final-year B.Tech Computer Science & Engineering student at St. Joseph\'s College of Engineering and Technology, Pala, who enjoys turning ideas into useful, working software. My focus is frontend development with React and the modern tooling around it, and I care about interfaces that feel clean, responsive and genuinely pleasant to use.',
  'Right now I\'m looking for an internship where I can learn from experienced teams, take on real problems and contribute to meaningful projects — while continuing to grow as an engineer.',
];

export const aboutFacts = [
  { icon: 'study', label: 'B.Tech CSE', value: '2023–2027', note: 'Currently pursuing' },
  { icon: 'location', label: 'Location', value: 'Pala, India' },
  { icon: 'code', label: 'Focus', value: 'Frontend Development' },
  { icon: 'spark', label: 'Learning', value: 'Modern Technologies' },
];

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */

export const primarySkills = [
  { name: 'React', caption: 'Component-based interfaces' },
  { name: 'Python', caption: 'Backend & scripting' },
  { name: 'Java', caption: 'OOP fundamentals' },
  { name: 'Git', caption: 'Version control & collaboration' },
  { name: 'SQL', caption: 'Relational data & queries' },
];

export const skillGroups = [
  { group: 'Languages', skills: ['C', 'TypeScript'] },
  { group: 'Backend & APIs', skills: ['Node.js', 'Express.js', 'FastAPI', 'REST API'] },
  { group: 'Data & AI', skills: ['MongoDB', 'MongoDB Atlas', 'Data Structures', 'Multi-Agent AI'] },
  { group: 'Frameworks & Libraries', skills: ['Next.js', 'Leaflet', 'Mapbox', 'GitHub'] },
];

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

export const projects = [
  {
    id: 'ucg',
    title: 'UCG',
    subtitle: 'Uber Code Generator',
    badge: 'AI-powered code engineering platform',
    description:
      'An AI-powered multi-agent code engineering platform that converts natural-language prompts into production-ready code in real time.',
    features: [
      'AI planning',
      'Code generation',
      'Validation',
      'Testing',
      'Security analysis',
      'Real-time streaming',
      'AI-generated setup guides',
      'Authentication',
      'Downloadable project files',
      'Modern interactive UI',
    ],
    technologies: ['Python', 'FastAPI', 'React', 'Multi-Agent AI', 'GitHub'],
    images: ['ucg1', 'ucg2'],
    featured: true,
    accent: 'blue',
    team: 'Group project',
    details: true,
  },
  {
    id: 'jaagratha',
    title: 'Jaagratha Portal',
    subtitle: 'Disaster management & emergency response',
    badge: 'Full-stack emergency response platform',
    description:
      'A full-stack disaster management and emergency response web application designed to support incident reporting, rescue coordination, and emergency response.',
    features: [
      'Interactive map',
      'Real-time incidents',
      'Disaster zones',
      'Nearest relief centers',
      'User-location-based mapping',
      'Citizen incident reporting',
      'Rescue coordination',
      'SMS emergency alerts',
      'AI-powered disaster report analysis',
      'MongoDB',
      'Authentication',
    ],
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Leaflet', 'Mapbox', 'GitHub'],
    images: ['jaagratha'],
    featured: false,
    accent: 'cyan',
    team: 'Group project',
  },
  {
    id: 'notely',
    title: 'Notely',
    subtitle: 'Full-Stack Note Management Application',
    badge: 'Full-stack notes app with REST APIs',
    description:
      'A full-stack note management application that allows users to create, edit, delete, and manage notes through REST APIs.',
    features: [
      'CRUD operations',
      'Responsive React interface',
      'Reusable components',
      'MongoDB Atlas',
      'REST API',
      'Dark mode',
      'Frontend/backend integration',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'REST API', 'GitHub'],
    images: ['notely'],
    featured: false,
    accent: 'violet',
    team: 'Group project',
  },
];

/* ------------------------------------------------------------------ */
/*  Experience & Learning                                              */
/* ------------------------------------------------------------------ */

export const experiences = [
  {
    id: 'pacelab',
    kind: 'Training',
    title: 'Full Stack Web Development Training',
    org: 'Pacelab',
    period: 'June 2025',
    summary:
      'Completed an intensive 2-week technical training program focused on full-stack web development architectures.',
    points: [
      'Frontend layout design',
      'Backend logic',
      'Application deployment workflows',
      'Modern web development practices',
      'Problem-solving',
    ],
  },
  {
    id: 'techfest',
    kind: 'Volunteering',
    title: 'College Tech Fest Volunteering',
    org: null,
    period: null,
    summary:
      'Volunteered for my college tech fest — supporting a large campus event and learning how teams coordinate to make things run smoothly.',
    points: [],
  },
];

/* ------------------------------------------------------------------ */
/*  Education                                                          */
/* ------------------------------------------------------------------ */

export const education = {
  degree: 'B.Tech in Computer Science and Engineering',
  institution: 'St. Joseph\'s College of Engineering and Technology',
  location: 'Pala, India',
  period: '2023–2027',
  status: 'Currently pursuing',
  note: 'KTU syllabus',
};

/* ------------------------------------------------------------------ */
/*  Certifications                                                     */
/* ------------------------------------------------------------------ */

export const certifications = [
  { provider: 'NPTEL', title: 'DBMS' },
  { provider: 'Infosys', title: 'Data Structures' },
  { provider: 'Infosys', title: 'Operating Systems' },
];

/* ------------------------------------------------------------------ */
/*  What I Do (Services)                                               */
/* ------------------------------------------------------------------ */

export const services = [
  {
    icon: 'monitor',
    title: 'Frontend Web Development',
    description: 'Build modern, responsive and interactive web experiences.',
  },
  {
    icon: 'react',
    title: 'React Development',
    description: 'Create reusable component-based interfaces using React.',
  },
  {
    icon: 'stack',
    title: 'Full-Stack Project Development',
    description:
      'Build applications connecting frontend interfaces with APIs, backend logic and databases.',
  },
];

/* ------------------------------------------------------------------ */
/*  Career CTA                                                         */
/* ------------------------------------------------------------------ */

export const cta = {
  heading: 'Looking for my next opportunity.',
  text: 'I\'m currently looking for frontend development and software development internship opportunities where I can learn from experienced teams, improve my skills, and contribute to meaningful projects.',
};

export const footerTagline = 'Building useful things. Learning continuously.';
