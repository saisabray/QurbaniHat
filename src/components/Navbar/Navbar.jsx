import Image from "next/image";
import NavbarItems from "./Navbar-Items";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import SignOutButton from "./SignOut";
const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  console.log({ session });

  return (
    <div className="sticky top-0 z-50 w-full py-4 bg-[#e4a110]">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 rounded-lg relative">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="w-[100px] md:w-[150px] h-auto"
            priority
          />
        </Link>
        <div>
          <NavbarItems user={user} />
        </div>
        {user && (
          <div className="flex justify-between items-center gap-3">
            <div>
              <Avatar size="sm">
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
            </div>
            <SignOutButton></SignOutButton>
          </div>
        )}
        {!user && (
          <div className="flex justify-between gap-3 font-semibold">
            <button className="btn btn-secondary">
              <Link href="/signup">Sign Up</Link>
            </button>
            <button className="btn btn-primary ">
              <Link href="/signin">Sign In</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
