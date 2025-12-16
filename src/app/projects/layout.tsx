import { Metadata } from "next";

export const metadata : Metadata = {
    title:"Project | Krish Kunwar",
    description : "Project | Krish Kunwar"
}

export default function Project({children} :{ children: React.ReactNode }) {
    return <div>{children}</div>
}