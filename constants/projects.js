export const PROJECTS = [
  {
    id: 'ai-recruitment-platform',
    title: 'AI Recruitment Platform',
    subtitle: 'End-to-end intelligent hiring platform',
    description:
      'A comprehensive AI-powered recruitment platform that automates candidate sourcing, screening, and matching using NLP and machine learning algorithms. Built for enterprise HR teams managing 10,000+ applications per month.',
    problem:
      'HR teams were drowning in unstructured resumes, spending 40+ hours per week on manual screening. Qualified candidates were being missed, and time-to-hire averaged 45 days — hurting business velocity.',
    solution:
      'Built an intelligent ATS that uses AI to parse, rank, and shortlist candidates automatically. Integrated real-time collaboration tools, automated interview scheduling, and analytics dashboards to give hiring managers complete visibility.',
    features: [
      'AI-powered resume parsing and skill extraction',
      'Intelligent candidate-job matching with weighted scoring',
      'Automated email sequences and interview scheduling',
      'Real-time analytics and hiring pipeline dashboards',
      'Role-based access control for HR teams',
      'Video interview integration with recording',
      'Chrome extension for LinkedIn candidate import',
      'Multi-tenant architecture for enterprise clients',
    ],
    architecture:
      'Microservice-inspired monolith on Next.js App Router with dedicated Node.js API service. MongoDB for flexible candidate data, Redis for session caching and job queue. REST APIs with JWT auth. AI features via OpenAI API with structured output parsing.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'OpenAI API', 'Tailwind CSS', 'Express.js', 'JWT', 'Docker'],
    category: 'AI / Enterprise SaaS',
    status: 'Production',
    impact: '60% reduction in time-to-hire, 10K+ monthly applications processed',
    github: 'https://github.com/ashishdiwedi',
    live: '#',
    featured: true,
    color: 'from-blue-500/20 to-purple-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 'drm-streaming-platform',
    title: 'DRM Video Streaming Platform',
    subtitle: 'Enterprise OTT platform with multi-DRM support',
    description:
      'A production-grade OTT video streaming platform with Widevine and FairPlay DRM protection, adaptive bitrate streaming, and comprehensive analytics. Serving 500K+ monthly active viewers with 99.9% uptime.',
    problem:
      'A media company needed a secure, scalable video streaming infrastructure to distribute premium content without piracy risk. Existing solutions were expensive, inflexible, or lacked the analytics depth needed for data-driven content decisions.',
    solution:
      'Built a complete OTT platform from scratch using Shaka Player for DRM-protected adaptive streaming. Integrated Mux for video processing and real-time analytics. Custom React player with offline download support and multi-device authentication.',
    features: [
      'Widevine L1/L3 and FairPlay DRM integration',
      'Adaptive bitrate streaming (DASH/HLS)',
      'Custom Shaka Player UI with accessibility support',
      'Mux video analytics and quality of experience metrics',
      'Offline download with encrypted local storage',
      'Multi-device concurrent stream limiting',
      'Content recommendation engine',
      'Subscription management and payment integration',
    ],
    architecture:
      'Next.js frontend with React custom player component using Shaka Player SDK. Node.js/Express backend for license server proxy and content metadata. MongoDB for user/subscription data, Redis for concurrent stream tracking. Mux for CDN and video processing.',
    tech: ['React.js', 'Shaka Player', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Mux', 'DRM', 'HLS/DASH'],
    category: 'OTT / Streaming',
    status: 'Production',
    impact: '500K+ MAU, 99.9% uptime, zero DRM breach incidents',
    github: 'https://github.com/ashishdiwedi',
    live: '#',
    featured: true,
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 'interview-assessment-platform',
    title: 'Interview Assessment Platform',
    subtitle: 'Live coding and behavioral assessment system',
    description:
      'A real-time technical interview and assessment platform with collaborative code editors, automated test case evaluation, behavioral video analysis, and structured scoring rubrics for engineering hiring.',
    problem:
      'Technical interviews were inconsistent, subjective, and time-consuming. Interviewers lacked tools for structured evaluation, and candidates had poor experiences with clunky third-party tools.',
    solution:
      'Built a custom assessment platform with live collaborative coding, automated test execution, video recording with timestamped notes, and structured scoring frameworks. Integrated with the AI Recruitment Platform for end-to-end hiring workflow.',
    features: [
      'Real-time collaborative code editor with syntax highlighting',
      'Multi-language code execution sandbox (15+ languages)',
      'Automated test case evaluation and scoring',
      'Video recording with interviewer timestamped notes',
      'Structured scoring rubrics and calibration tools',
      'Behavioral question bank with anti-cheat measures',
      'Candidate and interviewer dashboards',
      'Integration with ATS for seamless workflow',
    ],
    architecture:
      'Next.js with Socket.io for real-time collaboration. Monaco Editor for IDE-quality code editing. Sandboxed code execution using containerized environments. WebRTC for video capture. Node.js backend with Express for API and socket server.',
    tech: ['Next.js', 'Socket.io', 'Monaco Editor', 'WebRTC', 'Node.js', 'Docker', 'MongoDB', 'Redis', 'Express.js'],
    category: 'EdTech / HR Tech',
    status: 'Production',
    impact: '3x improvement in hiring consistency, used by 50+ engineering teams',
    github: 'https://github.com/ashishdiwedi',
    live: '#',
    featured: true,
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 'news-media-optimization',
    title: 'News Media Performance Suite',
    subtitle: 'Web vitals optimization for top Indian publishers',
    description:
      'Performance engineering projects for major Indian news publishers including News18, Hindustan Times, and The Times of India. Achieved dramatic improvements in Core Web Vitals, SEO rankings, and ad revenue through technical optimization.',
    problem:
      'High-traffic news websites were suffering from poor Core Web Vitals scores, leading to Google Search ranking penalties, poor ad viewability rates, and user churn on mobile — directly impacting revenue.',
    solution:
      'Comprehensive audit and refactor of rendering strategies, image pipelines, JavaScript bundles, and third-party script loading. Implemented ISR, streaming SSR, and edge caching to deliver sub-2-second LCP consistently.',
    features: [
      'Next.js migration from CRA for SSR/ISR benefits',
      'Core Web Vitals optimization (LCP, FID, CLS)',
      'Advanced image optimization with next/image',
      'Bundle analysis and code splitting strategies',
      'Third-party script loading optimization',
      'Critical CSS inlining and font optimization',
      'CDN configuration and edge caching',
      'Real User Monitoring (RUM) dashboards',
    ],
    architecture:
      'Next.js App Router with React Server Components for zero-JS article pages. Edge runtime for personalization. Incremental Static Regeneration for breaking news freshness. Vercel/Cloudflare CDN integration. Custom analytics pipeline.',
    tech: ['Next.js', 'React.js', 'Vercel', 'Cloudflare', 'Core Web Vitals', 'Google Analytics', 'Lighthouse'],
    category: 'Media / Performance',
    status: 'Delivered',
    impact: 'LCP improved from 4.2s → 1.4s, 35% increase in organic search traffic',
    github: 'https://github.com/ashishdiwedi',
    live: '#',
    featured: false,
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
  },
  {
    id: 'ats-system',
    title: 'Enterprise ATS System',
    subtitle: 'Multi-tenant applicant tracking system',
    description:
      'A robust, multi-tenant Applicant Tracking System (ATS) built for staffing agencies and large enterprises. Features complete hiring workflow management, custom pipeline stages, team collaboration, and deep reporting.',
    problem:
      'Staffing agencies managing hundreds of open requisitions across multiple client accounts needed a unified platform to track candidates, coordinate recruiters, and report outcomes to clients in real time.',
    solution:
      'Built a multi-tenant ATS with isolated data per client, configurable pipeline stages, bulk operations, and white-label branding. Custom reporting engine with exportable dashboards. Mobile-responsive for recruiter productivity on the go.',
    features: [
      'Multi-tenant architecture with complete data isolation',
      'Configurable hiring pipeline stages per client',
      'Bulk candidate operations and CSV import/export',
      'Email templates and automated candidate communications',
      'Custom reporting and analytics dashboards',
      'Calendar integration for interview scheduling',
      'Slack/Teams webhook notifications',
      'White-label branding per tenant',
    ],
    architecture:
      'Next.js with tenant-aware middleware. MongoDB with tenant-scoped collections. Redis for caching and background job queues. BullMQ for async email processing. Deployed on Docker with per-tenant environment isolation.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'BullMQ', 'Docker', 'Tailwind CSS', 'JWT'],
    category: 'HR Tech / SaaS',
    status: 'Production',
    impact: 'Used by 5 staffing agencies, managing 2000+ active candidates',
    github: 'https://github.com/ashishdiwedi',
    live: '#',
    featured: false,
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/30',
  },
];
