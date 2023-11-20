'use client'

import Image from 'next/image'
import Skill from '@/app/components/skill'
import { poppins, robotoMono } from '@/app/fonts';


export default function Skills() {
    return (
        // <div className={`${poppins.variable} max-h-screen font-sans [column-width:300px] w-min [column-gap:0px]`}>
        <div className='overflow-hidden xl:overflow-auto w-full'>
            <div className={`mt-6 ml-4 ${poppins.className} text-3xl sm:hidden sm:mx-0 sm:text-center`}>Skills</div>
            <div className={`${poppins.variable} ml-4 mt-4 font-sans w-min flex gap-6 overflow-hidden flex-row flex-grow xl:flex-wrap xl:mx-auto`}>
                <div className='flex flex-col items-center gap-2 overflow-y-scroll hide-scrollbar'>
                    <div className="mb-4 w-[260px] sticky top-0 z-20 bg-white after:bg-gradient-to-b from-white to-transparent after:h-10 after:z-50 after:absolute after:w-full after:content-['']">
                        <div className={`${robotoMono.className} font-mono font-bold text-lg h-10 my-auto ml-0`}>// Languages</div>
                    </div>
                    <Skill
                        title="Java"
                        blurb="My software development degree had a strong focus on Java"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="SQL"
                        blurb="I have extensive experience with SQL and relational databases through many personal projects and my degree"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="Javascript"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="Python"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="C#"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="HTML"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="CSS"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />


                </div>
                <div className='flex flex-col items-center gap-2 overflow-y-scroll hide-scrollbar'>
                    <div className="mb-4 w-[260px] sticky top-0 z-20 bg-white after:bg-gradient-to-b from-white to-transparent after:h-10 after:z-50 after:absolute after:w-full after:content-['']">
                        <div className={`${robotoMono.className} font-mono font-bold text-lg h-10 my-auto ml-0`}>// Frameworks, Libraries</div>
                    </div>
                    <Skill
                        title="JUnit"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="Node.js"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="Next.js"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="React.js"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="WordPress"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                </div>
                <div className='flex flex-col items-center gap-2 overflow-y-scroll hide-scrollbar'>
                    <div className="mb-4 w-[260px] sticky top-0 z-20 bg-white after:bg-gradient-to-b from-white to-transparent after:h-10 after:z-50 after:absolute after:w-full after:content-['']">
                        <div className={`${robotoMono.className} font-mono font-bold text-lg h-10 my-auto ml-0`}>// Technologies, Tools</div>
                    </div>
                    <Skill
                        title="JUnit"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="Node.js"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="Next.js"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="React.js"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                    <Skill
                        title="WordPress"
                        blurb="some blurb"
                        projects={[
                            {
                                title: "Project Loro",
                                link: "/loro",
                                description: "An ebook management application built with Flutter."
                            },
                            {
                                title: "Project ABC",
                                link: "/abc",
                                description: "A sample project description here."
                            },
                        ]}
                    />
                </div>
            </div>
        </div>

    )
}
