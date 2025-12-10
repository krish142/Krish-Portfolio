"use client";
import Link from "next/link";
import { CodeXml } from 'lucide-react';
import React from "react";
import Resume from "./Resume";
import { CircleX } from 'lucide-react';
import { HeaderLinks } from "@/data/Header";

interface MobileMenuProps {
    onClose: () => void;
}

interface HeaderLinksprops {
    id: number,
    url: string,
    label: string
}


const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-white z-100 w-full h-full">
            <div className="flex justify-between items-center shadow-md p-6">
                <div>
                    <Link href="/">
                        <div className='flex gap-2 items-center'>
                            <span className='p-2 bg-green-700 text-white rounded-full'><CodeXml size={20} /></span>
                            <span className='font-bold'>KRISH</span>
                        </div>
                    </Link>
                </div>
                <div>
                    <span onClick={onClose} className="cursor-pointer">
                        <CircleX />
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-5 lg:items-center p-5 '>
                {HeaderLinks.map((item: HeaderLinksprops) => (
                    <li key={item.id} className='list-none py-1'>
                        <Link href={item.url}>{item.label}</Link>
                    </li>
                ))}
                <span className="flex md:hidden"><Resume /></span>
            </div>

        </div>
    )
}

export default MobileMenu;