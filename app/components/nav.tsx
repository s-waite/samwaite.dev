'use client'

import './skill.css'
import { robotoMono, poppins } from '@/app/fonts';
import React, { useState, useRef } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Nav() {
    const pathname = usePathname()
    return (
        <div className='flex flex-col gap-8 sm:flex-row sm:whitespace-nowrap sm:overflow-x-scroll sm:gap-4'>
            <Link className={`${robotoMono.className} relative z-10 ${pathname === '/skills' ? 'before:absolute before:h-1 before:bg-blue before:-z-10 before:w-[86px] overflow-hidden before:bottom-1 before:left-0 sm:whitespace-nowrap sm:overflow-visible' : ''}`} href="/skills">// Skills</Link>
            <Link className={`${robotoMono.className} relative z-10 ${pathname === '/projects' ? 'before:absolute before:h-1 before:bg-red before:-z-10 before:w-[106px] overflow-hidden before:bottom-1 before:left-0 sm:whitespace-nowrap sm:overflow-visible' : ''}`} href="/projects">// Projects</Link>
            <Link className={`${robotoMono.className} relative z-10 ${pathname === '/about' ? 'before:absolute before:h-1 before:bg-green before:-z-10 before:w-[78px] overflow-hidden before:bottom-1 before:left-0 sm:whitespace-nowrap sm:overflow-visible' : ''}`} href="/about">// About</Link>
        </div>
    );
}