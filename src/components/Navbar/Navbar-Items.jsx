"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarItems = ({ user }) => {
  const items = [
    { name: "Home", href: "/" },
    { name: "All Animals", href: "/animals" },
    
  ];
  const pathName = usePathname();
  return (
    <div className="font-semibold text-[18px] text-[#3B2F2F] space-x-5">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`${
            pathName === item.href
              ? "border-b-2 border-[#7A4E2D] text-[#7A4E2D]"
              : "text-[#3B2F2F] hover:text-[#5A3A22]"
          }`}
        >
          {item.name}
        </Link>
      ))}
      {user && (
        <Link
          href="/profile"
          className={`${
            pathName === "/profile"
              ? "border-b-2 border-[#7A4E2D] text-[#7A4E2D]"
              : "text-[#3B2F2F] hover:text-[#5A3A22]"
          }`}
        >
          {user.name || "User"}
        </Link>
      )}
    </div>
  );
};

export default NavbarItems;
