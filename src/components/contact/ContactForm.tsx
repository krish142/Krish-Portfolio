"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface ContactFromInterface {
    name: string,
    email: string,
    message: string
}
const ContactForm = () => {

    const [ContactData, setContactData] = useState<ContactFromInterface>({
        name: "",
        email: "",
        message: ""
    })

    const handlesubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        if(!ContactData.name || ContactData.name.trim() == "" ){
            toast.error("Full Name is require..")
            return;
        }
        if(!ContactData.email || ContactData.email.trim() == "" ){
            toast.error("Email is require..")
            return;
        }
        try {
           await axios.post("/api/contact", ContactData);
            toast.success("Form submitted successfully.");
            setContactData({
                name: "",
                email: "",
                message: ""
            })
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.log(error)
        }
    }

    return (
        <div className="max-w-lg  mx-auto shadow-lg rounded-md bg-background">
            <div className="p-7">
                <form onSubmit={handlesubmit}>
                    <div className="py-2">
                        <label>Full Name <span className="text-green-700">*</span></label>
                        <input type="text" name="name" value={ContactData.name} placeholder="Enter Your Full Name.." onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                            setContactData({...ContactData , name:e.target.value})
                        }} className="w-full border border-green-700 p-2 focus-visible:outline-none my-1 rounded-xs" />
                    </div>
                    <div className="py-2">
                        <label>Email <span className="text-green-700">*</span></label>
                        <input type="email" value={ContactData.email} name="email" placeholder="Enter Your Working Email.." onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                            setContactData({...ContactData , email:e.target.value})
                        }} className="w-full border border-green-700 p-2 focus-visible:outline-none my-1 rounded-xs" />
                    </div>
                    <div className="py-2">
                        <label>Message <span className="text-green-700 text-xs">(optioanl)</span></label>
                        <textarea className="w-full  border border-green-700 p-2 focus-visible:outline-none my-1 rounded-xs" name="message" value={ContactData.message} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => {
                            setContactData({...ContactData, message:e.target.value})
                        }} placeholder="Enter Message.." rows={4} />
                    </div>
                    <button type="submit" className="bg-green-700 w-full p-2 font-semibold text-white cursor-pointer transform transition-all duration-200 hover:scale-101 rounded-xs">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;