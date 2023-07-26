import Link from "next/link";


export default function MenuItems({title,address,Icon}) {
  return (
    <div><Link className="mx-4 lg:mx-6 hover:text-amber-600" href={address} ><Icon className="lg:hidden sm:inline" />
    <p className="sm:hidden  lg:inline">{title}</p>
    
    </Link></div>
  )
}
