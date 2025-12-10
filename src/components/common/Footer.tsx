"use client";
import SocialLinks from "./SocialLinks";


const Footer: React.FC = () => {
    return (
        <div className="bg-background">
                <div className="max-w-7xl mx-auto p-5">
                    <div className="flex flex-col md:flex-row items-center justify-between p-2 border-t-2">
                        <div>
                            <p className="text-sm md:text-[16px] text-center">© 2025 Krish Kunwar. All rights reserved.</p>
                        </div>
                        <div>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer;