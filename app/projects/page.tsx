import { poppins, robotoMono } from '@/app/fonts'
import Card from '@/app/components/card'
import testPic from '@/public/spotify.png'


export default function Project() {
    return (
        <div>
            <div className={`border-b h-20 pl-4 ${poppins.className} text-3xl fixed w-full top-0 pt-6 bg-white`}>Projects</div>
            {/* <div className='h-20 fixed top-[79px] w-full from-white to-transparent bg-gradient-to-b z-50'></div> */}
            <div className='mx-4 mt-20 flex flex-wrap gap-6'>
                <Card
                    imagePath={testPic}
                    imageAlt='alt'
                    description='An ebook management application. Created using flutter. Allows for imports exports etc.'
                    linkPath='https://github.com/s-waite/Loro'
                    title="Loro"
                    languages={["Dart", "Flutter", "SQLite"]}
                />
                <Card
                    imagePath={testPic}
                    imageAlt='alt'
                    description='An ebook management application. Created using flutter. Allows for imports exports etc.'
                    linkPath='https://github.com/s-waite/Loro'
                    title="Loro"
                    languages={["Dart", "Flutter", "SQLite"]}
                />
                <Card
                    imagePath={testPic}
                    imageAlt='alt'
                    description='An ebook management application. Created using flutter. Allows for imports exports etc.'
                    linkPath='https://github.com/s-waite/Loro'
                    title="Loro"
                    languages={["Dart", "Flutter", "SQLite"]}
                />
                <Card
                    imagePath={testPic}
                    imageAlt='alt'
                    description='An ebook management application. Created using flutter. Allows for imports exports etc.'
                    linkPath='https://github.com/s-waite/Loro'
                    title="Loro"
                    languages={["Dart", "Flutter", "SQLite"]}
                />
            </div>

        </div>
    )
}