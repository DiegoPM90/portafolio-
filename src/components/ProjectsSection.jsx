"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Proyecto Landing",
    description: "Landing de Informacion y Venta",
    image: "/images/projects/1.png",
    tag: ["Todos los proyectos", "Web", "Mobile"],
    gitUrl: "https://github.com/DiegoPM90/proyecto",
    previewUrl: "https://landingdetelas.netlify.app/",
  },
  {
    id: 2,
    title: "Proyecto CRUD",
    description: "Sistema de registro de usuarios",
    image: "/images/projects/2.png",
    tag: ["Todos los proyectos", "Web", "Mobile"],
    gitUrl: "https://github.com/DiegoPM90/proyecto-crud",
    previewUrl: "https://app.netlify.com/sites/crudproyecto2023/overview",
  },
  {
    id: 3,
    title: "Proyecto API",
    description: "Adopción amimal",
    image: "/images/projects/3.png",
    tag: ["Todos los proyectos", "Web", "Mobile"],
    gitUrl: "https://github.com/DiegoPM90/Proyecto-3",
    previewUrl: "https://buscapatitas.netlify.app/",
  },
  {
    id: 4,
    title: "La ratita Gamer",
    description: "Restaurante de Pizza y Juegos de Video",
    image: "/images/projects/4.png",
    tag: ["Todos los proyectos", "Web", "Mobile"],
    gitUrl: "https://github.com/DiegoPM90/Proyecto4DWFS",
    previewUrl: "https://ratitagamer.netlify.app/",
  },
  {
    id: 5,
    title: "Proyecto CLan",
    description: "Intercambio de cuentas de Suscripción",
    image: "/images/projects/5.png",
    tag: ["Todos los proyectos", "Web"],
    gitUrl: "https://github.com/Pepeoawvh/ClanProjectFront",
    previewUrl: "https://devclanproject.netlify.app/",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos los proyectos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos los proyectos"
          isSelected={tag === "Todos los proyectos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.2, delay: index * 0.3 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
