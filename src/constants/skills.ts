export interface Skill {
  id: number;
  name: string;
}

export interface SkillCategory {
  id: number;
  name: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    id: 1,
    name: "Front End",
    skills: [
      {
        id: 1,
        name: "HTML5",
      },
      {
        id: 2,
        name: "CSS3",
      },
      {
        id: 3,
        name: "JavaScript",
      },
      {
        id: 4,
        name: "TypeScript",
      },
      {
        id: 5,
        name: "React.js",
      },
      {
        id: 6,
        name: "TanStack Start",
      },
      {
        id: 7,
        name: "Next.js",
      },
      {
        id: 8,
        name: "Vite",
      },
      {
        id: 9,
        name: "Tailwind CSS",
      },
      {
        id: 10,
        name: "Material UI",
      },
      {
        id: 11,
        name: "TanStack Query",
      },
      {
        id: 12,
        name: "Zustand",
      },
    ],
  },
  {
    id: 2,
    name: "Back End",
    skills: [
      {
        id: 1,
        name: "Laravel",
      },
      {
        id: 2,
        name: "Go",
      },
      {
        id: 3,
        name: "Node.js",
      },
      {
        id: 4,
        name: "Express.js",
      },
      {
        id: 5,
        name: "Supabase",
      },
      {
        id: 6,
        name: "Firebase",
      },
      {
        id: 7,
        name: "REST API Design",
      },
      {
        id: 8,
        name: "Xendit Payment Integration",
      },
    ],
  },
  {
    id: 3,
    name: "Database",
    skills: [
      {
        id: 1,
        name: "PostgreSQL",
      },
      {
        id: 2,
        name: "MySQL",
      },
    ],
  },
  {
    id: 4,
    name: "Version Control & Deployment",
    skills: [
      {
        id: 1,
        name: "Git",
      },
      {
        id: 2,
        name: "GitHub",
      },
      {
        id: 3,
        name: "Cloud Deployment",
      },
      {
        id: 4,
        name: "Azure",
      },
    ],
  },
  {
    id: 5,
    name: "Development Practices & Tools",
    skills: [
      {
        id: 1,
        name: "Agile/Scrum",
      },
      {
        id: 2,
        name: "Code Review",
      },
      {
        id: 3,
        name: "Performance Optimization",
      },
      {
        id: 4,
        name: "AI-Assisted Development",
      },
    ],
  },
  {
    id: 6,
    name: "System Design",
    skills: [
      {
        id: 1,
        name: "Server/Client-Side Rendering",
      },
      {
        id: 2,
        name: "Caching Strategy",
      },
      {
        id: 3,
        name: "Asynchronous Job Processing",
      },
      {
        id: 4,
        name: "Real-Time Data Delivery",
      },
      {
        id: 5,
        name: "API Contract Design",
      },
      {
        id: 6,
        name: "Modular Service Architecture",
      },
    ],
  },
];
