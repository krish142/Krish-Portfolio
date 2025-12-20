"use client";
import { BriefcaseBusiness } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ExperienceData = [
    {
        id: 1,
        experience: "July 2025 - Present",
        time: "(5 month)",
        position: "Associate Software Developer Intern, Shortify.ing (Native URL Shortner)",
        responsibility: [
            {
                id: 1,
                point: "- Developed responsive and SEO-optimized pages using Next.js and TypeScript."
            },
            {
                id: 2,
                point: "- Created reusable UI components using Material UI (MUI) and Tailwind CSS."
            },
            {
                id: 3,
                point: "- Implemented SSR and SSG features to improve performance and loading speed."
            },
            {
                id: 4,
                point: "- Integrated REST APIs and displayed dynamic content across multiple pages."
            },
            {
                id: 5,
                point: "- Optimized UI components for performance, accessibility, and reusability."
            },
        ],
        link: "https://shortify.ing/"
    }
]

const Experience: React.FC = () => {
    return (
        <div className='bg-background-secondary'>
            <div className="py-10 px-5">
                <div className="max-w-4xl mx-auto">
                    <div className='py-5 lg:py-10'>
                        <h2 className="text-4xl font-bold">Experience</h2>
                        <p className="h-1 w-20 bg-green-700 my-2"></p>
                    </div>
                    <div className="flex flex-col md:flex-row p-5 gap-5 shadow-md rounded-md bg-background">
                        <div className='max-w-md'>
                            {ExperienceData.map((item) => (
                                <div key={item.id} className='flex flex-col  gap-2'>
                                    <div className='flex items-center gap-4'>
                                        <div className='p-3 bg-gray-200 rounded-sm'>
                                            <BriefcaseBusiness size={25} className='text-green-700' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='font-semibold'>{item.experience}</span>
                                            <span>{item.time}</span>
                                        </div>
                                    </div>
                                    <span className='max-w-sm font-bold'>
                                        {item.position}
                                    </span>
                                    <ul className='flex flex-col gap-2'>
                                        {item.responsibility.map((list) => (
                                            <span key={list.id} className='text-sm'>{list.point}</span>
                                        ))}
                                    </ul>
                                    <span className='my-1'>
                                        <Link href={item.link} className='bg-green-700 px-3 py-2 rounded-sm text-white text-sm'>View Project</Link>
                                    </span>
                                </div>
                            ))}

                        </div>
                        <div className='flex items-center justify-center'>
                            <Image src="/images/shortify.png" alt='shortify-logo' width={300} height={300} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;