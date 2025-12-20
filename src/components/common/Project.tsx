"use client";

import Image from "next/image";
import Link from "next/link";

const Project: React.FC = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background-secondary px-5">
            <div className="max-w-3xl mx-auto shadow-md rounded-md bg-background">
                <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
                    <div>
                        <Image src="/images/On-progess.avif" alt="on-progess" width={400} height={400} />
                    </div>
                    <div className="flex flex-col justify-center gap-2 items-center">
                        <h2 className="font-bold text-lg md:text-xl text-center"> Projects Page Under Development</h2>
                        <p className="text-center"> I’m currently working on this section to showcase my best projects,
                            real-world implementations, and technical skills.
                            Stay tuned — exciting updates are coming very soon!</p>
                        <span className="my-2">
                            <Link href="/" className="border border-green-700 bg-green-700 text-white hover:bg-white hover:text-green-700 transation-all duration-400 font-semibold px-3 py-2 rounded-sm">Back To Home</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;