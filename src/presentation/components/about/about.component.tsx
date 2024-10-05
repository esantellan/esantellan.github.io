import React, { useEffect, useState } from "react";
import './styles.css';

function About() {
    const [age, setAge] = useState(0);

    useEffect(() => {
        const nowDate = Date.now();
        const birthDate = new Date(1991, 9, 9);

        const elapsedTime = nowDate - birthDate.getTime();
        const elapsedYears = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365));

        setAge(elapsedYears);
    }, []);

    return <section className="aboutSection" id="aboutSection">
        <div className="titleContainer">
            <span>A bit about</span>
            <span className="titleMe">me</span>
        </div>

        <div className="profileContainer">
            <div className="center">
                {/* <img className="profileImage" src="/img/pfp.gif" alt="My Profile Picture" /> */}
            </div>

            <div className="profileDescription">

                <span>
                    Hello! My name is Emiliano and I am a {age} year old software developer 
                    from the Argentina. I love building websites, native and hybrid mobile apps, and 
                    have been using languages ​​like .NET/C#, JavaScript/TypeScript, 
                    Swift and Kotlin to do so for the last 12 years or so.
                </span>

                <div className="profileTechnologies">
                    <img 
                        src="/img/NET.png" 
                        alt=".NET" 
                        height="40"
                        title=".NET"
                    />
                    <img 
                        src="/img/c-sharp.png" 
                        alt="C Sharp" 
                        height="40"
                        title="C#"
                    />
                    <img 
                        src="/img/node.png" 
                        alt="NodeJs" 
                        height="40"
                        title="NodeJs"
                    />
                    <img 
                        src="/img/javascript.png" 
                        alt="JavaScript" 
                        height="40"
                        title="JavaScript"
                    />
                    <img 
                        src="/img/typescript.png" 
                        alt="TypeScript" 
                        height="40"
                        title="TypeScript"
                    />
                    <img 
                        src="/img/html.png" 
                        alt="HTML" 
                        height="40"
                        title="HTML"
                    />
                    <img 
                        src="/img/angular.png" 
                        alt="Angular Framework" 
                        height="40"
                        title="Angular"
                    />
                    <img 
                        src="/img/react.png" 
                        alt="React" 
                        height="40"
                        title="React"
                    />
                    <img 
                        src="/img/flutter.png" 
                        alt="Flutter" 
                        height="40"
                        title="Flutter"
                    />
                    <img 
                        src="/img/ionic.png" 
                        alt="Ionic Framework" 
                        height="40"
                        title="Ionic"
                    />
                    <img 
                        src="/img/android.png" 
                        alt="Android Studio" 
                        height="40"
                        title="Android"
                    />
                    <img 
                        src="/img/swift.png" 
                        alt="Swift" 
                        height="40"
                        title="Swift"
                    />
                </div>
            </div>
        </div>
    </section>;
}

export default About;