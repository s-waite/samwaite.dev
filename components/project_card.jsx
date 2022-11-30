export default function ProjectCard({ link, type, demoLink, date, title, logos, children }) {
  let hasDemo = false
  const test = { demoLink }.demoLink
  console.log(test)
  if (test != null) {
   hasDemo = true;
  }
return (
<div className="p-4 bg-nord-1 w-min h-min border border-secondary-text-color hover:border-nord-14 duration-75">
  <div className="w-72 h-[25rem] relative">
    <h2 className="text-secondary-text-color"> {type} </h2>
    <div className="h-1" />
    <h1 className="top-4 text-primary-text-color text-3xl"> {title} </h1>
    <h2 className="text-sm text-secondary-text-color"> {date} </h2>
    <div className="h-6" />
    <p className="text-primary-text-color"> {children} </p>
    <div className="absolute bottom-12 left-0 flex gap-5"> {logos} </div>
    <a href={link} className="text-nord-9 absolute bottom-0 left-0">SOURCE CODE</a>
    <a className="absolute bottom-0 left-36 text-nord-9" href={hasDemo ? {demoLink}.demoLink : null}>{hasDemo ? "DEMO" : null}</a>
  </div>
</div>
)
}
