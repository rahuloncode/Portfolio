import { Project, Experience, TechStackItem } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-linear',
    company: 'Linear',
    role: 'Staff Engineer',
    period: '2023 — PRESENT',
    tag: 'STAFF ENGINEER',
    description: 'Leading the Core Interaction team to build zero-latency project management tools. Architecture of the sync engine and desktop experience.',
    bulletPoints: [
      'Architected a custom offline-first synchronization engine that reduced client-server round-trip latency to sub-50ms.',
      'Designed and engineered the high-performance keyboard-shortcut handling framework, enabling 100% mouse-free power usage.',
      'Optimized React rendering pathways, leading to a 40% reduction in frame drops during dense UI list virtualization.',
      'Pioneered native desktop integration wrapper using custom Web API hooks for system level performance gains.'
    ]
  },
  {
    id: 'exp-vercel',
    company: 'Vercel',
    role: 'Senior Frontend Engineer',
    period: '2021 — 2023',
    tag: 'SENIOR FRONTEND',
    description: 'Defined the visual language for Next.js 13 documentation and developed the initial versions of Turbopack visualizers.',
    bulletPoints: [
      'Co-authored the interactive Next.js 13 documentation portal, featuring interactive code execution playgrounds.',
      'Developed low-level node dependency visualization graphs for the Turbopack build system, rendering 10k+ modules smoothly at 60 FPS.',
      'Refined CSS-in-JS build pipeline to eliminate runtime CSS evaluation overhead in static layouts.',
      'Collaborated closely with core designers to standardize on Vercel\'s signature minimalist, high-contrast visual design system.'
    ]
  },
  {
    id: 'exp-stripe',
    company: 'Stripe',
    role: 'UI Engineer',
    period: '2019 — 2021',
    tag: 'UI ENGINEER',
    description: 'Contributed to the global dashboard redesign and built the internal component library used by 2,000+ engineers.',
    bulletPoints: [
      'Led development on the high-concurrency billing chart components, visualizing complex multi-million dollar recurring payment streams.',
      'Shipped the enterprise component design tokens, bridging design mockups directly to React code with auto-generated Tailwind rules.',
      'Audited and overhauled keyboard accessibility and screen-reader support, achieving perfect WCAG 2.1 compliance.',
      'Reduced initial dashboard bundle sizes by 120KB through aggressive code-splitting and dynamic import optimizations.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-pulse',
    title: 'Pulse Analytics',
    description: 'Real-time observability platform for distributed microservices with 50ms latency metrics.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZKnCblnfYd6dQZTnfZK5c2_4y3nYkdvbjj_ADrJW8ATiuCHZzBHGMH_GUgLolXgSyUd4gvHRu-lp5JXHIBYP8eozlOyHyiqWW2SOyd8wVljCaMpHjYxIC2-OymNIZzOF0UTGeu2YSClC1WSOeP52cutx4s5HOmxLhB1JvknXIZAQ6Y-D7mubWVTIFX65EMAOlWcxF575jCDD-r9KCFA6e46S6CEpRmstk01DVNwVsxjZaX-0fdyazUoE8_YpBJO7ZiT0-xFYT-HHp',
    tags: ['React', 'D3.js', 'WebSockets', 'Go', 'gRPC'],
    duration: '6 Months',
    role: 'Lead Architect',
    features: [
      'Interactive microservice trace explorer with automated anomaly highlights.',
      'Streaming line-chart visualizations handling up to 50,000 data points per second.',
      'Custom filtering and aggregation engine running completely in a Web Worker.',
      'Dark mode UI with colorblind-safe observability palette and glowing status nodes.'
    ],
    challenges: [
      'Problem: Rendering incoming stream of millisecond-level metric spikes caused massive main-thread lag.',
      'Solution: Implemented double-buffered HTML5 Canvas overlays combined with off-the-main-thread data parsing in Web Workers.'
    ],
    metrics: [
      '50ms real-time metric-to-screen delay',
      'Under 1.5% CPU footprint during intense bursts',
      'Over 40k active servers monitored simultaneously'
    ],
    link: '#'
  },
  {
    id: 'proj-aurora',
    title: 'Aurora UI',
    description: 'A high-fidelity React component library focused on accessibility and motion-first interactions.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4SDIciw2cOjwA6AFtI1AoP-F7uYN7YcG7Tyice_1MGAjg0zg766PngPtyfn7zJwRdPC5gWBiSi-Y5xxFQbruRWM_QP9d8qIsdd_vtEZuqWZPhAkqjB4X5O4ib6X9wVMqcA9DcDcyp1C8WOfaPU9TClgomXv-M3DUJwMbCG3Gzkkzv8to5ZOyy9AVcu0dNl-s1sMpRrawPb16VIKA8kDG_ozN3ZfwU1q21MMZSazofTAbR4eyqlYq0EmZlTraiy0q_PE4LWtE1TaPN',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Radix UI'],
    duration: '4 Months',
    role: 'Principal UI Developer',
    features: [
      'Stunning translucent glass designs utilizing modern backdrop-filter utilities.',
      'Spring-physics layout transitions and gesture-driven bottom drawers.',
      'Fully keyboard accessible modal and dropdown primitives matching WAI-ARIA specs.',
      'Extremely light bundle size - under 8KB gzipped for core layout elements.'
    ],
    challenges: [
      'Problem: Framer Motion layout transitions stuttered on lower-end mobile devices due to repaints.',
      'Solution: Standardized on hardware-accelerated CSS transform-only animations (translate3d, scale) and passive event listeners.'
    ],
    metrics: [
      '100% accessibility score on Lighthouse audits',
      '3.2KB gzipped core layout overhead',
      'Over 12,000 developer stars on GitHub'
    ],
    link: '#'
  },
  {
    id: 'proj-nexus',
    title: 'Nexus Engine',
    description: 'Low-level graphic rendering engine optimized for WebGPU and real-time raytraced shadows.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCkATlnCvI39Q2OiRd0U8QJki_ZpZ_qYrwtXa4Twce1lzwmEXfyWW7MZcn4nPv37ESdTkunMWl53u5HcBojjRbxwP7ApJ9PZ3nDY1ziU-YVRewEYtB_1xUPqD6ARrVwiAY3px270S8_DFzs4O_z48uP2k2rU-LYWiuAPgBf7hzXP1R9WFO3zNCoxvrdtZnLEj-7Gwdn9d4xuizYbRPfnaTJuO3SYM2hE_78umIFiKxKtrcCmsiQ2Z_yucUMLwh9At5XXI9HoU0CkU7',
    tags: ['WebGPU', 'Rust', 'WASM', 'WGSL', 'TypeScript'],
    duration: '9 Months',
    role: 'Solo Developer & Researcher',
    features: [
      'Custom WebGPU pipeline rendering multi-million polygon models inside standard browser frames.',
      'GPU-driven cluster shading and real-time distance-field soft shadows.',
      'WASM binary compiled from Rust for ultra-fast geometry pre-processing.',
      'Interactive code node editor for live shader editing with hot-reloading.'
    ],
    challenges: [
      'Problem: Complex shadow rendering formulas severely degraded frame-rates on mobile GPUs.',
      'Solution: Engineered a dynamic Level of Detail (LOD) downsampler that scales rendering fidelity on the fly based on current frame timing.'
    ],
    metrics: [
      'Solid 60 FPS on integrated mobile GPUs',
      '94% faster geometry parsing than pure JS',
      'Used as standard teaching sandbox in 3 universities'
    ],
    link: '#'
  }
];

