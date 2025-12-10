"use client";
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiSpringboot, SiNodedotjs, SiExpress, SiTailwindcss, SiMui, SiShadcnui, SiMongodb, SiMysql, SiGit, SiGithub,SiPostman } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const ProgrammingLanguage = [
    {
        id: 1,
        icon: <SiJavascript />,
        name: "JavaScript",
        percent: "70%"
    },
    {
        id: 2,
        icon: <SiTypescript />,
        name: "Typescript",
        percent: "60%"
    },
    {
        id: 3,
        icon: <FaJava />,
        name: "Java",
        percent: "65%"
    },
    {
        id: 4,
        icon: <SiHtml5 />,
        name: "HTML 5",
        percent: "80%"
    },
    {
        id: 5,
        icon: <SiCss3 />,
        name: "CSS 3",
        percent: "75%"
    }
]

const FrameWork = [
    {
        id: 1,
        icon: <SiReact />,
        name: "Reactjs",
        percent: "60%"
    },
    {
        id: 2,
        icon: <SiNextdotjs />,
        name: "Nextjs",
        percent: "70%"
    },
    {
        id: 3,
        icon: <SiSpringboot />,
        name: "Spring Boot",
        percent: "70%"
    },
    {
        id: 4,
        icon: <SiNodedotjs />,
        name: "Nodejs",
        percent: "55%"
    },
    {
        id: 5,
        icon: <SiExpress />,
        name: "ExpressJs",
        percent: "65%"
    },
    {
        id: 6,
        icon: <SiTailwindcss  />,
        name: "Tailwind Css",
        percent: "75%"
    },
    {
        id: 7,
        icon: <SiMui  />,
        name: "Material UI",
        percent: "50%"
    },
    {
        id: 8,
        icon: <SiShadcnui  />,
        name: "Shadcn UI",
        percent: "45%"
    }
]

const Databases = [
    {
        id: 1,
        icon: <SiMongodb  />,
        name: "MongoDB",
        percent: "70%"
    },
    {
        id: 2,
        icon: <SiMysql  />,
        name: "MySQL",
        percent: "60%"
    }
]


const VersionControl = [
    {
        id: 1,
        icon: <SiGit   />,
        name: "Git",
        percent: "75%"
    },
    {
        id: 2,
        icon: <SiGithub   />,
        name: "GitHub",
        percent: "70%"
    }
]

const Testing = [
    {
        id: 1,
        icon: <SiPostman   />,
        name: "Postman",
        percent: "60%"
    }
]

const Skill: React.FC = () => {
    return (
        <div className="min-h-screen">
            <div className="py-5 lg:py-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center font-bold text-3xl lg:text-5xl py-5">Skills</h2>
                    {/* {Progrmming Language} */}
                    <div className="py-3">
                        <h2 className="px-5 py-2 font-semibold text-xl">Programming Language</h2>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 px-5">
                            {ProgrammingLanguage.map((skill) => (
                                <div key={skill.id} className="border p-3 cursor-pointer flex flex-col items-center gap-1 rounded-md transition-transform duration-300 hover:scale-[1.1]">
                                    <span className="text-4xl">{skill.icon}</span>
                                    <span className="text-center font-extrabold text-sm">{skill.percent}</span>
                                    <span className="text-sm font-semibold text-green-700">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* {Frameworks and library} */}
                    <div className="py-3">
                        <h2 className="px-5 py-2 font-semibold text-xl">Frameworks & Library</h2>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 px-5">
                            {FrameWork.map((skill) => (
                                <div key={skill.id} className="border p-3 cursor-pointer flex flex-col items-center gap-1 rounded-md transition-transform duration-300 hover:scale-[1.1]">
                                    <span className="text-4xl">{skill.icon}</span>
                                    <span className="text-center font-extrabold text-sm">{skill.percent}</span>
                                    <span className="text-sm font-semibold text-green-700">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* {Databases} */}
                    <div className="py-3">
                        <h2 className="px-5 py-2 font-semibold text-xl">Databases</h2>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 px-5">
                            {Databases.map((skill) => (
                                <div key={skill.id} className="border p-3 cursor-pointer flex flex-col items-center gap-1 rounded-md transition-transform duration-300 hover:scale-[1.1]">
                                    <span className="text-4xl">{skill.icon}</span>
                                    <span className="text-center font-extrabold text-sm">{skill.percent}</span>
                                    <span className="text-sm font-semibold text-green-700">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* {Version Control} */}
                    <div className="py-3">
                        <h2 className="px-5 py-2 font-semibold text-xl">Version Control</h2>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 px-5">
                            {VersionControl.map((skill) => (
                                <div key={skill.id} className="border p-3 cursor-pointer flex flex-col items-center gap-1 rounded-md transition-transform duration-300 hover:scale-[1.1]">
                                    <span className="text-4xl">{skill.icon}</span>
                                    <span className="text-center font-extrabold text-sm">{skill.percent}</span>
                                    <span className="text-sm font-semibold text-green-700">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* {Testing} */}
                    <div className="py-3">
                        <h2 className="px-5 py-2 font-semibold text-xl">Tersting</h2>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 px-5">
                            {Testing.map((skill) => (
                                <div key={skill.id} className="border p-3 cursor-pointer flex flex-col items-center gap-1 rounded-md transition-transform duration-300 hover:scale-[1.1]">
                                    <span className="text-4xl">{skill.icon}</span>
                                    <span className="text-center font-extrabold text-sm">{skill.percent}</span>
                                    <span className="text-sm font-semibold text-green-700">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skill; 