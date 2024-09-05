import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Waqar",
  initials: "Muhammad",
  url: "https://google.com",
  location: "Lahore,Pakistan",
  locationLink: "https://www.google.com/maps/place/lahore",
  description:
    "Software Engineer | Competitve Programmer | MERN | NextJs | C/C++",
  summary:
    "I'm a Software Engineer with expertise in front-end and back-end technologies, including JavaScript, ReactJS, and Next.js. I recently completed a Software Engineer Fellowship at Headstarter AI, where I built and deployed AI projects using agile methodologies. I'm also active in competitive programming, always looking to tackle new challenges and innovate through my work.",
  avatarUrl: "/me.jpeg",
  skills: [
    "HTML/CSS",
    "Javascript",
    "Next.js",
    "React.js",
    "Bootstrap",
    "Tailwind Css",
    "MUI",
    "Swiper.js",
    "Express.js",
    "Node.js",
    "MongoDB",
    "Git/Github",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/waqar2403",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/im-waqar",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/waqar_1101",
        icon: Icons.x,

        navbar: true,
      },
      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/WAQAR_1",
        icon: Icons.Leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Headstarter AI",
      href: "https://headstarter.co/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Fellow",
      logoUrl: "/headstart.jpeg",
      start: "July 2024",
      end: "September 2024",
      description:
        'Built and deployed 5 AI projects in 5 weeks using React, Next.js, Firebase, and Vercel, integrating OpenAI, Pinecone, and Stripe APIs and iterating based on feedback with CI/CD and agile methodologies.'
    
    

    },
   
  ],
  education: [
    {
      school: "University Of Education,Lahore",
      href: "https://ue.edu.pk",
      degree: "BS Computer Science",
      logoUrl: "/UE.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Punjab Group of Colleges",
      href: "https://pgc.edu",
      degree: "ICS",
      logoUrl: "/PGC.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Dashboard App",
      href: "https://66152b525c0801b292c40b0d--whimsical-dango-b76baf.netlify.app/",
      dates: "Sep 2023 - Oct 2023",
      active: true,
      description:
        "",
      technologies: [
        "HTML/CSS",
        "Javsscript",
        "ReactJS",
        "Netlify",
        "TailwindCSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://66152b525c0801b292c40b0d--whimsical-dango-b76baf.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/waqar2403/Dashboard-Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/1.webm",
    },
    {
      title: "Gemini Clone",
      href: "https://gemini-clone-ai.netlify.app",
      dates: "Dec 2023 - Dec 2023",
      active: true,
      description:
        "",
      technologies: [
        "ReactJS",
        "Javascript",
        "Gemini Api",
        "TailwindCSS",
        "Material UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://gemini-clone-ai.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/waqar2403/Dashboard-Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/2.webm",
    },
  ],
  hackathons: [
    {
      title: "Forman Ignite",
      dates: "June 25th - 28th, 2024",
      location: "FCCU, Lahore",
      description:
        "Ended up in top 15 with my team",

      image:
        "/fc.png",
      links: [],
    },
    {
      title: "ElectroCon'24",
      dates: "March 25th - 26th, 2024",
      location: "UET, Lahore",
      description:
        "Advanced to final round",
      image:
        "/uet.jpg",
      links: [],
    },
    {
      title: "UE Code Quest",
      dates: "April 18th, 2024",
      location: "University of Education, Lahore",
      description:
        "2nd Runner-Up",
      icon: "/ue.jpg",
      image:
        "/ue.jpg",
      links: [],
    },
  ],
} as const;
