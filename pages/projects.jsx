import PageHeader from '../components/header.jsx'
import Layout from '../components/layout.jsx'
import InfoBox from '../components/info_box.jsx'
import InfoItem from '../components/info_item.jsx'
import SkillButton from '../components/skill_button.jsx'
import ProjectCard from '../components/project_card.jsx'
import Image from 'next/image'

const logoSize = 40
const flutterLogo =
<Image src="/flutterLogo.svg" width={logoSize} height={logoSize} alt="Flutter Logo" title="Flutter" className="bg-white p-1 rounded-lg hover:scale-105" />
const dartLogo =
<Image src="/dartLogo.svg" width={logoSize} height={logoSize} alt="Dart Logo" title="Dart" className="bg-white p-1 rounded-lg hover:scale-105" />
const javaLogo =
<Image src="/javaLogo.svg" width={logoSize} height={logoSize} alt="Java Logo" title="Java" className="bg-white p-1 rounded-lg hover:scale-105" />
const javafxLogo =
<Image src="/javafxLogo.svg" width={logoSize} height={logoSize} alt="JavaFX Logo" title="JavaFX" className="bg-white p-1 rounded-lg hover:scale-105" />
const junit5Logo =
<Image src="/junit5Logo.svg" width={logoSize} height={logoSize} alt="Junit 5 Logo" title="Junit 5" className="bg-white p-1 rounded-lg hover:scale-105" />
const nextjsLogo =
<Image src="/nextjsLogo.svg" width={logoSize} height={logoSize} alt="Next.js Logo" title="Next.js" className="bg-white p-1 rounded-lg hover:scale-105" />
const javascriptLogo =
<Image src="/javascriptLogo.png" width={logoSize} height={logoSize} alt="Javascript Logo" title="Javascript" className="bg-white p-1 rounded-lg hover:scale-105" />
const htmlLogo =
<Image src="/htmlLogo.svg" width={logoSize} height={logoSize} alt="HTML Logo" title="HTML" className="bg-white p-1 rounded-lg hover:scale-105" />
const cssLogo =
<Image src="/cssLogo.svg" width={logoSize} height={logoSize} alt="CSS Logo" title="CSS" className="bg-white p-1 rounded-lg hover:scale-105" />
const tailwindLogo =
<Image src="/tailwindLogo.svg" width={logoSize} height={logoSize} alt="Tailwind CSS Logo" title="TailwindCSS" className="bg-white p-1 rounded-lg hover:scale-105" />

export default function Projects() {
return (
<div className="mx-auto max-w-6xl gap-5 flex justify-center self-center flex-wrap">
  <ProjectCard type="Flutter Application" link="https://github.com/s-waite/Loro" date="September 30, 2022" title="Loro" logos={[flutterLogo, dartLogo]}>
    An ebook management application with support for importing, organizing and managing ebooks
  </ProjectCard>
  <ProjectCard type="Java Application" link="https://github.com/s-waite/TermTracker" date="August 15, 2022" title="TermTracker" logos={[javaLogo, javafxLogo,
    junit5Logo]}>
    An Android app that allows you to add, edit, delete, and track terms, courses, and assigments. Follows the MVC pattern and uses Room abstraction for the SQLite local storage.
  </ProjectCard>
  <ProjectCard type="Web Application" link="https://github.com/s-waite/taniti" date="June 6, 2022" title="Taniti Website" demoLink="https://swaite-taniti.netlify.app/" logos={[nextjsLogo, javascriptLogo, htmlLogo, cssLogo, tailwindLogo]}>
    A mock tourism website for the fake country "Taniti" created using Next.js with tailwindCSS and deployed with Netlify. 
  </ProjectCard>
</div>
)
}

Projects.getLayout = function getLayout(page) {
return (
<Layout>
  <PageHeader />
  {page}
</Layout>
)
}
