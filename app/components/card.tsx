import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { poppins, robotoMono } from '@/app/fonts'

type ProjectCardProps = {
    imagePath: StaticImageData;
    imageAlt: string;
    description: string;
    linkPath: string;
    title: string;
    languages: string[];
}

export default function Card({ imagePath, imageAlt, description, linkPath, title, languages }: ProjectCardProps) {
    return (
        <div className={`p-3 flex justify-start ${robotoMono.className} max-w-xl`}>
            <div className='flex flex-col gap-2 min-w-[250px] '>
                <h2 className='font-bold text-2xl'>{title}</h2>
                <div>{`[${languages.join(', ')}]`}</div>
                <div className='text-sm'>{description}</div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <Image
                    className=""
                    src={imagePath}
                    alt={imageAlt}
                />
                <Link className='text-xs underline' href={linkPath}>{linkPath}</Link>
            </div>

        </div>
    );
};

