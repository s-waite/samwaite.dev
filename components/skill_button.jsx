import Link from 'next/link'
export default function SkillButton({ skill }) {
return (
<div className="hover:border-opacity-0 cursor-default w-min h-min border-dotted border-2 border-nord-6">
    <div className="px-4 py-2 text-nord-6">{skill}</div>  
</div>
)
}
