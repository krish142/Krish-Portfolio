import { ConnectDB } from "@/lib/db";
import Contact from "@/model/Contact";
import { sendContactFormEmail, sendContactFormToTeam, sendEmail } from "../mailService/MailService";

export async function POST(req: Request) {
    try {
        await ConnectDB();
        const data = await req.json();
        const { name, email, message } = data;

        if (!name || name.trim() === "") {
            return Response.json(
                { message: "Full Name is required" },
                { status: 400 }
            );
        }

        if (!email || email.trim() === "") {
            return Response.json(
                { message: "Email is required" },
                { status: 400 }
            );
        }

        sendContactFormEmail(name, email);
        sendContactFormToTeam(name, email)

        await Contact.create({
            name,
            email,
            message: message || ""
        })
        return Response.json(
            { message: "Data stored successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.log(error);
        return Response.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}