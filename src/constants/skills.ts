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
        id: 2,
        name: "HTML5",
      },
      {
        id: 3,
        name: "CSS3",
      },
      {
        id: 4,
        name: "Javascript",
      },
      {
        id: 5,
        name: "Typescript",
      },
      {
        id: 6,
        name: "React.js",
      },
      {
        id: 7,
        name: "Next.js",
      },
      {
        id: 8,
        name: "Tailwind CSS",
      },
      {
        id: 9,
        name: "Chakra UI",
      },
      {
        id: 10,
        name: "Shadcn UI",
      },
      {
        id: 11,
        name: "Tanstack Query",
      },
      {
        id: 12,
        name: "Zustand",
      },
    ],
  },
  {
    id: 13,
    name: "Back End",
    skills: [
      {
        id: 14,
        name: "Laravel",
      },
      {
        id: 15,
        name: "Node.js",
      },
      {
        id: 16,
        name: "Supabase",
      },
      {
        id: 17,
        name: "Firebase",
      },
      {
        id: 18,
        name: "RESTful API",
      },
      {
        id: 19,
        name: "Payment Service",
      },
      {
        id: 20,
        name: "Webhooks",
      },
      {
        id: 21,
        name: "Microservices Architecture",
      },
    ],
  },
  {
    id: 22,
    name: "Database",
    skills: [
      {
        id: 23,
        name: "PostgreSQL",
      },
      {
        id: 24,
        name: "MySQL",
      },
      {
        id: 25,
        name: "Firebase",
      },
      {
        id: 26,
        name: "Supabase",
      },
    ],
  },
  {
    id: 27,
    name: "Version Control & Deployment",
    skills: [
      {
        id: 28,
        name: "Git",
      },
      {
        id: 29,
        name: "GitHub",
      },
      {
        id: 30,
        name: "Vercel",
      },
      {
        id: 31,
        name: "CI/CD Pipelines",
      },
      {
        id: 32,
        name: "Cloud Deployment",
      },
      {
        id: 33,
        name: "Play Store Console",
      },
    ],
  },
  {
    id: 34,
    name: "Development Methodologies",
    skills: [
      {
        id: 35,
        name: "Agile/Scrum",
      },
      {
        id: 36,
        name: "SOLID Principles",
      },
      {
        id: 37,
        name: "Code Review",
      },
      {
        id: 38,
        name: "API Documentation",
      },
      {
        id: 39,
        name: "Performance Optimization",
      },
    ],
  },
];

// export const skills: Skill[] = [
//   {
//     id: 1,
//     name: "HTML 5",
//   },
//   {
//     id: 2,
//     name: "CSS 3",
//   },
//   {
//     id: 3,
//     name: "Javascript",
//   },
//   {
//     id: 4,
//     name: "Typescript",
//   },
//   {
//     id: 5,
//     name: "React.js",
//   },
//   {
//     id: 6,
//     name: "Next.js",
//   },
//   {
//     id: 7,
//     name: "Tailwind CSS",
//   },
//   {
//     id: 8,
//     name: "Chakra UI",
//   },
//   {
//     id: 9,
//     name: "Laravel",
//   },
//   {
//     id: 10,
//     name: "Node.js",
//   },
//   {
//     id: 11,
//     name: "Supabase",
//   },
//   {
//     id: 12,
//     name: "Firebase",
//   },
//   {
//     id: 13,
//     name: "Payment Service Integrations",
//   },
//   {
//     id: 14,
//     name: "PostgreSQL",
//   },
//   {
//     id: 15,
//     name: "MySQL",
//   },
//   {
//     id: 16,
//     name: "Git",
//   },
//   {
//     id: 17,
//     name: "Cloud Deployments",
//   },
//   {
//     id: 18,
//     name: "Agile/Scrum",
//   },
// ];
