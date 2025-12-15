"use client";
import ContactForm from "./ContactForm";
import SocialLinks from "../common/SocialLinks";
import { Phone, Mail, MapPin } from 'lucide-react';
import { ReactElement } from "react";

interface ContactInterface {
    id: number,
    name: string,
    icon: ReactElement,
    value: string
}

const contactData = [
    {
        id: 1,
        name: "phoneNo",
        icon: <Phone size={25} />,
        value: "+91 7579157738"
    },
    {
        id: 2,
        name: "mail",
        icon: <Mail size={25} />,
        value: "crishkunwar07@gmail.com"
    },
    {
        id: 3,
        name: "address",
        icon: <MapPin size={25} />,
        value: "Pithoragarh, Utttrakhand"
    }
]

const Contact: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div className="py-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 px-5">
                        <div className="flex flex-col gap-5 p-5">
                            <div>
                                <h2 className="font-extrabold text-2xl lg:text-4xl">Get In Touch</h2>
                                <div className="h-1 w-20 bg-green-700 my-2"></div>
                            </div>
                            <div>
                                <p className="max-w-md">I&apos;m currently open to new opportunities. If you have a project in mind or just want to say hi, feel free to send me a message.</p>
                            </div>
                            <div className="space-y-3">
                                {
                                    contactData.map((data: ContactInterface) => (
                                        <div className="flex gap-3 items-center" key={data.id}>
                                            <span className="rounded-sm bg-green-100 p-3 text-green-700 font-bold">
                                                {data.icon}
                                            </span>
                                            <span className="font-semibold">
                                                {data.value}
                                            </span>
                                        </div>
                                    ))
                                }


                            </div>
                            <div>
                                <SocialLinks />
                            </div>
                        </div>
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;