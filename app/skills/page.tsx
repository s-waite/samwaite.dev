'use client'

import Image from 'next/image'
import Skill from '@/app/components/skill'
import { poppins, robotoMono } from '@/app/fonts';


export default function Home() {
    return (
        // <div className={`${poppins.variable} max-h-screen font-sans [column-width:300px] w-min [column-gap:0px]`}>
        <div className={`${poppins.variable} ml-4 mt-4 max-h-screen font-sans w-min flex gap-4 overflow-hidden`}>
            <div className='flex flex-col items-center gap-2 overflow-y-scroll hide-scrollbar'>
                <div className="mb-4 w-[300px] sticky top-0 z-20 bg-white after:bg-gradient-to-b from-white to-transparent after:h-10 after:z-50 after:absolute after:w-full after:content-['']">
                    <div className={`${robotoMono.className} font-mono font-bold text-lg h-10 my-auto ml-5`}>// Languages</div>
                </div>
                <Skill
                    title="Java"
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
                    title="JavaScript"
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
                    title="Java"
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
                    title="JavaScript"
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
                    title="Java"
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
                    title="JavaScript"
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
            {/* Languages Column*/}
            <div className='flex flex-col items-center gap-2 overflow-y-scroll hide-scrollbar'>
                <h1 className={`${robotoMono.className} font-mono font-bold text-lg`}>// Languages</h1>
                <Skill
                    title="Java"
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
                    title="JavaScript"
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
                    title="Java"
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
                    title="JavaScript"
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
                    title="Java"
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
                    title="JavaScript"
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
    )
}
