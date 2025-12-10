"use client";
import React, { ReactElement } from "react";
import Link from "next/link";
import { SocialLinks } from "@/data/SocialLinks";

interface SocialLinksProps {
    id: number,
    url: string,
    icon: ReactElement,
    name: string
}


const Footer: React.FC = () => {
    return (
        <div className="bg-background">
            <div className="">
                <div className="max-w-7xl mx-auto p-5">
                    <div className="flex flex-col md:flex-row items-center justify-between p-2 border-t-2">
                        <div>
                            <p className="text-sm md:text-[16px] text-center">© 2025 Krish Kunwar. All rights reserved.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            {SocialLinks.map((link: SocialLinksProps) => (
                                <span key={link.id} className=" p-3 rounded-full hover:bg-gray-200 transition-all duration-300">
                                    <Link href={link.url}  target="_blank">{link.icon}</Link>
                                </span>
                                
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;