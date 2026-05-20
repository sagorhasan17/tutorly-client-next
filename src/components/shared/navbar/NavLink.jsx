"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href, classList }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`${classList} ${isActive ? "text-[#462C7D] border-b border-[#462C7D] pb-1" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
