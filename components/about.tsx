"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { getAge } from "@/lib/utils";

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
        Con {getAge(3, 11, 2000)} años, tengo una gran pasión por la tecnología
        y la innovación. Disfruto enfrentar desafíos complejos y crear
        soluciones de software eficientes y fáciles de usar. Me especializo en{" "}
        <i className="font-semibold">desarrollo web</i> utilizando tecnologías
        como{" "}
        <span className="font-semibold">
          React.js, Next.js, Node.js, MongoDB, MySQL,
        </span>{" "}
        entre otras. También tengo una sólida formación en{" "}
        <span className="font-semibold">.NET</span> y{" "}
        <span className="font-semibold">C#</span>, conocimientos que adquirí al
        obtener el título de{" "}
        <i className="font-semibold">Técnico Universitario en Programación</i>.
      </p>
      <p className="mb-3">
        Además de mi experiencia técnica, me apasiona el aprendizaje continuo y
        la mejora constante. Actualmente, estoy perfeccionando mi inglés (nivel
        B2) para alcanzar un dominio completo del idioma. Creo firmemente que el
        software puede mejorar la vida de las personas y me esfuerzo por hacer
        una diferencia positiva a través de mi trabajo. Valoro el trabajo en
        equipo y estoy siempre dispuesto a colaborar en proyectos innovadores.
        ¡Gracias por visitar mi portfolio!
      </p>
    </motion.section>
  );
}
