import Link from 'next/link'
import '../node_modules/nord/src/nord.css'

export default function SkillButton({ skill }) {
return (
<div className="hover:border-opacity-0 cursor-default w-min h-min border-dotted border-2 border-nord-6">
    <div className="px-4 py-2 text-nord-6">{skill}</div>  
</div>
)
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

