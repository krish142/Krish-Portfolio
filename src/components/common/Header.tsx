"use client";
import Link from 'next/link';
import { CodeXml } from 'lucide-react';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Resume from './Resume';
import MobileMenu from './MobileMenu';
import { HeaderLinks } from '@/data/Header';
import { Toaster } from 'react-hot-toast';

interface HeaderLinksprops {
    id: number,
    url: string,
    label: string
}


const Header: React.FC = () => {
    const [open, setOpen] = useState<Boolean>(false);
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
                        <div className='hidden lg:flex lg:gap-7 lg:items-center'>
                            {HeaderLinks.map((item: HeaderLinksprops) => (
                                <li key={item.id} className='list-none'>
                                    <Link href={item.url}>{item.label}</Link>
                                </li>
                            ))}
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

