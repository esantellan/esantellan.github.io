import React from "react";
import TopSection from "../../components/top-section/top-section.component";
import AboutSection from "../../components/about/about.component";
import ContactSection from "../../components/contact/contact.component";

function Home() {
    return <>
        <TopSection/>
        
        <AboutSection />
        {/* <ProjectsSection/> */}
        <ContactSection />
    </>;
}

export default Home;