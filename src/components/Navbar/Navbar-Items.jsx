"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavbarItems = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { name: "Home", href: "/" },
    { name: "All Animals", href: "/animals" },
  ];
  const pathName = usePathname();
  return (
    <>
      <div className="font-semibold text-[18px] text-[#3B2F2F] space-x-5 hidden md:flex ">
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
            Profile
          </Link>
        )}
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#3B2F2F] text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-[#e4a110] flex flex-col items-center py-4 space-y-4 md:hidden shadow-md font-semibold text-[18px] text-[#3B2F2F] z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`${
                pathName === item.href
                  ? "border-b-2 border-[#7A4E2D] text-[#001f3f]"
                  : "text-[#3B2F2F] hover:text-[#5A3A22]"
              }`}
            >
              {item.name}
            </Link>
          ))}
          {user && (
            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              className={`${
                pathName === "/profile"
                  ? "border-b-2 border-[#7A4E2D] text-[#001f3f]"
                  : "text-[#3B2F2F] hover:text-[#5A3A22]"
              }`}
            >
              Profile
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default NavbarItems;
