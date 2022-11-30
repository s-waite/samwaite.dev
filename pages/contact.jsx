import PageHeader from '../components/header.jsx'
import Layout from '../components/layout.jsx'
import ContactLink from '../components/contact_link.jsx'
import Image from 'next/image'

const logoSize = 100
const githubLogo =
<Image src="/githubLogo.svg" width={logoSize} height={logoSize} alt="Github Logo"
  className="bg-white bg-opacity-30 p-1 rounded-lg hover:bg-opacity-90 hover:scale-105 duration-300" />
const linkedinLogo =
<Image src="/linkedinLogo.svg" width={logoSize} height={logoSize} alt="LinkedIn Logo"
  className="bg-white bg-opacity-30 p-1 rounded-lg hover:bg-opacity-90 hover:scale-105 duration-300" />
const emailLogo =
<Image src="/emailLogo.svg" width={logoSize} height={logoSize} alt="Email Icon"
  className="bg-white bg-opacity-30 p-1 rounded-lg hover:bg-opacity-90 hover:scale-105 duration-300" />

export default function Contact() {
return (
<div className="mx-auto max-w-6xl flex flex-col items-center gap-6 mt-10">
  <ContactLink logo={githubLogo} subtitle="Github" link="https://github.com/s-waite"/>
  <ContactLink logo={linkedinLogo} subtitle="LinkedIn" link="https://www.linkedin.com/in/samuelwaite/"/>
  <ContactLink logo={emailLogo} subtitle="Email" link="mailto: sam@samwaite.dev" />
</div>
)
}

Contact.getLayout = function getLayout(page) {
return (
<Layout>
  <PageHeader />
  {page}
</Layout>
)
}
