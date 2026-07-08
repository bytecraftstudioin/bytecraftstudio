"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectModal from "@/components/home/ProjectModal";
import Contact from "@/components/home/Contact";
import CTA from "@/components/home/CTA";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import type { Project } from "@/data/projects";
import GoogleAd from "@/components/GoogleAd";

export default function BytecraftStudio() {

  
const [selectedProject, setSelectedProject] =
  useState<Project | null>(null);
  return (
    <div
  className="
  relative
  bg-[#0B0F19]
  text-white
  min-h-screen
  overflow-x-hidden
  font-sans
  antialiased
  "
>
    {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div
  className="
  absolute
  -top-40
  -left-40
  w-[700px]
  h-[700px]
  bg-blue-500/15
  blur-[160px]
  rounded-full
  "
/>

<div
  className="
  absolute
  -bottom-40
  -right-40
  w-[700px]
  h-[700px]
  bg-cyan-400/15
  blur-[160px]
  rounded-full
  "
/>
</div>

<Hero />
<About />
<GoogleAd />
<Services />
<Process />
<Portfolio
  projects={projects}
  setSelectedProject={setSelectedProject}
/>
<CTA />
<Contact />
<ProjectModal
  selectedProject={selectedProject}
  setSelectedProject={setSelectedProject}
  projects={projects}
/>


    </div>
  );
}