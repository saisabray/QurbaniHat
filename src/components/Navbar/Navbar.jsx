import Image from "next/image";
import NavbarItems from "./Navbar-Items";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Avatar, Button } from "@heroui/react";
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
      <div className="container mx-auto flex justify-between items-center px-6 rounded-lg">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={150}
          height={150}
          priority
        />
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
            <Button variant="outline">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button variant="outline">
              <Link href="/signin">Sign In</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
