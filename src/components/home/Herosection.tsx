"use client";

import Image from "next/image";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

const HeroSection: React.FC = () => {
    return (
        <div>
            <div className="py-15 px-5">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                        <div className="max-w-2xl flex flex-col gap-4 items-center">
                            <div>
                                <h2 className="font-extrabold text-3xl lg:text-5xl max-w-xl text-center">Creating web products, brands, <span className="text-green-700">and experience</span> </h2>
                            </div>
                            <div className="inline-block text-center text-xl font-semibold px-2">
                                Hi, I&apos;m Krish - A Passionate {" "}
                                <span className="lg:inline-block block text-green-700">
                                    <Typewriter options={{
                                        strings: [
                                            " Frontend Developer",
                                            " Backend Developer",
                                            " Web Developer",
                                            " Software Developer"
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        delay: 76,
                                        deleteSpeed: 75
                                    }} />
                                </span>
                            </div>
                            <div>
                                <Link href="/contact" className="bg-green-700 px-3 py-2 rounded-sm text-white font-semibold">Get In Touch</Link>
                            </div>
                        </div>
                        <div>
                            <Image src="/images/krish.png" alt="krish-logo" width={250} height={250} className="rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;