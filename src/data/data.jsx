import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaBootstrap,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaWordpressSimple } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiFirebaseFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { TbSeo } from "react-icons/tb";

export const technologies = [
  { name: 'HTML5', icon: <FaHtml5 size={24} color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={24} color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs size={24} color="#F7DF1E" /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={24} color="#7952B3" /> },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill size={24} color="#38B2AC" /> },
  { name: 'WordPress', icon: <FaWordpressSimple size={24} color="#21759B" /> },
  { name: 'PHP', icon: <SiPhp size={24} color="#777BB4" /> },
  { name: 'Laravel', icon: <FaLaravel size={24} color="#FF2D20" /> },
  { name: 'React', icon: <FaReact size={24} color="#61DAFB" /> },
  { name: 'React Native', icon: <TbBrandReactNative size={24} color="#61DAFB" /> },
  { name: 'Next.js', icon: <RiNextjsLine size={24} color="#000000" /> },
  { name: 'MongoDB', icon: <SiMongodb size={24} color="#47A248" /> },
  { name: 'PostgreSQL', icon: <BiLogoPostgresql size={24} color="#336791" /> },
  { name: 'Firebase', icon: <RiFirebaseFill size={24} color="#FFCA28" /> },
  { name: 'Docker', icon: <FaDocker size={24} color="#2496ED" /> },
  { name: 'AWS', icon: <FaAws size={24} color="#FF9900" /> },
  { name: 'SEO', icon: <TbSeo size={24} color="#FF9900" /> },
  { name: 'Figma', icon: <FaFigma size={24} color="#F24E1E" /> },
]

const defaultImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80";

export const projects = [
  {
    id: 1,
    title: "Avex",
    category: "ecommerce",
    image: defaultImage,
    icon: "🛒",
    tech: ["React", "CSS3", "Tailwind", "Bootstrap", "Git", "Figma"],
    link: "https://avex-navy.vercel.app/",
    github: "#",
    desc: "Fashion e-commerce platform with cart, product management, and secure checkout."
  },
  {
    id: 2,
    title: "WebVerse Agency",
    category: "web",
    image: defaultImage,
    icon: "🌐",
    tech: ["React", "CSS3", "Tailwind", "Bootstrap", "Git", "Figma"],
    link: "https://webverse-chi.vercel.app/",
    github: "#",
    desc: "Modern digital agency website with clean UI and responsive design."
  },
  {
    id: 3,
    title: "Proofly",
    category: "dashboard",
    image: defaultImage,
    icon: "📊",
    tech: ["React", "CSS3", "Tailwind", "Bootstrap", "Git", "Figma"],
    link: "",
    github: "#",
    desc: "SaaS platform for validating startup ideas with analytics and tracking."
  },
  {
    id: 4,
    title: "FlowBoard",
    category: "dashboard",
    image: defaultImage,
    icon: "📋",
    tech: ["React", "CSS3", "Tailwind", "Bootstrap", "Git", "Figma"],
    link: "https://flow-board-ten.vercel.app/",
    github: "#",
    desc: "Project management platform with team collaboration and workflow tracking."
  },
  {
    id: 5,
    title: "Unicomnova AI",
    category: "web",
    image: defaultImage,
    icon: "🤖",
    tech: ["Laravel", "Tailwind", "Bootstrap", "Git", "Jira", "GitHub"],
    link: "",
    github: "#",
    desc: "AI chatbot platform with admin dashboard and analytics."
  },
  {
    id: 6,
    title: "NovaReach Agency",
    category: "web",
    image: defaultImage,
    icon: "📢",
    tech: ["React", "CSS3", "Tailwind", "Bootstrap", "Git", "Figma"],
    link: "https://nova-reach-azure.vercel.app/",
    github: "#",
    desc: "Marketing agency website with portfolio and modern UI."
  },
  {
    id: 7,
    title: "Restova",
    category: "web",
    image: defaultImage,
    icon: "🍽️",
    tech: ["HTML5", "CSS3", "Bootstrap", "Git", "Figma"],
    link: "https://restova.vercel.app/",
    github: "#",
    desc: "Restaurant reservation system with booking and menu browsing."
  },
  {
    id: 8,
    title: "Beauty Salon",
    category: "web",
    image: defaultImage,
    icon: "💅",
    tech: ["HTML5", "CSS3", "Bootstrap", "Git", "Figma"],
    link: "https://beauty-salon-one-blue.vercel.app/",
    github: "#",
    desc: "Salon booking platform with scheduling and service management."
  },
  {
    id: 9,
    title: "HomeNest",
    category: "web",
    image: defaultImage,
    icon: "🏠",
    tech: ["React", "Laravel", "Tailwind", "Bootstrap", "Git", "GitHub"],
    link: "https://homenest-omega.vercel.app/",
    github: "#",
    desc: "Real estate platform for renting and selling properties."
  },
  {
    id: 10,
    title: "Tripplanner",
    category: "web",
    image: defaultImage,
    icon: "✈️",
    tech: ["React", "Laravel", "Tailwind", "Bootstrap", "Git", "GitHub"],
    link: "https://trip-planner-xi-pied.vercel.app/",
    github: "#",
    desc: "Travel planning app with personalized itineraries."
  },
  {
    id: 11,
    title: "GoalPass",
    category: "web",
    image: defaultImage,
    icon: "⚽",
    tech: ["React", "Laravel", "Tailwind", "Bootstrap", "Git", "GitHub"],
    link: "https://goalpass.vercel.app/",
    github: "#",
    desc: "Match ticketing platform with payment integration."
  },
  {
    id: 12,
    title: "3otor",
    category: "ecommerce",
    image: defaultImage,
    icon: "🧴",
    tech: ["React", "Laravel", "Tailwind", "Bootstrap", "Git", "GitHub"],
    link: "https://3otor-perfums.vercel.app/",
    github: "#",
    desc: "Perfume e-commerce store with admin dashboard and orders system."
  },
  {
    id: 13,
    title: "Edulead",
    category: "web",
    image: defaultImage,
    icon: "🎓",
    tech: ["React", "Laravel", "Tailwind", "Bootstrap", "Git", "GitHub"],
    link: "https://edulead-alpha.vercel.app/",
    github: "#",
    desc: "Online learning platform with courses and quizzes."
  },

  // 🔥 NEW MOBILE PROJECT
  {
    id: 14,
    title: "FitTrack Mobile",
    category: "mobile",
    image: defaultImage,
    icon: "📱",
    tech: ["React Native", "Firebase", "Expo"],
    link: "#",
    github: "#",
    desc: "Mobile fitness tracking app with real-time data and progress analytics."
  },

  // 🔥 NEW EXTRA ECOMMERCE
  {
    id: 15,
    title: "NexaCommerce",
    category: "ecommerce",
    image: defaultImage,
    icon: "🛍️",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    link: "#",
    github: "#",
    desc: "Full-featured e-commerce platform with payments and product management."
  }
];