export const TECH_STACKS: TechStackItem[] = [
  // Frontend
  { name: 'React 19', category: 'frontend', proficiency: 5, description: 'Core library for modular, stateful UI development with concurrent features.' },
  { name: 'Next.js', category: 'frontend', proficiency: 5, description: 'Server-side rendering, hybrid static sites, and routing optimization.' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 5, description: 'Utility-first CSS styling for rapid, highly responsive interface design.' },
  { name: 'TypeScript', category: 'frontend', proficiency: 5, description: 'Strict typing for robust, scale-ready codebases and dev confidence.' },
  
  // Backend & APIs
  { name: 'Node.js', category: 'backend', proficiency: 5, description: 'High-performance JavaScript runtime for scalable backend microservices.' },
  { name: 'Express / Fastify', category: 'backend', proficiency: 5, description: 'Lightweight API route design with middleware architectures.' },
  { name: 'GraphQL / gRPC', category: 'backend', proficiency: 4, description: 'Efficient, typed data fetching and low-latency client-server RPCs.' },
  { name: 'PostgreSQL', category: 'backend', proficiency: 4, description: 'Structured storage, complex query modeling, and transactional reliability.' },

  // Low Level & Graphics
  { name: 'WebGPU / WGSL', category: 'systems', proficiency: 4, description: 'Hardware-accelerated parallel computation and high-perf web graphics.' },
  { name: 'Rust', category: 'systems', proficiency: 4, description: 'Memory-safe systems programming for heavy WASM compilation targets.' },
  { name: 'WebAssembly', category: 'systems', proficiency: 5, description: 'Executing heavy data parsing and rendering workloads at native speeds.' },
  { name: 'D3.js / Canvas', category: 'systems', proficiency: 5, description: 'Custom rendering pipelines for intricate, high-density charts and grids.' },

  // Build & Workflow
  { name: 'Vite / esbuild', category: 'tools', proficiency: 5, description: 'Lightning-fast bundler orchestration and compilation tooling.' },
  { name: 'Docker / K8s', category: 'tools', proficiency: 4, description: 'Containerization and deployment architecture for isolated cloud microservices.' },
  { name: 'Git & CI/CD', category: 'tools', proficiency: 5, description: 'Automated test execution, quality lint gates, and continuous delivery.' },
  { name: 'Framer Motion', category: 'tools', proficiency: 5, description: 'Orchestrating layout transitions, gesture controls, and spring animations.' }
];
