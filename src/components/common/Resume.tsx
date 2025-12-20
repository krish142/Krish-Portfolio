"use client";
import { Download } from 'lucide-react';
import React from "react";

const Resume:React.FC = () => {
    return(
        <span className="bg-primary text-white text-sm font-semibold px-3 py-2 rounded-sm flex items-center gap-2">
            <Download size={18}/>
            <a href="KrishKunwar.pdf" download="Krish-Resume.pdf" >Dowload CV</a>
        </span>
    )
}
export default Resume;