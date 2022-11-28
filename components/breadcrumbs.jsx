import Link from "next/link";
import { useRouter } from "next/router";

export default function Breadcrumbs() {
  const pageRoute = useRouter().asPath.slice(1)
return (
<ul className="flex gap-2 text-nord-6">
  <li>
    <Link href={{
          pathname: "/",
          query: { animateFast: true}
        }} className="hover:underline opacity-75">Home</Link>
  </li>
  <li className="opacity-75">/</li>
  <li>{pageRoute.charAt(0).toUpperCase() + pageRoute.slice(1)}</li>
</ul>
)
}
