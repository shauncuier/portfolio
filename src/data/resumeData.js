// Resume data for Jashedul Islam Shaun
// Sources: GitHub (shauncuier), jashedulislamshaun.com, 3s-soft.com, LinkedIn, Fiverr, Upwork

export const personalInfo = {
  name: 'Jashedul Islam Shaun',
  title: 'Full Stack Developer & E-commerce Specialist',
  location: 'Chittagong, Bangladesh',
  email: 'jashedulislamshaun@gmail.com',
  phone: '+880 1835 927634',
  website: 'https://jashedulislamshaun.com',
  photo: '/jashedul_islam_shaun.jpg',
  summary: `Dedicated Full Stack Developer and E-commerce Specialist with 5+ years of experience building modern, scalable web applications using the MERN stack. Founder & CEO of 3S-SOFT, a digital agency delivering web development, SEO, and e-commerce solutions for global businesses. Top Rated Plus seller on Fiverr and Top Rated developer on Upwork with 500+ projects delivered and 200+ satisfied clients worldwide. Passionate about creating exceptional digital experiences with clean, maintainable code.`,
  socialLinks: {
    github: 'https://github.com/shauncuier',
    linkedin: 'https://linkedin.com/in/jashedulislamshaun',
    facebook: 'https://facebook.com/jashedulislamshaun',
    stackoverflow: 'https://stackoverflow.com/users/30973604/jashedul-islam-shaun',
    fiverr: 'https://fiverr.com/jashedulislam',
    upwork: 'https://www.upwork.com/freelancers/~01c75e88b6540d813f',
  },
}

export const experience = [
  {
    id: 1,
    role: 'Founder & CEO',
    company: '3S-SOFT',
    companyUrl: 'https://3s-soft.com',
    location: 'Chittagong, Bangladesh',
    period: '2019 – Present',
    type: 'Full-time',
    description:
      'Leading a digital agency that delivers MERN stack web development, WordPress solutions, SEO services, eCommerce product listing, lead generation, graphic design, and virtual assistant support for global businesses.',
    highlights: [
      'Built and scaled a team delivering 500+ web projects for international clients',
      'Architected scalable MERN stack applications and SaaS platforms',
      'Established end-to-end e-commerce solutions with WooCommerce & Shopify',
      'Managed client relationships across Fiverr, Upwork, and direct channels',
      'Implemented SEO strategies increasing client organic traffic by 150%+',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Next.js', 'WordPress', 'WooCommerce', 'Shopify'],
  },
  {
    id: 2,
    role: 'Top Rated Plus Seller',
    company: 'Fiverr',
    companyUrl: 'https://fiverr.com/jashedulislam',
    location: 'Remote',
    period: '2020 – Present',
    type: 'Freelance',
    description:
      'Providing full-stack web development and e-commerce solutions to global clients with consistently high ratings and repeat business.',
    highlights: [
      'Achieved Level 2 Seller status with Top Rated Plus badge',
      'Maintained 4.9/5 rating across 400+ reviews',
      'Completed 250+ orders with < 1 hour average response time',
      'Specialized in React & Node.js development, e-commerce solutions, and API integrations',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'REST API'],
  },
  {
    id: 3,
    role: 'Top Rated Developer',
    company: 'Upwork',
    companyUrl: 'https://www.upwork.com/freelancers/~01c75e88b6540d813f',
    location: 'Remote',
    period: '2021 – Present',
    type: 'Freelance',
    description:
      'Delivering professional full-stack development services for businesses and startups on the Upwork platform.',
    highlights: [
      'Achieved 100% Job Success Score',
      'Served 50+ happy clients across diverse industries',
      'Logged 679+ billable hours on complex web projects',
      'Specialized in full-stack development, database design, and consulting',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'MongoDB', 'Node.js', 'Tailwind CSS'],
  },
]

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Education (B.Ed)',
    institution: 'Chittagong University',
    location: 'Chittagong, Bangladesh',
    period: '2020 – 2023',
    description:
      'Completed Bachelor of Education degree, combining pedagogical expertise with technical communication skills.',
  },
  {
    id: 2,
    degree: 'Diploma in Computer Science & Application (DCSA)',
    institution: 'Open University Bangladesh',
    location: 'Bangladesh',
    period: '2019 – 2021',
    description:
      'Comprehensive diploma covering computer science fundamentals, programming, and application development.',
  },
  {
    id: 3,
    degree: 'Complete Web Development Course',
    institution: 'Programming Hero',
    location: 'Online',
    period: '2024',
    description:
      'Intensive MERN Stack training with hands-on projects covering React, Node.js, Express, MongoDB, and modern web development practices.',
  },
]

