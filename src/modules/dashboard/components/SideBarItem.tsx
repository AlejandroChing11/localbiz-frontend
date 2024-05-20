'use client';

import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import { Menu } from "../interfaces/menu";
import { usePathname } from "next/navigation";

export function SideBarItem({ title, link, icon }: Menu) {

  const path = usePathname();

  return (
    <li>
      <Link
        href={link}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl hover:bg-gradient-to-r hover:text-white hover:bg-sky-500 ${path === link ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""} `}>
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  )
}