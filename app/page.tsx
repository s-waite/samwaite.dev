import Image from 'next/image'
import Skill from '@/app/components/skill'
import { poppins } from '@/app/fonts';


export default function Home() {
    return (
        <main className={poppins.className}>
            <p>This is a test</p>
            <Skill />
            <Skill />
            <Skill />
        </main>
    )
}
