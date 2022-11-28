export default function InfoItem({ title, subtitle, date }) {
  return (
  <ul className="">
      <li className="text-primary-text-color text-lg">{title}</li>
      <li className="text-secondary-text-color">{subtitle}</li>
      <li className="text-secondary-text-color">{date}</li>
  </ul>
  )
}
