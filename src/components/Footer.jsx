import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaT, FaW } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className=" flex-col flex text-center bg-cover  bg-center text-base-content rounded p-10 mt-20"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/LDJYCfMB/Chat-GPT-Image-Apr-30-2026-11-54-49-AM.png)",
      }}
    >
      <nav className="flex justify-center items-center">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={200}
          height={200}
          
        />
      </nav>
      <nav className="grid grid-flow-col gap-4 w-fit mx-auto mt-5">
        <Link href="/about" className="text-base ">
          About us
        </Link>
        <Link href="/contact" className=" text-base ">
          Contact
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 w-fit mx-auto mt-5">
          <Link
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-10 h-10" />
          </Link>
          <Link
            href="https://www.twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-10 h-10" />
          </Link>
          <Link
            href="https://wa.me/yourwhatsapplink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-10 h-10" />
          </Link>
        </div>
      </nav>
      <aside>
        <p className="font-semibold mt-5">
          Copyright © {new Date().getFullYear()} - All right reserved by
          QurbaniHat
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
