'use client'

import './skill.css'
import { robotoMono, poppins } from '@/app/fonts';
import React, { useState, useRef } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Nav() {
    const pathname = usePathname()
    return (
        <div className='flex flex-col gap-8'>
            <Link className={`${robotoMono.className} relative z-10 ${pathname === '/skills' ? 'before:absolute before:h-1 before:bg-[#42bfdd] before:-z-10 before:w-96 overflow-hidden before:bottom-1 before:left-0 ' : ''}`} href="/skills">// Skills</Link>
            <Link className={`${robotoMono.className} relative z-10 ${pathname === '/projects' ? 'before:absolute before:h-1 before:bg-[#42bfdd] before:-z-10 before:w-96 overflow-hidden before:bottom-1 before:left-0 ' : ''}`} href="/projects">// Projects</Link>
            <Link className={`${robotoMono.className} relative z-10 ${pathname === '/contact' ? 'before:absolute before:h-1 before:bg-[#42bfdd] before:-z-10 before:w-96 overflow-hidden before:bottom-1 before:left-0 ' : ''}`} href="/contact">// Contact</Link>
        </div>
    );
}