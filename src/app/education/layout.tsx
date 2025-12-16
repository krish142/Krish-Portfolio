import { Metadata } from "next";

export const metadata : Metadata = {
    title:"Education | Krish Kunwar",
    description : "Education | Krish Kunwar"
}

export default function Education({children} :{ children: React.ReactNode }){
    return <div>{children}</div>
}