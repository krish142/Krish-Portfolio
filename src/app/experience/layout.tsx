import { Metadata } from "next";

export const metadata : Metadata = {
    title : "Experience | Krish Kunwar",
    description : "Experience | Krish Kunwar"
}

export default function Experience({children} : {children : React.ReactNode}) {
    return<div>{children}</div>
}