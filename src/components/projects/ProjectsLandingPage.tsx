"use client";

import Image from "next/image";
import Link from "next/link";

const Data = [
    {
        id: 1,
        image: "/images/project-1.png",
        name: "Traveling Website",
        framework:"Next Js",
        description: "A user-centric travel platform focused on seamless booking experiences and immersive destination guides using modern styling.",
        techonogy: [
            {
                id: 1,
                name: "Typescript"
            },
            {
                id: 2,
                name: "Tailwind CSS"
            },
        ],
    },
    {
        id: 2,
        image: "/images/project-2.png",
        name: "E-commerce Application",
        framework:"React",
        description: "A full-stack shopping solution highlighting robust inventory functionality, payment integration, and a clean, secure interface.",
        techonogy: [
            {
                id: 1,
                name: "Spring Boot"
            },
            {
                id: 2,
                name: "Material UI"
            },
        ],
    },
    {
        id: 3,
        image: "/images/project-3.png",
        name: "Food Ordering Website",
        framework:"Next Js",
        description: " An intuitive food delivery service with real-time tracking, a user-friendly menu system, and smooth ordering flows.",
        techonogy: [
            {
                id: 1,
                name: "TypeScript"
            },
            {
                id: 2,
                name: "Shadcn UI"
            },
        ],
    }
]

export const ProjectLandingPage: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div className="py-10 px-5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold">Featured Projects</h2>
                    <div className="h-1 w-20 bg-green-700 mt-1"></div>
                    <p className="py-4">Building seamless digital experiences through modern web technologies.</p>
                    <div className="space-y-5">
                        {Data.map((item) => (
                            <div key={item.id} className="flex flex-col md:flex-row gap-5 md:gap-10 shadow-md rounded-md p-5 items-center bg-background">
                                <div><Image src={item.image} alt="project-image" width={300} height={300} /></div>
                                <div className="space-y-2">
                                    <div className="flex gap-5 items-center">
                                        <span className="font-semibold text-sm uppercase text-green-700">{item.framework}</span>
                                        {item.techonogy.map((tech) => (
                                        <span key={tech.id} >
                                            <li className="ml-3 text-sm">{tech.name}</li>
                                        </span>
                                    ))}</div>
                                    <h3 className="font-bold text-xl">{item.name}</h3>
                                    <p className="text-gray-700 font-semibold">{item.description}</p>
                                    <div className="flex gap-3 py-1">
                                        <span className="px-4 py-2 bg-green-700 text-sm text-white font-semibold rounded-md border border-green-700"><Link href="/projects/building" >View Project</Link></span>
                                        <span className="px-4 py-2 text-green-700 text-sm  font-semibold rounded-md border border-green-700 "><Link href="/projects/building" >Source Code</Link></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}