export const teamMembers = [
  {
    name: 'Zakaryae Rouane',
    role: 'CEO',
    specialty: 'Full-stack Development',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    contacts: {
      email: 'codingwiithzak@gmail.com',
      phone: '+212625702587',
      linkedin: 'https://linkedin.com/in/zakarya-errouane',
    },
  },
  {
    name: 'Mohamed El Amrani',
    role: 'Lead Developer',
    specialty: 'Frontend & Backend Architecture',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&auto=format&fit=crop&q=80',
    contacts: {
      email: 'mohamed@codingwithzak.com',
      phone: '+212661000000',
      linkedin: 'https://linkedin.com/in/mohamed-el-amrani',
    },
  }
  ,
  {
    name: 'Imane Belhaj',
    role: 'UI/UX Designer',
    specialty: 'Product Design & Prototyping',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
    contacts: {
      email: 'imane@codingwithzak.com',
      phone: '+212661000001',
      linkedin: 'https://linkedin.com/in/imane-belhaj',
    },
  },
  {
    name: 'Youssef Amrani',
    role: 'Backend Engineer',
    specialty: 'Node.js & Cloud Infrastructure',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    contacts: {
      email: 'youssef@codingwithzak.com',
      phone: '+212661000002',
      linkedin: null,
    },
  },
  {
    name: 'Salma Idrissi',
    role: 'Mobile Developer',
    specialty: 'React Native & Flutter',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80',
    contacts: {
      email: 'salma@codingwithzak.com',
      phone: '+212661000003',
      linkedin: 'https://linkedin.com/in/salma-idrissi',
    },
  },
  {
    name: 'Hamza Tahiri',
    role: 'DevOps Engineer',
    specialty: 'AWS, Docker & CI/CD',
    image: null,
    contacts: {
      email: 'hamza@codingwithzak.com',
      phone: '+212661000004',
      linkedin: 'https://linkedin.com/in/hamza-tahiri',
    },
  },
]