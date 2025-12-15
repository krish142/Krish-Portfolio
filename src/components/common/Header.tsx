"use client";
import Link from 'next/link';
import { CodeXml } from 'lucide-react';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Resume from './Resume';
import MobileMenu from './MobileMenu';
import { HeaderLinks } from '@/data/Header';
import { usePathname } from 'next/navigation'

interface HeaderLinksprops {
    id: number,
    url: string,
    label: string
}


const Header: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const pathname = usePathname();
    return (
        <>
            <div className='bg-background w-full sticky top-0 z-50 shadow-sm'>
                <div className='max-w-7xl mx-auto p-6'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <Link href="/">
                                <div className='flex gap-2 items-center'>
                                    <span className='p-2 bg-green-700 text-white rounded-full'><CodeXml size={20} /></span>
                                    <span className='font-bold'>KRISH</span>
                                </div>
                            </Link>
                        </div>
                        <div className='hidden lg:flex lg:gap-4 lg:items-center'>
                            {HeaderLinks.map((item: HeaderLinksprops) => {
                                const isActive = pathname == item.url
                                return (
                                    <li key={item.id} className='list-none'>
                                        <Link href={item.url} className={`px-3 py-2 rounded-sm  ${isActive ? "text-green-700 bg-green-50" : "text-black" }`}>{item.label}</Link>
                                    </li>
                                )
                            }
                            )}
                            <Resume />
                        </div>
                        <div className='flex items-center gap-5 lg:hidden'>
                            <span className='hidden md:flex'><Resume /></span>
                            <span onClick={() => setOpen(true)} className='cursor-pointer transation-all duration-400'><Menu /></span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <MobileMenu onClose={() => setOpen(false)} />}
        </>
    )
}
export default Header;

