"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFoundPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0F172A] text-center text-white px-4">
            <h1 className="text-7xl font-bold  text-green-700 mb-4">
                404
            </h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-gray-400 mb-8 max-w-md">
                The page you&apos;re looking for doesn&apos;t exist or has been moved to another location.
            </p>

            <div className="flex gap-4">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-green-700 border border-green-700 px-6 py-2 rounded-lg hover:opacity-90 transition-all"
                >
                    <AiOutlineHome className="text-lg" />
                    Go Home
                </Link>

                <button
                    onClick={() => router.back()}
                    className="flex items-center text-white gap-2 bg-green-700 px-6 py-2 rounded-lg hover:bg-green-900 transition-all"
                >
                    <FiArrowLeft className="text-lg" />
                    Go Back
                </button>
            </div>
            <div className="flex space-x-2 py-8">
                <div className="w-2 h-2 bg-green-700 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-green-700 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-green-700 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
        </div>
    );
}
