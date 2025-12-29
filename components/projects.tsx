"use client";

import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Proyectos", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Mis proyectos</SectionHeading>

      <div className="flex items-center gap-4 mt-16">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-800"></div>
        <p>Contenido en proceso de actualización</p>
      </div>

      {/* <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project 
                        {...project}
                    />
                </React.Fragment>
            ))}
        </div> */}
    </section>
  );
}
