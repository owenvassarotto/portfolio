"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre Mí", 0.5);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-my-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Sobre mí</SectionHeading>
      <p className="mb-3">
        Soy un{" "}
        <span className="font-semibold">
          Técnico Universitario en Programación
        </span>{" "}
        de 23 años con una gran pasión por la tecnología y la innovación.
        Disfruto enfrentándome a desafíos complejos y creando soluciones de
        software que son tanto eficientes como fáciles de usar. Me especializo
        en el stack <span className="font-semibold underline">MERN</span> y
        tengo experiencia con <span className="font-semibold">TypeScript</span>{" "}
        y <span className="font-semibold">TailwindCSS</span> para desarrollar
        interfaces modernas y responsivas.
      </p>
      <p className="mb-3">
        Además de mi formación técnica, me encanta aprender sobre nuevas
        tecnologías y mejorar continuamente mis habilidades. Actualmente, estoy
        perfeccionando mi nivel de inglés (B2) para alcanzar un dominio completo
        del idioma. Me apasiona la idea de que el software puede mejorar la vida de las personas y me
        esfuerzo por hacer una diferencia positiva a través de mi trabajo. Valoro profundamente el trabajo en equipo y estoy ansioso por colaborar
        en proyectos innovadores. ¡Gracias por visitar mi portfolio!
      </p>
    </motion.section>
  );
}
