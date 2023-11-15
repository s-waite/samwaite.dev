import { Roboto_Mono, Poppins } from 'next/font/google';

export const robotoMono = Roboto_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-roboto-mono',
});

export const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});
