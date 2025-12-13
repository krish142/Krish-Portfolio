"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { ProjectLandingPage } from "@/components/projects/ProjectsLandingPage";

const page:React.FC = () => {
    return(
        <>
        <Header />
        <ProjectLandingPage />
        <Footer />
        </>
    )
}

export default page;