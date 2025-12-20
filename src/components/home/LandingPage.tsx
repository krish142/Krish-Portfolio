"use client";
import React from "react";
import HeroSection from "./Herosection";
import Experience from "../experience/Experience";
import Education from "../education/Education";
import { ProjectLandingPage } from "../projects/ProjectsLandingPage";
import Skill from "../skill/Skill";
import Contact from "../contact/Contact";

const LandingPage:React.FC = () =>{
    return (
        <div className="min-h-screen bg-background-secondary">
            <HeroSection />
            <Experience />
            <Education />
            <ProjectLandingPage />
            <Skill />
            <Contact />
        </div>
    )
}

export default LandingPage;