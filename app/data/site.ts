export const experience = [
  {
    date: "2023 – Present",
    title: "PhD Researcher & Teaching Assistant — INSA/IRISA (Rennes, France)",
    bullets: [
      "Work on serverless and distributed systems, focusing on building and evaluating end-to-end prototypes under real constraints.",
      "Develop experimentation pipelines (automation, metrics, reproducibility) to compare approaches and analyze results.",
      "Write research papers and communicate findings through clear reporting and visualizations.",
      "Teach Cloud Computing practical sessions (M1): prepare labs, support students, and evaluate projects.",
    ],
  },
  {
    date: "2023",
    title: "Software Engineer — Institut Pasteur (Paris, France)",
    bullets: [
      "Contributed to clEsperanto (GPU-accelerated image processing): feature development and testing.",
      "Integrated and optimized GPU kernels and improved performance across common workloads.",
      "Designed benchmarks to validate speedups and ensure correctness.",
    ],
  },
  {
    date: "2022",
    title: "Software Engineer — Namla (Orsay, France)",
    bullets: [
      "Implemented model-compression methods in TensorFlow to reduce model size and inference cost.",
      "Evaluated trade-offs (accuracy, inference time, and memory footprint) and documented results for deployment decisions.",
      "Built reproducible experiments and a lightweight training-to-export workflow for constrained environments.",
    ],
  },
];



export const education = [
  {
    degree: "PhD in Computer Science",
    school: "INSA Rennes",
    year: "2023 – Present",
    note: "Cloud-native & distributed systems, serverless platforms, performance evaluation",
  },
  {
    degree: "MSc in Computer Science",
    school: "Paris Saclay University",
    year: "2022 – 2023",
    note: "Systems, software engineering, GPU computing",
  },
];


export const highlights = {
  publication: {
    title: "FoRLess: A Deep Reinforcement Learning-based approach for FaaS Placement in Fog.",
    venue: "Proceedings of the Utility and Cloud Computing Conference (UCC)",
    year: "2024",
    link: "https://ieeexplore.ieee.org/document/10971859",
  },
  awards: [
    {
      title: "StartThèse Competition Winner",
      description: "First place in a regional competition recognizing innovative and entrepreneurial doctoral research.",
      org: "Pepite Bretagne",
      year: "2025",
      link: "#",
    },
    {
      title: "International Mobility Grant",
      description: "Awarded a grant to support international mobility, to support collaboration and scientific exchange abroad.",
      org: "Collège Doctoral de Bretagne",
      year: "2024",
      link: "#",
    },
  ],
};


export const projects = [
  {
    title: "Yet Another FaaS Scheduler",
    desc: "Using Contextual Multi-armed Bandits to choose the destination cluster for serverless invocations and updates choices online from observed outcomes and live metrics.",
    stack: "Python · Kubernetes · Knative",
    link: "#",
  },
  {
    title: "FoRLess: Reinforcement Learning Scheduler",
    desc: "DQN agent that learns FaaS scheduling decisions from system-state signals to optimize energy–latency trade-offs (energy 7% and tail latency by 12%).",
    stack: "Python · Kubernetes · Fission · Gymnasium · Stable-Baselines3",
    link: "#",
  },
  {
    title: "GPU-Accelerated Image Processing Benchmarks",
    desc: "Kernel integration + benchmarking to validate speedups and correctness on real workloads.",
    stack: "Python · C/C++ · OpenCL/CUDA · GPU Benchmarks",
    link: "#",
  },
];


export const skillGroups = [
  { label: "Programming", items: ["Python", "Go", "C/C++", "Java"] },
  { label: "Cloud", items: ["AWS", "GCP"] },
  { label: "Containers", items: ["Docker", "Kubernetes"] },
  { label: "Infra", items: ["Terraform", "Ansible"] },
  { label: "Serverless", items: ["Fission", "Knative", "OpenFaaS"] },
  { label: "ML", items: ["TensorFlow", "Stable-Baselines3", "Gymnasium"] },
  { label: "Observability", items: ["Prometheus", "Grafana"] },
] as const;


export const SECTIONS = ["top", "experience", "education", "highlights", "projects", "about", "contact"] as const;
export type SectionId = (typeof SECTIONS)[number];
