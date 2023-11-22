import Link from 'next/link'
import { robotoMono, poppins } from '@/app/fonts'

export default function Contact() {
    return (
        <div>
            <div className={`border-b-2 border-dotted h-20 pl-4 ${poppins.className} text-3xl fixed w-full top-0 pt-6 bg-white`}>About</div>
            <div className="p-10 max-w-xl">
                <div className="mt-20 text-justify">
                    <p className="before:absolute before:-left-4 before:top-0 before:w-1 before:h-full before:bg-green relative">Hello! I'm Sam, a software developer based in Asheville, NC. I graduated in November 2022 with a focus on Java. Currently, I work as a freelancer, developing everything from web applications to AI assistants.</p>
                    <br />
                    <p className="before:absolute before:-left-4 before:top-0 before:w-1 before:h-full before:bg-green relative">I'm driven by a passion for technology, continuously improving my skills in both emerging tech and core industry standards. Reach out if you'd like to collaborate or to request my resume.</p>
                    <br />
                    <div className={`${robotoMono.className} flex w-full gap-2 justify-around flex-wrap`}>
                        <Link href="/">// linkedin</Link>
                        <Link href="/">// github</Link>
                        <Link href="/">// email</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}