export const skills = {
  frontend: {
    title: 'Frontend',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'TypeScript', level: 80 },
      { name: 'Next.js', level: 82 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  backend: {
    title: 'Backend',
    items: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Authentication', level: 82 },
      { name: 'PHP', level: 72 },
    ],
  },
  database: {
    title: 'Database',
    items: [
      { name: 'MongoDB', level: 88 },
      { name: 'Firebase', level: 82 },
      { name: 'MySQL', level: 75 },
    ],
  },
  ecommerce: {
    title: 'E-commerce',
    items: [
      { name: 'WooCommerce', level: 85 },
      { name: 'WordPress', level: 82 },
      { name: 'Shopify', level: 75 },
    ],
  },
  tools: {
    title: 'Tools & DevOps',
    items: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 78 },
      { name: 'Postman', level: 85 },
      { name: 'Vercel / Netlify', level: 80 },
    ],
  },
}

export const featuredProjects = [
  {
    id: 1,
    title: 'PortLedger',
    description:
      'Production-ready financial management system for C&F (Clearing & Forwarding) businesses. Handles multi-currency ledgers, shipment tracking, and financial reporting.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'MongoDB'],
    liveUrl: 'https://portledger.vercel.app/',
    githubUrl: 'https://github.com/shauncuier/portledger',
    year: '2025',
  },
  {
    id: 2,
    title: 'EmpowHR',
    description:
      'Comprehensive Employee Workload Monitoring & Management System with attendance tracking, task assignment, performance dashboards, and HR analytics.',
    technologies: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://empowhr-a46ca.web.app/',
    githubUrl: 'https://github.com/shauncuier/EmpowHR',
    year: '2025',
  },
  {
    id: 3,
    title: 'ServiceHub Pro',
    description:
      'Web platform connecting customers with electronics repair service providers. Features service listings, booking system, reviews, and provider dashboards.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Firebase Auth'],
    liveUrl: 'https://servicehub-pro-2eb79.web.app/',
    githubUrl: 'https://github.com/shauncuier/ServiceHub-Pro',
    year: '2024',
  },
  {
    id: 4,
    title: '3S-Soft Agency',
    description:
      'Official website for 3S-Soft digital agency. Professional B2B web presence showcasing services, portfolio, team, and client engagement.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://3s-soft.com/',
    githubUrl: 'https://github.com/shauncuier/3s-soft',
    year: '2025',
  },
  {
    id: 5,
    title: 'Dropshipzone Plugin',
    description:
      'Custom WooCommerce plugin for Dropshipzone integration. Automates product imports, inventory sync, and order fulfillment.',
    technologies: ['PHP', 'WordPress', 'WooCommerce', 'REST API'],
    githubUrl: 'https://github.com/shauncuier/dropshipzone',
    year: '2024',
  },
]

export const certifications = [
  {
    id: 1,
    name: 'Top Rated Plus Seller',
    issuer: 'Fiverr',
    year: '2023',
    badge: '🏆',
  },
  {
    id: 2,
    name: 'Top Rated Developer — 100% Job Success',
    issuer: 'Upwork',
    year: '2023',
    badge: '⭐',
  },
  {
    id: 3,
    name: 'Complete Web Development (MERN Stack)',
    issuer: 'Programming Hero',
    year: '2024',
    badge: '🎓',
  },
]

export const languages = [
  { name: 'Bengali', level: 'Native' },
  { name: 'English', level: 'Professional' },
]
