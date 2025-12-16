import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Contact Us | Krish Kunwar",
    description: "Contact Us | Krish Kunwar",
}

export default function ContactUs({children} : { children: React.ReactNode }) {
    return<div>{children}</div>
}