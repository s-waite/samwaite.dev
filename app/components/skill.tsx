import './skill.css'

export default function Skill() {
    return (
        <div className="skill">
            <div>
                <div>Java</div>
                <svg className="chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>chevron-down</title>
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
            </div>

            <div className="content">
                <div>Java was the main focus of my degree, and my favorite language to work in</div>
                <div>// Projects</div>
                <div className="project"><a href="/">Loro</a> - a ebook management application build with flutter.</div>
                <div className="project"><a href="/">Loro</a> - a ebook management application build with flutter.</div>
                <div className="project"><a href="/">Loro</a> - a ebook management application build with flutter.</div>

            </div>
        </div>
    );
}
