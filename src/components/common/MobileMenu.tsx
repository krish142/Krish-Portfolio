"use client";
import Link from "next/link";
import { CodeXml } from 'lucide-react';
import React from "react";
import Resume from "./Resume";
import { X } from 'lucide-react';
import { HeaderLinks } from "@/data/Header";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
    onClose: () => void;
}

interface HeaderLinksprops {
    id: number,
    url: string,
    label: string
}


const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
    const pathname = usePathname();
    return (
        <div className="fixed inset-0 bg-background-secondary z-100 w-full h-full">
            <div className="flex justify-between bg-background items-center shadow-sm p-6 z-200">
                <div>
                    <Link href="/">
                        <div className='flex gap-2 items-center'>
                            <span className='p-2 bg-primary text-white rounded-full'><CodeXml size={20} /></span>
                            <span className='font-bold'>KRISH</span>
                        </div>
                    </Link>
                </div>
                <div>
                    <span onClick={onClose} className="cursor-pointer">
                        <X />
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-5 lg:items-center p-5 '>
                {HeaderLinks.map((item: HeaderLinksprops) => {
                    const isActive = pathname == item.url
                    return (
                        <li key={item.id} className='list-none'>
                            <Link href={item.url} className={`px-3 py-2 rounded-sm text-secondary  ${isActive ? "text-green-700 bg-green-50" : "text-black"}`}>{item.label}</Link>
                        </li>
                    )
                }
                )}
                <span className="flex md:hidden"><Resume /></span>
            </div>

        </div>
    )
}

export default MobileMenu;