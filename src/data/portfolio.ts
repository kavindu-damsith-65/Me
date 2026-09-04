export const profile = {
  name: 'Kavindu Damsith',
  shortName: 'Kavindu',
  role: 'Full-stack Developer',
  location: 'Kegalle District, Sri Lanka',
  email: 'kavindudamsith65@gmail.com',
  github: 'https://github.com/kavindu-damsith-65',
  linkedin: 'https://www.linkedin.com/in/kavindu-damsith-86696722a/',
  avatar: './images/kavindu-portrait.jpg',
  editorialPortrait: './images/kavindu-editorial.jpg',
} as const

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
] as const

export type ProjectCategory = 'AI / ML' | 'Full stack' | 'Frontend' | 'Mobile' | 'Systems'
export type ProjectVisual =
  | 'maple'
  | 'forknet'
  | 'plate'
  | 'library'
  | 'health'
  | 'sign'
  | 'learning'
  | 'cinema'

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
  private?: boolean
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
    id: 'plate-share',
    number: '03',
    title: 'PlateShare',
    eyebrow: 'Mobile food-sharing ecosystem',
    description:
      'A multi-role mobile platform connecting buyers, food sellers, delivery partners, and organisations coordinating donations.',
    detail:
      'I led the buyer module and completed the organisation and delivery flows, covering discovery, donations, live order status, maps, media, email, and Stripe payments.',
    technologies: ['React Native', 'Expo', 'Express', 'Sequelize', 'MySQL', 'Stripe'],
    categories: ['Mobile', 'Full stack'],
    url: 'https://github.com/kavindu-damsith-65/PlateShare',
    linkLabel: 'View repository',
    visual: 'plate',
  },
  {
    id: 'health-link',
    number: '04',
    title: 'HealthLink',
    eyebrow: 'Healthcare platform · AI-assisted',
    description:
      'A competition-built healthcare platform connecting patients, doctors, appointments, reports, and brain-tumour MRI analysis.',
    detail:
      'Combines a React experience, Node and MySQL services, a Flask-based ResUNet segmentation pipeline, role-specific dashboards, and Kubernetes deployment assets.',
    technologies: ['React', 'Express', 'MySQL', 'Flask', 'ResUNet', 'Kubernetes'],
    categories: ['AI / ML', 'Full stack'],
    url: 'https://github.com/kavindu-damsith-65/healthLink',
    linkLabel: 'View repository',
    visual: 'health',
  },
  {
    id: 'hyper-talk',
    number: '05',
    title: 'HyperTalk',
    eyebrow: 'Real-time assistive technology',
    description:
      'A computer-vision system that translates American Sign Language gestures to make communication more accessible.',
    detail:
      'The commercial prototype translates sign language to speech and back, joining a Flutter experience with Django, MediaPipe, OpenCV, TensorFlow, and text-to-speech.',
    technologies: ['Flutter', 'TensorFlow', 'MediaPipe', 'OpenCV', 'Django', 'TTS'],
    categories: ['AI / ML', 'Mobile', 'Full stack'],
    url: '#contact',
    linkLabel: 'Request private case study',
    visual: 'sign',
    private: true,
  },
  {
    id: 'abacus-learning',
    number: '06',
    title: 'Abacus Learning',
    eyebrow: 'Full-stack education platform',
    description:
      'A commercial learning platform for a UK client that helps children develop mental-calculation skills.',
    detail:
      'Implements progressive lesson unlocking, payments, file delivery, notifications, dashboards, real-time updates, and cloud media storage.',
    technologies: ['React', 'Node.js', 'MySQL', 'Socket.IO', 'Stripe', 'AWS S3'],
    categories: ['Full stack', 'Frontend'],
    url: '#contact',
    linkLabel: 'Request private case study',
    visual: 'learning',
    private: true,
  },
  {
    id: 'movie-tickets',
    number: '07',
    title: 'Cinema Booking Platform',
    eyebrow: 'Transactional full-stack system',
    description:
      'An end-to-end cinema experience for movie discovery, schedules, theatre search, seat selection, and secure checkout.',
    detail:
      'Backed by temporary reservations, refunds, reviews, comments, chatbot assistance, discounts, promo codes, Stripe payments, Socket.IO updates, and broad test coverage.',
    technologies: ['React', 'Express', 'Sequelize', 'MySQL', 'Stripe', 'Socket.IO'],
    categories: ['Full stack', 'Frontend'],
    url: '#contact',
    linkLabel: 'Request private case study',
    visual: 'cinema',
    private: true,
  },
  {
    id: 'subject-library',
    number: '08',
    title: 'Subject Library',
    eyebrow: 'Cross-platform learning',
    description:
      'A focused study-content app for organising subjects, topics, subtopics, and notes into a clear learning flow.',
    detail:
      'Pairs a Flutter client and persistent local preferences with authentication and a REST API backed by Express and MongoDB.',
    technologies: ['Flutter', 'Dart', 'Express', 'MongoDB', 'JWT'],
    categories: ['Mobile', 'Full stack'],
    url: 'https://github.com/kavindu-damsith-65/subject_library',
    linkLabel: 'View repository',
    visual: 'library',
  },
]

