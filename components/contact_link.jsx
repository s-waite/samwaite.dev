export default function ContactLink({ logo, subtitle, link }) {
  return (
  <div className="group w-fit relative">
      <a href={link}>{logo}</a>
    </div>
  )
}
