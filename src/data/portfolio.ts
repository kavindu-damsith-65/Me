export const profile = {
  name: 'Kavindu Damsith',
  shortName: 'Kavindu',
  role: 'Full-stack Developer',
  location: 'Kegalle District, Sri Lanka',
  email: 'thilakarathnakdb.21@uom.lk',
  github: 'https://github.com/kavindu-damsith-65',
  linkedin: 'https://www.linkedin.com/in/kavindu-damsith-86696722a/',
  avatar: './images/kavindu-portrait.jpg',
  editorialPortrait: './images/kavindu-editorial.jpg',
  photoCredit: 'Chanuka Bandara Photography',
} as const

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
] as const

export type ProjectCategory = 'AI / ML' | 'Full stack' | 'Frontend' | 'Mobile' | 'Systems'
export type ProjectVisual = 'maple' | 'forknet' | 'upscale' | 'plate' | 'library' | 'compiler' | 'chip'

export interface Project {
  id: string
  number: string
  title: string
  eyebrow: string
  description: string
  detail: string
  technologies: string[]
  categories: ProjectCategory[]
  url: string
  linkLabel: string
  visual: ProjectVisual
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'maple-wraps',
    number: '01',
    title: 'Maple Wraps',
    eyebrow: 'Live storefront · Active build',
    description:
      'A full-stack platform for a Canadian event-floor-wrap business, turning custom floor, runner, and stage ideas into clear quote workflows.',
    detail:
      'The live public storefront is being extended with configurable quotes, vendor projects, guest-list collaboration, promotions, and event-day QR table lookup.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'MongoDB', 'Next.js'],
    categories: ['Full stack', 'Frontend'],
    url: 'https://maplewraps.ca/',
    linkLabel: 'Visit live site',
    visual: 'maple',
    featured: true,
  },
  {
    id: 'fork-net-rt',
    number: '02',
    title: 'ForkNetRT',
    eyebrow: 'Real-time AI research',
    description:
      'A research prototype exploring real-time video super-resolution for sharper live streams without losing sight of latency.',
    detail:
      'The wider project combines efficient super-resolution research with a public engineering prototype for video transport, live telemetry, and monitoring.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'FFmpeg', 'Flask', 'React'],
    categories: ['AI / ML', 'Frontend'],
    url: 'https://connect.cse.uom.lk/projects/115',
    linkLabel: 'View research project',
    visual: 'forknet',
  },
  {
    id: 'super-upscale-studio',
    number: '03',
    title: 'Super Upscale Studio',
    eyebrow: 'Frontend concept',
    description:
      'A polished interface concept for uploading, enhancing, comparing, and exporting video with AI super-resolution.',
    detail:
      'Designed around an intuitive before-and-after workflow with clear progress feedback and quality comparisons.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    categories: ['AI / ML', 'Frontend'],
    url: 'https://github.com/kavindu-damsith-65/super-upscale-studio',
    linkLabel: 'View repository',
    visual: 'upscale',
  },
  {
    id: 'plate-share',
    number: '04',
    title: 'PlateShare',
    eyebrow: 'Food-sharing ecosystem',
    description:
      'A multi-role mobile platform connecting buyers, food sellers, delivery partners, and organisations managing donations.',
    detail:
      'Includes discovery, basket and checkout flows, seller operations, donation requests, map-based order status, and delivery workflows.',
    technologies: ['React Native', 'Expo', 'Express', 'Sequelize', 'MySQL', 'Stripe'],
    categories: ['Mobile', 'Full stack'],
    url: '#contact',
    linkLabel: 'Ask about this project',
    visual: 'plate',
  },
  {
    id: 'subject-library',
    number: '05',
    title: 'Subject Library',
    eyebrow: 'Cross-platform learning',
    description:
      'A focused study-content app for organising subjects, topics, subtopics, and notes into a clear learning flow.',
    detail:
      'Pairs a Material 3 Flutter client with authentication and a REST API backed by MongoDB.',
    technologies: ['Flutter', 'Dart', 'Express', 'MongoDB', 'JWT'],
    categories: ['Mobile', 'Full stack'],
    url: 'https://github.com/kavindu-damsith-65/subject_library',
    linkLabel: 'View repository',
    visual: 'library',
  },
  {
    id: 'rpal-interpreter',
    number: '06',
    title: 'RPAL Interpreter',
    eyebrow: 'Language engineering',
    description:
      'A Python implementation of an RPAL language processor, from source text to evaluated result.',
    detail:
      'Includes lexical analysis, parsing, AST construction and standardisation, environments, and a CSE evaluation machine.',
    technologies: ['Python', 'Lexing', 'Parsing', 'AST', 'CSE Machine'],
    categories: ['Systems'],
    url: 'https://github.com/kavindu-damsith-65/PL-project-compiler-RPAL-',
    linkLabel: 'View repository',
    visual: 'compiler',
  },
  {
    id: 'nano-processor',
    number: '07',
    title: 'NanoProcessor',
    eyebrow: 'Digital systems',
    description:
      'A compact processor designed in VHDL to explore how instructions become signals, arithmetic, and state.',
    detail:
      'Connects an ALU, registers, instruction decoder, program ROM, control logic, and simulation testbenches.',
    technologies: ['VHDL', 'Digital Logic', 'ALU', 'Testbenches'],
    categories: ['Systems'],
    url: 'https://github.com/kavindu-damsith-65/nanoProcessor',
    linkLabel: 'View repository',
    visual: 'chip',
  },
]

