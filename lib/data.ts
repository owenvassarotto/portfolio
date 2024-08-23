import React from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";
import img_kairacreaciones from "@/public/kairacreaciones.png";
import img_tucamaestudiante from "@/public/tucamaestudiante.png";
import img_nitidoimpresiones from "@/public/nitidoimpresiones.png";
import img_clinicaabraham from "@/public/clinicaabraham.png";

interface Experience {
  title: string;
  url?: string;
  location: string;
  description: string;
  icon: React.ReactElement;
  date: string;
  credential?: string; // La propiedad credential es opcional
}

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Sobre Mí",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData : Experience[] = [
  {
    title: "Técnico Universitario en Programación",
    url: "https://www.frt.utn.edu.ar",
    location: "Universidad Tecnológica Nacional",
    description:
      "Me recibí como Técnico Universitario en Programación después de completar mi carrera en la UTN de Tucumán.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
    credential: "https://drive.google.com/file/d/1RIQpOsN1BbFFsVOrLHByqhcATUtUkkas/view?usp=sharing"
  },
  {
    title: "Desarrollador Full Stack con JavaScript",
    url: "https://platzi.com",
    location: "Academia Online Platzi",
    description:
    'Completé el programa de capacitación "Full Stack Developer con JavaScript" en Platzi, adquiriendo habilidades en desarrollo web tanto para el front-end como para el back-end.',
    icon: React.createElement(GrCertificate),
    date: "2023 - 2024",
    credential: "https://platzi.com/p/owenvassarotto/learning-path/100-javascript-full-stack/diploma/detalle/"
  },
  {
    title: "Desarrollador Freelance",
    location: "Remoto",
    description:
      "Actualmente trabajo como desarrollador freelance, creando sitios web personalizados para negocios utilizando tecnologías como React, Node.js, MongoDB y MySQL. Estoy abierto a oportunidades de tiempo completo.",
    icon: React.createElement(FaLaptopCode),
    date: "2024 - actualidad",
  },
];

export const projectsData = [
  {
    title: "Sistema de Gestión de Turnos para Clínica",
    description:
      "La aplicación permite a los pacientes solicitar turnos en línea y a los administradores gestionarlos eficientemente.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Sentry", "Appwrite", "shadcn/ui"],
    imageUrl: img_clinicaabraham,
    liveDemoUrl: "https://sistema-turnos-clinica-abraham.vercel.app",
    repoUrl: "https://github.com/owenvassarotto/sistema-turnos-clinica-abraham"
  },
  {
    title: "Kaira Creaciones Web",
    description:
      "Un proyecto full-stack para un negocio de accesorios hechos a mano. Incluye un panel de administración para gestionar productos, categorías, pedidos y reseñas de clientes.",
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MySQL",],
    imageUrl: img_kairacreaciones,
    liveDemoUrl: "https://kaira-creaciones.vercel.app",
    repoUrl: "https://github.com/owenvassarotto/Kaira-Creaciones-Frontend"
  },
  {
    title: "Portal de Alquiler de Alojamiento Estudiantil",
    description:
      "Diseñé y desarrollé un portal web que facilita la búsqueda y alquiler de alojamiento para estudiantes en toda la Argentina.",
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    imageUrl: img_tucamaestudiante,
    liveDemoUrl: "https://tucamaestudiante.vercel.app/",
    repoUrl: "https://github.com/owenvassarotto/TuCamaEstudiante_Frontend"
  },
  {
    title: "Nitido Impresiones Web",
    description:
      "Uno de mis primeros proyectos web, esta página presenta los servicios de impresión de Nitido Impresiones. El sitio cuenta con un diseño adaptable, animaciones cautivadoras y optimización con Gulp.js.",
    tags: ["HTML", "SCSS", "JavaScript", "Gulp.js"],
    imageUrl: img_nitidoimpresiones,
    liveDemoUrl: "https://nitidoimpresiones.netlify.app/",
    repoUrl: "https://github.com/owenvassarotto/nitido-impresiones-website"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "Sass",
  "Framer Motion",
  "Git",
  "Gulp.js",
  "MongoDB",
  "Mongoose",
  "MySQL",
  "Sequelize",
  "Prisma",
  "Node.js",
  "Express",
] as const;