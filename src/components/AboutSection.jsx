"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "Habilidades",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Nextjs</li>
      </ul>
    ),
  },
  {
    title: "Educación",
    id: "Educación",
    content: (
      <ul className="list-disc pl-2">
        <li>BootCamp Desarrollo Web FullStack Universidad del Desarrollo</li>
      </ul>
    ),
  },
  {
    title: "Certificaciones",
    id: "Certificaciones",
    content: (
      <ul className="list-disc pl-2 flex flex-wrap">
        <li className="w-1/3">
          <Image 
            src="/images/projects/api.png"
            alt="Certification 3"
            width={200}
            height={200}
          />
        </li>
        <li className="w-1/3">
          <Image
            src="/images/projects/html-css.png"
            alt="Certification 3"
            width={200}
            height={200}
          />
        </li>
        <li className="w-1/3">
          <Image
            src="/images/projects/crud.png"
            alt="Certification 3"
            width={200}
            height={200}
          />
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Habilidades");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Acerca de mí</h2>
          <p className="text-base lg:text-lg">
            Soy un apasionado desarrollador web full stack con experiencia en
            JavaScript, React, Node.js, MongoDB, Express, FireBase , HTML y CSS.
            Aprendo rápido y siempre busco ampliar mis conocimientos y
            habilidades. Trabajo en equipo y me entusiasma trabajar con otros
            para crear aplicaciones increíbles. En términos de habilidades
            interpersonales, me enorgullezco de mis sólidas habilidades de
            comunicación, adaptabilidad y capacidad para trabajar bien bajo
            presión. También aprendo continuamente, siempre busco nuevas
            oportunidades para mejorar mis habilidades y mantenerme actualizado
            con las últimas tendencias de la industria. Me siento cómodo
            trabajando en entornos de ritmo rápido y siempre estoy dispuesto a
            asumir nuevos proyectos y responsabilidades. En general, soy un
            desarrollador dedicado y entusiasta que está comprometido a realizar
            un trabajo de alta calidad y superar las expectativas.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Habilidades")}
              active={tab === "Habilidades"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Educación")}
              active={tab === "Educación"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Certificaciones")}
              active={tab === "Certificaciones"}
            >
              {" "}
              Certificaciones{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