export const journey = [
  {
    period: 'INDUSTRY',
    title: 'Engineering Internship',
    organisation: 'Cloud Solutions International',
    description:
      'Worked within a professional healthcare-technology engineering team, gaining hands-on experience in collaborative product delivery.',
    kind: 'Experience',
  },
  {
    period: 'CSE21',
    title: 'Computer Science & Engineering',
    organisation: 'University of Moratuwa',
    description:
      'Pursuing Computer Science & Engineering with project work spanning software engineering, databases, AI/ML, computer vision, and systems.',
    kind: 'Education',
  },
  {
    period: '2023 — Now',
    title: 'Building in public',
    organisation: 'Independent projects · GitHub',
    description:
      'Exploring full-stack products, cloud infrastructure, computer vision, developer tooling, and applied deep learning.',
    kind: 'Practice',
  },
] as const

export const achievements = [
  {
    value: '01',
    label: 'MoraXtreme 9.0',
    title: 'Finals champion',
    description:
      'Team White Lotus won the finals after placing first on the elimination scoreboard among 350+ teams.',
  },
  {
    value: '01',
    label: 'CYPHER 23',
    title: 'Hackathon champion',
    description:
      'Won the six-hour physical coding competition organised by the IEEE WIE affinity group at KDU.',
  },
  {
    value: '20+',
    label: 'Public repositories',
    title: 'A growing body of work',
    description:
      'Projects spanning full-stack engineering, mobile applications, AI/ML, cloud experiments, and computer systems.',
  },
] as const

export const capabilities = [
  {
    number: '01',
    title: 'Product engineering',
    description: 'Responsive interfaces and complete application flows built around real user needs.',
    tools: ['React', 'TypeScript', 'React Native', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Backend & cloud',
    description: 'Practical APIs, data layers, deployment foundations, and systems that can evolve.',
    tools: ['Node.js', 'Express', 'Flask', 'MySQL', 'Docker', 'Kubernetes'],
  },
  {
    number: '03',
    title: 'Intelligent systems',
    description: 'Applied machine-learning and computer-vision pipelines integrated into application prototypes.',
    tools: ['Python', 'PyTorch', 'OpenCV', 'YOLO', 'Deep Learning'],
  },
] as const

export const marqueeItems = [
  'React',
  'TypeScript',
  'Python',
  'Node.js',
  'MongoDB',
  'PyTorch',
  'Cloud',
  'Computer Vision',
  'Product Thinking',
] as const