export interface ProjectArchiveItem {
  id: string
  number: string
  title: string
  description: string
  detail: string
  highlights: string[]
  technologies: string[]
  categories: ProjectCategory[]
  url: string
  linkLabel: string
  private?: boolean
}

export const education = [
  {
    period: '2022 — 2026',
    qualification: 'B.Sc. (Hons) in Computer Science & Engineering',
    institution: 'University of Moratuwa',
    note: 'Academic requirements completed in June 2026.',
  },
  {
    period: '2020',
    qualification: 'G.C.E. Advanced Level · Physical Science',
    institution: 'Sri Lanka',
    note: 'Three A passes.',
  },
  {
    period: '2017',
    qualification: 'G.C.E. Ordinary Level',
    institution: 'Sri Lanka',
    note: 'Nine A passes.',
  },
] as const

export const projectArchive: ProjectArchiveItem[] = [
  {
    id: 'super-upscale-studio',
    number: '09',
    title: 'Super Upscale Studio',
    description: 'A polished before-and-after workspace for AI video enhancement, comparison, progress, and export.',
    detail: 'An interface exploration for making a technically complex super-resolution workflow feel direct, visual, and understandable. The workspace keeps source media, enhancement settings, progress feedback, and output comparison in one focused flow.',
    highlights: ['Side-by-side quality comparison', 'Clear enhancement progress states', 'Responsive component-driven interface', 'Export-focused workflow with visible processing feedback'],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    categories: ['AI / ML', 'Frontend'],
    url: 'https://github.com/kavindu-damsith-65/super-upscale-studio',
    linkLabel: 'Repository',
  },
  {
    id: 'quote-designer',
    number: '10',
    title: 'Quote Designer',
    description: 'Interactive floor, runner, and stage estimators with dynamic dimension diagrams and validation.',
    detail: 'A focused quotation experience created while evolving Maple Wraps, designed to turn physical measurements into a confident digital request. Separate calculation paths handle different products while immediate diagrams and validation reduce measurement mistakes before a quote is submitted.',
    highlights: ['Floor, runner, and stage calculators', 'Diagrams respond to entered dimensions', 'Validation and limitation guidance', 'Reusable estimator architecture for multiple product types'],
    technologies: ['React', 'TypeScript', 'Vitest', 'Tailwind CSS'],
    categories: ['Frontend', 'Full stack'],
    url: '#contact',
    linkLabel: 'Private case study',
    private: true,
  },
  {
    id: 'route-optima',
    number: '11',
    title: 'Supply Chain · RouteOptima',
    description: 'An academic supply-chain system with customer, shop, order, route-assignment, dashboard, and payment flows.',
    detail: 'Built as a second-semester database project to reduce operational friction across ordering, fulfilment, and route coordination. The application connects customer actions to shop operations, payment records, route decisions, and management views through a relational data model.',
    highlights: ['Role-based customer and shop workflows', 'Order and route assignment operations', 'Relational MySQL data model', 'Operational dashboards and payment records'],
    technologies: ['React', 'Express', 'MySQL', 'Material UI'],
    categories: ['Full stack', 'Frontend'],
    url: 'https://github.com/kavindu-damsith-65/routeOptima',
    linkLabel: 'Repository',
  },
  {
    id: 'train-gps',
    number: '12',
    title: 'TrainGPS Safety Intelligence',
    description: 'Railway GPS and geospatial analysis with ESP32 capture plus crack and location prediction experiments.',
    detail: 'A safety system that calculates location-based danger percentages from historical railway data while monitoring driver attention in real time. GPS readings captured through an ESP32 are combined with geospatial experiments so risk can be interpreted against where the train is currently travelling.',
    highlights: ['Real-time GPS capture with ESP32', 'Machine-learning danger estimation', 'Driver-attention monitoring', 'Geospatial analysis against historical railway data'],
    technologies: ['Python', 'Jupyter', 'PHP', 'ESP32', 'Geospatial ML'],
    categories: ['AI / ML', 'Systems'],
    url: 'https://github.com/kavindu-damsith-65/trainGpsv3',
    linkLabel: 'Repository',
  },
  {
    id: 'ai-video-generation',
    number: '13',
    title: 'AI Video Generation Studio',
    description: 'A script-to-media prototype combining a React workflow with diffusion and transformer services.',
    detail: 'A practice project for exploring how written prompts and scripts can drive generative-media pipelines through approachable web controls. It separates the React authoring experience from Python generation services, making the experimental pipeline easier to operate and extend.',
    highlights: ['Script-led generation workflow', 'Diffusion and transformer experiments', 'Python service with React controls', 'Clear separation between generation services and UI'],
    technologies: ['React', 'Python', 'FastAPI', 'Diffusers', 'Transformers'],
    categories: ['AI / ML', 'Full stack'],
    url: 'https://github.com/kavindu-damsith-65/AIVideoGeneration',
    linkLabel: 'Repository',
  },
  {
    id: 'vegetable-vision',
    number: '14',
    title: 'Vegetable Vision',
    description: 'A browser-based image-upload pipeline for vegetable recognition and visual results.',
    detail: 'YOLOv5 was retrained on a custom vegetable dataset, then wrapped in a lightweight Flask interface for practical browser-based inference. The project covers the complete path from dataset preparation and model training to uploaded-image prediction and visual results.',
    highlights: ['Custom dataset training', 'YOLOv5 detection and classification', 'Flask image-upload workflow', 'End-to-end model-to-browser integration'],
    technologies: ['Python', 'Flask', 'YOLOv5', 'OpenCV'],
    categories: ['AI / ML', 'Full stack'],
    url: 'https://github.com/kavindu-damsith-65/vegitableClassificationWeb',
    linkLabel: 'Repository',
  },
  {
    id: 'rpal-interpreter',
    number: '15',
    title: 'RPAL Interpreter',
    description: 'A language processor covering lexing, parsing, AST standardisation, environments, and CSE evaluation.',
    detail: 'An academic compiler project implementing the RPAL processing path from source program through an abstract syntax tree to CSE-machine execution. The implementation makes each transformation stage explicit, from lexical structure and parsing to standardized trees, environments, and final evaluation.',
    highlights: ['Recursive parsing and AST generation', 'Tree standardisation', 'CSE machine evaluation', 'Environment and scope handling'],
    technologies: ['Python', 'Parsing', 'AST', 'CSE Machine'],
    categories: ['Systems'],
    url: 'https://github.com/kavindu-damsith-65/PL-project-compiler-RPAL-',
    linkLabel: 'Repository',
  },
  {
    id: 'nano-processor',
    number: '16',
    title: 'NanoProcessor',
    description: 'A compact VHDL processor joining an ALU, registers, decoder, program ROM, control, and testbenches.',
    detail: 'A digital-systems build that turns processor fundamentals into synthesizable VHDL modules and repeatable Vivado simulations. Individual datapath and control components are assembled into a compact processor and verified with component-level testbenches.',
    highlights: ['Modular 4-bit datapath', 'Instruction decoder and program ROM', 'Component-level testbenches', 'Synthesizable component-based processor design'],
    technologies: ['VHDL', 'Vivado', 'Digital Logic', 'FPGA'],
    categories: ['Systems'],
    url: 'https://github.com/kavindu-damsith-65/nanoProcessor',
    linkLabel: 'Repository',
  },
  {
    id: 'feature-flag-lab',
    number: '17',
    title: 'Feature Flag Platform Lab',
    description: 'A Kubernetes comparison environment for FF4J, flagd/OpenFeature, Flagsmith, and Unleash.',
    detail: 'A deployment lab for comparing open feature-flag stacks under consistent Kubernetes and Kustomize conventions. Each platform is organized with repeatable manifests so operational behavior, configuration, and integration trade-offs can be evaluated on comparable ground.',
    highlights: ['Four feature-flag implementations', 'Reusable Kustomize bases', 'PostgreSQL-backed service deployments', 'Consistent environment for platform comparison'],
    technologies: ['Kubernetes', 'Kustomize', 'OpenFeature', 'PostgreSQL'],
    categories: ['Systems'],
    url: '#contact',
    linkLabel: 'Private case study',
    private: true,
  },
  {
    id: 'kubernetes-scaling',
    number: '18',
    title: 'Kubernetes Scaling Challenge',
    description: 'Deployments for healthcare API services using HPA, VPA, ConfigMaps, CSI, and scripted rollout tooling.',
    detail: 'Cloud-native deployment work informed by internship experience building clusters, containerizing services, tuning resources, and observing workloads. The setup coordinates workload definitions, runtime configuration, storage integration, and both horizontal and vertical scaling policies.',
    highlights: ['Horizontal and vertical pod autoscaling', 'Configuration and secret separation', 'Repeatable scripted deployment', 'Storage and CSI integration for service workloads'],
    technologies: ['Kubernetes', 'HPA', 'VPA', 'Kustomize', 'Shell'],
    categories: ['Systems'],
    url: '#contact',
    linkLabel: 'Private case study',
    private: true,
  },
  {
    id: 'parallel-linked-lists',
    number: '19',
    title: 'Concurrent Linked-List Benchmark',
    description: 'Serial, mutex, and read-write-lock implementations measured across controlled workloads and thread counts.',
    detail: 'A parallel-programming study comparing synchronization strategies while keeping initialization and workload generation outside timed operations. Multiple thread and operation mixes are executed consistently, exported to CSV, and visualized so lock overhead and workload behavior can be compared.',
    highlights: ['Serial, mutex, and RWLock variants', 'Controlled multi-threaded workloads', 'Automated CSV results and plots', 'Fair timing boundaries around list operations'],
    technologies: ['C', 'Pthreads', 'Python', 'Benchmarking'],
    categories: ['Systems'],
    url: '#contact',
    linkLabel: 'Private case study',
    private: true,
  },
  {
    id: 'xenzer-health',
    number: '20',
    title: 'Xenzer Health Portal',
    description: 'A role-based healthcare portal for appointments, medical reports, doctors, rooms, and administration.',
    detail: 'A server-rendered healthcare system organizing patient-facing services and operational tools across distinct role-based areas. The portal brings appointments, medical records, doctor availability, rooms, and administrative actions into a connected PHP and MySQL application.',
    highlights: ['Appointment and report workflows', 'Doctor and administration areas', 'PHP and MySQL application architecture', 'Role-aware navigation and operational views'],
    technologies: ['PHP', 'JavaScript', 'MySQL', 'CSS'],
    categories: ['Full stack'],
    url: 'https://github.com/kavindu-damsith-65/xenzer',
    linkLabel: 'Repository',
  },
  {
    id: 'vsr-streaming-console',
    number: '21',
    title: 'VSR Streaming Console',
    description: 'A multi-surface video pipeline for upload, native-FPS preview, GPU streaming, telemetry, and real-time controls.',
    detail: 'A companion engineering environment for the wider ForkNetRT research effort. A Flask producer extracts source metadata with FFprobe, controls playback, exposes an MJPEG preview, and launches low-latency CUDA/NVENC streaming, while React and PySide interfaces surface video state and runtime metrics.',
    highlights: ['FFprobe metadata extraction and native-FPS playback', 'CUDA/NVENC MPEG-TS stream orchestration', 'MJPEG preview with start, pause, and stop controls', 'React dashboard and PySide monitoring client'],
    technologies: ['Python', 'Flask', 'FFmpeg', 'CUDA', 'React', 'PySide6'],
    categories: ['AI / ML', 'Systems', 'Frontend'],
    url: 'https://github.com/kavindu-damsith-65/VsrPipelineV2',
    linkLabel: 'Repository',
  },
  {
    id: 'antikythera',
    number: '22',
    title: 'Antikythera Test Generator',
    description: 'Java tooling that analyses Spring controllers and their dependencies to support automated application test generation.',
    detail: 'Developed and tested during my Cloud Solutions International internship. Antikythera parses controller source with JavaParser, resolves repositories, interfaces, DTOs, annotations, and dependency graphs, then uses evaluators and generators to construct focused Spring test assets without assuming every application type is already packaged.',
    highlights: ['Spring controller parsing with JavaParser', 'Dependency graph, DTO, interface, and repository resolution', 'Runtime evaluation and argument-generation utilities', 'Extensive unit and integration test coverage'],
    technologies: ['Java', 'Spring', 'JavaParser', 'Maven', 'JUnit'],
    categories: ['Systems', 'Full stack'],
    url: 'https://github.com/kavindu-damsith-65/antikythera',
    linkLabel: 'Repository',
  },
  {
    id: 'openfeature-load-lab',
    number: '23',
    title: 'OpenFeature Load Lab',
    description: 'A Spring Boot experiment for evaluating flagd-backed feature flags under highly concurrent access.',
    detail: 'A focused OpenFeature integration and load experiment built with Java 17. The application configures a TLS-connected flagd provider, exposes a reusable evaluation service, and runs repeated batches of 4,000 flag lookups through a controlled executor so response behavior and timing can be observed.',
    highlights: ['OpenFeature SDK with the flagd provider', 'TLS provider configuration and evaluation client', 'Repeated concurrent worker batches', 'Timing output for comparative performance checks'],
    technologies: ['Java 17', 'Spring Boot', 'OpenFeature', 'flagd', 'Maven'],
    categories: ['Systems'],
    url: 'https://github.com/kavindu-damsith-65/feature-flag-demo',
    linkLabel: 'Repository',
  },
  {
    id: 'iot-occupancy-console',
    number: '24',
    title: 'IoT Occupancy Console',
    description: 'A PHP dashboard for registering connected components and receiving live occupancy and battery readings.',
    detail: 'An early end-to-end IoT web prototype that connects device-originated HTTP updates to a MySQL-backed operational dashboard. Components can be registered through the interface, while device endpoints update people counts and battery levels and return component-side configuration.',
    highlights: ['Component registration and administration flow', 'HTTP endpoints for embedded-device readings', 'Occupancy and battery-level persistence', 'PHP, JavaScript, and MySQL dashboard integration'],
    technologies: ['PHP', 'JavaScript', 'MySQL', 'IoT', 'ESP'],
    categories: ['Full stack', 'Systems'],
    url: 'https://github.com/kavindu-damsith-65/technoBeasts',
    linkLabel: 'Repository',
  },
  {
    id: 'data-structures-lab',
    number: '25',
    title: 'Data Structures Laboratory',
    description: 'A C++ implementation collection covering fundamental structures, algorithms, and their operational trade-offs.',
    detail: 'A progressive laboratory repository moving from sorting and stack implementations through linked lists, binary search trees, heaps, hash tables, and graph problems. The exercises emphasize implementing structures directly and understanding how their behavior changes across common operations.',
    highlights: ['Recursive and non-recursive quicksort', 'Array and linked-list stack implementations', 'BST, heap, and chained hash-table exercises', 'Graph algorithms and running-median practice'],
    technologies: ['C++', 'Algorithms', 'Data Structures', 'Graphs'],
    categories: ['Systems'],
    url: 'https://github.com/kavindu-damsith-65/dataStructuresLabs',
    linkLabel: 'Repository',
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
    value: '48',
    label: 'GitHub repositories',
    title: 'A growing body of work',
    description:
      'Public and private projects spanning full-stack engineering, mobile applications, AI/ML, cloud infrastructure, and computer systems.',
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
