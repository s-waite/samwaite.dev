import './skill.css'
import Link from 'next/link'
import { robotoMono, poppins } from '@/app/fonts';
import React, { useState, useRef } from 'react';

type SkillProps = {
    title: string;
    blurb: string;
    projects: Project[];
}

type Project = {
    title: string;
    link: string;
    description: string;
};

export default function Skill({ title, blurb, projects }: SkillProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    // Calculate the max height for the expanding animation
    const maxHeight = isExpanded && contentRef.current ? `${contentRef.current.scrollHeight}px` : "0";

    return (
        <div className="skill">
            <div onClick={toggleExpansion}>
                <div className={robotoMono.className}>{title}</div>
                <svg
                    className={`chevron-down ${isExpanded ? 'rotate' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
            </div>
            <div
                ref={contentRef}
                className="content"
                style={{
                    maxHeight: maxHeight,
                    marginTop: isExpanded ? '15px' : 0,
                    marginLeft: isExpanded ? '15px' : 0
                }}>
                <div>{blurb}</div>
                <div className={robotoMono.className}>// Projects</div>
                {projects.map(project => (
                    <div key={project.title} className="project">
                        <Link href={project.link}>{project.title}</Link> - {project.description}
                    </div>
                ))}
            </div>
        </div>
    );
}
