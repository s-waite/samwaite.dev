import PageHeader from '../components/header.jsx'
import Layout from '../components/layout.jsx'
import InfoBox from '../components/info_box.jsx'
import InfoItem from '../components/info_item.jsx'
import SkillButton from '../components/skill_button.jsx'

export default function About() {
return (
<div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-5 grid-flow-row md:grid-flow-col">
  <InfoBox title="Education">
    <InfoItem title="Western Governors University" subtitle="Bachelors of Science in Software Development"
      date="2019 - 2022" />
    <InfoItem title="Eckerd College" subtitle="Pursued a Degree in Physics" date="2015 - 2017" />
  </InfoBox>
  <InfoBox title="Work History" className="">
    <InfoItem title="Freelance Software Developer" subtitle="Self-Employeed" date="Dec. 2020 - Nov. 2021" />
  </InfoBox> <div className="md:row-span-2"> <InfoBox title="Skills"> <div className="flex flex-wrap gap-5">
        <div className="hover:bg-nord-7 hover:scale-110 duration-100 ">
          <SkillButton skill="Java" />
        </div>
        <div className="hover:bg-nord-9 hover:scale-110 duration-100 ">
          <SkillButton skill="SQL" />
        </div>
        <div className="hover:bg-nord-10 hover:scale-110 duration-100 ">
          <SkillButton skill="JUnit" />
        </div>
        <div className="hover:bg-nord-11 hover:scale-110 duration-100 ">
          <SkillButton skill="Git" />
        </div>
        <div className="hover:bg-nord-12 hover:scale-110 duration-100 ">
          <SkillButton skill="Python" />
        </div>
        <div className="hover:bg-nord-13 hover:scale-110 duration-100 ">
          <SkillButton skill="Javascript" />
        </div>
        <div className="hover:bg-nord-14 hover:scale-110 duration-100 ">
          <SkillButton skill="React" />
        </div>
        <div className="hover:bg-nord-15 hover:scale-110 duration-100 ">
          <SkillButton skill="Linux" />
        </div>
        <div className="hover:bg-nord-7 hover:scale-110 duration-100 ">
          <SkillButton skill="Dart" />
        </div>
        <div className="hover:bg-nord-9 hover:scale-110 duration-100 ">
          <SkillButton skill="Lua" />
        </div>
        <div className="hover:bg-nord-10 hover:scale-110 duration-100 ">
          <SkillButton skill="Next.js" />
        </div>
        <div className="hover:bg-nord-11 hover:scale-110 duration-100 ">
          <SkillButton skill="Node.js" />
        </div>
        <div className="hover:bg-nord-12 hover:scale-110 duration-100 ">
          <SkillButton skill="Flutter" />
        </div>
        <div className="hover:bg-nord-13 hover:scale-110 duration-100 ">
          <SkillButton skill="Github" />
        </div>
        <div className="hover:bg-nord-14 hover:scale-110 duration-100 ">
          <SkillButton skill="Docker" />
        </div>
      </div>
    </InfoBox>
  </div>
</div>
)
}

About.getLayout = function getLayout(page) {
return (
<Layout>
  <PageHeader />
  {page}
</Layout>
)
}
