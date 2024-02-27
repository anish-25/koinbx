import { Download, Grip, Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
const Header = () => {
  return (
    <nav className="sticky top-0 flex justify-between items-center !px-[2.5rem] bg-white py-2 z-50">
      <div className="flex justify-start items-center space-x-7">
        <Image
          src={"https://koinbx.com/assets/img/NewUI/KoinBXLogoHead.svg"}
          alt="logo"
          height={60}
          width={120}
        />
        <div className="justify-start items-center space-x-7 lg:flex hidden">
          <Grip className="cursor-pointer hover:text-primary transition-all" />
          <a
            href="/"
            className="text-sm font-medium hover:text-primary transition-all">
            Markets
          </a>
          <a
            href="/"
            className="text-sm font-medium hover:text-primary transition-all">
            Fees
          </a>
          <a
            href="/"
            className="text-sm font-medium hover:text-primary transition-all">
            Trade
          </a>
          <span className="w-[2px] h-[18px] bg-gray-400"></span>
          <a
            href="/"
            className="text-sm font-medium hover:text-primary transition-all">
            List Your Crypto
          </a>
        </div>
      </div>
      <div className="flex justify-start items-center lg:space-x-7 space-x-3">
        <a
          href="/"
          className="text-primary relative text-sm font-medium lg:flex hidden justify-start items-center">
          <span className="absolute bg-red-500 text-white text-[9px] -top-1 -right-2 rounded-md px-1">
            LIVE .
          </span>
          <Image
            src={"https://koinbx.com/assets/img/announcement_img.png"}
            alt="announcement"
            width={40}
            height={40}
          />
          <span>Trade Contest</span>
        </a>
        <a
          href="/"
          className="text-sm font-medium hover:text-primary transition-all lg:flex hidden">
          Login
        </a>
        <button className="px-5 py-1.5 text-sm font-medium bg-primary text-white rounded-full">
          Register
        </button>
        <span>
          <Download size={18} className="font-medium lg:flex hidden" />
        </span>
        <span>
          <Menu size={22} fontWeight={600} className="font-medium lg:hidden flex" />
        </span>
      </div>
    </nav>
  );
};

export default Header;
