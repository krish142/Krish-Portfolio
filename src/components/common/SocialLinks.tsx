"use client";
import React from "react";
import Link from "next/link";
import { ReactElement } from "react";
import { SocialLinksData } from "@/data/SocailLinksData";

interface SocialLinksProps {
    id: number,
    url: string,
    icon: ReactElement,
    name: string
}

const SocialLinks:React.FC = () => {
    return (
        <div className="flex gap-3 items-center">
            {SocialLinksData.map((link: SocialLinksProps) => (
                <span key={link.id} className=" p-2.5 rounded-full bg-primary text-white transition-all duration-300">
                    <Link href={link.url} target="_blank">{link.icon}</Link>
                </span>

            ))}
        </div>
    )
}

export default SocialLinks;