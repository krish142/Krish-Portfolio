"use client";
import { GraduationCap } from 'lucide-react';

const EducationData = [
    {
        id: 1,
        year: "2021 - 2025 June",
        score: "81.2%",
        degreeName: "Bachelor of Techonology in Computer Science",
        collageName: "Uttrakhand Techinal University,Dehradun"
    },
    {
        id: 2,
        year: "2019 - 2021 March",
        score: "84.4%",
        degreeName: "Intermediate Examination",
        collageName: "Board of School Education Uttrakhand"
    }
]

const Education: React.FC = () => {
    return (
        <div className='bg-background-secondary'>
            <div className="py-10 lg:py-15  px-5">
                <div className="max-w-5xl mx-auto">
                    <div className='py-5 lg:py-10'>
                        <h2 className="text-4xl font-bold">Education</h2>
                        <p className="h-1 w-20 bg-green-700 my-2"></p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {EducationData.map((item) => (
                            <div key={item.id} className="p-5 shadow-md rounded-md flex flex-col gap-1 bg-background">
                                <div className='flex justify-between items-center'>
                                    <span className='text-green-700 p-2.5 rounded-sm bg-green-100'><GraduationCap size={28} /></span>
                                    <span className='text-green-700 bg-green-100 font-semibold text-xs px-3 py-1 rounded-full'>{item.score} Score</span>
                                </div>
                                <p className='text-green-700 font-semibold'>{item.year}</p>
                                <p className='font-semibold md:text-lg text-[16px]'>{item.degreeName}</p>
                                <p className='font-semibold text-tertiary text-sm md:text-[16px]'>{item.collageName}</p>
                                <p className='w-full h-0.5 bg-gray-300 mt-4'></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;