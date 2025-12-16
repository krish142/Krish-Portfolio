import { Metadata } from "next";

export const metadata : Metadata = {
    title : "Skill | Krish Kunwar",
    description : "Skill | Krish Kunwar"
}

export default function Skill({children} : {children : React.ReactNode}) {
    return<div>{children}</div>
}