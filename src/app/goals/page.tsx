import React from 'react';
import {FaReact} from "react-icons/fa";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {BiLogoTypescript, BiLogoPostgresql} from "react-icons/bi";
import {IoShield, IoLogoVercel} from "react-icons/io5";
import {SiDrizzle, SiZod} from "react-icons/si";

const Page = () => {
    const technologies = [
        {name: "React", icon: <FaReact/>},
        {name: "Next.js", icon: <RiNextjsFill/>},
        {name: "TypeScript", icon: <BiLogoTypescript/>},
        {name: "Tailwind CSS", icon: <RiTailwindCssFill/>},
        {name: "Next-Auth.js", icon: <IoShield/>},
        {name: "Drizzle ORM", icon: <SiDrizzle/>},
        {name: "PostgreSQL", icon: <BiLogoPostgresql/>},
        {name: "Zod", icon: <SiZod/>},
        {name: "Vercel", icon: <IoLogoVercel/>},
    ];
    const skills = [
        "Authentication",
        "Server Actions",
        "Clean architecture",
        "Database design",
        "Form validation",
        "Server Components",
        "Responsive layouts",
        "Deployment with Vercel",
    ];

    return (
        <div className={"min-h-screen"}>
            <div className={"flex flex-col p-10 font-poppins"}>
                <div>
                    <h1 className={"flex justify-center text-brandCoffee font-normal text-4xl"}>
                        project goals
                    </h1>
                    <div className={"flex justify-center sm:items-start m-5"}>
                        during the development of this project, I intentionally kept the interface minimal. <br/>
                        the objective wasn&#39;t to build the most feature-complete website,
                        but to learn modern full-stack development practices and create a solid technical foundation.
                    </div>
                </div>
                <div className={"mt-5"}>
                    <h1 className={"flex justify-center text-brandCoffee font-normal text-4xl"}>
                        tech stack
                    </h1>
                    <div className="grid grid-cols-2 mob3:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 mt-5">
                        {technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex items-center gap-1 sm:gap-2 rounded-lg border border-brandWalnut px-2 sm:px-4 py-2 text-brandWalnut font-medium"
                            >
                                {tech.icon}{tech.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={"mt-5"}>
                    <h1 className={"flex justify-center text-brandCoffee font-normal text-4xl"}>things I learnt</h1>
                    <div className={"grid grid-cols-2 mob3:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 mt-5"}>
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="rounded-lg px-2 sm:px-4 py-2 text-white bg-brandWalnut font-medium"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;