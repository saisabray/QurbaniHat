import Image from "next/image";
import NavbarItems from "./Navbar-Items";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-[#e4a110]">
      <div className="container mx-auto flex justify-between items-center px-6 rounded-lg">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={80}
          height={80}
          priority
        />
        <div>
          <NavbarItems />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
