import Link from 'next/link'
import Layout from '../components/layout'
import { useRouter } from 'next/router';

export default function Home() {
const { animateFast } = useRouter().query
return (
<div className="animate-none transform-none transition-none">
  <header className="text-nord-6 text-9xl font-['Bebas_Neue'] tracking-wider">Sam Waite</header>
  <div className={ `font-['Bebas_Neue'] pt-7 text-4xl ${animateFast ? "animate-slide-0-fast" : "animate-slide-0"}` }>
    <Link className="text-nord-6 w-min hover:scale-110 duration-75 block" href="/about">About</Link>
  </div>
  <div className={ `font-['Bebas_Neue'] pt-7 text-4xl ${animateFast ? "animate-slide-1-fast" : "animate-slide-1"} opacity-0 [animation-fill-mode:forwards]` }>
    <Link className="text-nord-6 w-min hover:scale-110 duration-75 block" href="/projects">Projects</Link>
  </div>
  <div className={ `font-['Bebas_Neue'] pt-7 text-4xl ${animateFast ? "animate-slide-2-fast" : "animate-slide-2"} opacity-0  [animation-fill-mode:forwards]` }>
    <Link className="text-nord-6 w-min hover:scale-110 duration-75 block" href="/contact">Contact</Link>
  </div>
</div>
)
}

Home.getLayout = function getLayout(page) {
return (
<Layout>
  {page}
</Layout>
)
}

