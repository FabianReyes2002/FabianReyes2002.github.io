
import React from "react";
import Header from "./Header";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import projects from "./Projects.json";
import "./App.css";

export default function App() {
  return (
    <>
      <Header projects={projects} />
      <section id="home" className="section">
        <HomeSection projects={projects} />
      </section>

      <section id="about" className="section">
        <AboutSection />
      </section>

      {projects.map((project) => (
        <section id={project.id ?? project.Name.toLowerCase().replace(/\s+/g, "-")} className="section" key={project.id ?? project.Name}>
          <ProjectSection {...project} />
        </section>
      ))}
    </>
  );
}
