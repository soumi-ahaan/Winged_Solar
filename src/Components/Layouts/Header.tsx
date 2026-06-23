import menu from "../../assets/menu.png";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

import logo from "../../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute top-[72px] left-1/2 -translate-x-1/2 z-50 w-full max-w-[1400px] px-[50px] px-4 md:px-8 lg:px-12">
        <div className="backdrop-blur-xl bg-white/5  rounded-full px-5 py-3 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-8 py-2.5">
            <button
              onClick={() => setOpen(true)}
              className="text-white cursor-pointer"
            >
              <img src={menu} alt="Menu" />
            </button>

            <nav className="hidden lg:flex gap-8">
              <a className="text-white text-base">
                About
              </a>

              <a className="text-white text-base">
                C&I Solar
              </a>

              <a className="text-white text-base">
                EPC Advantages
              </a>

              <a className="text-white text-base">
                Critical Infrastructure
              </a>
            </nav>
          </div>

          {/* Logo */}
          <div className="absolute  left-1/2 -translate-x-1/3 top-1/2 -translate-y-1/2">
            <div className="h-40 w-40 rounded-full bg-white/5 backdrop-blur-3xl  flex items-center justify-center">
              <img
                src={logo}
                alt=""
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex gap-4">
            <button className="bg-[#F5A623] rounded-full px-7 py-4 font-semibold text-base cursor-pointer">
              Request Consultation
            </button>

            <button className="border border-white/30 text-white rounded-full px-7 py-4 text-base cursor-pointer">
              Download Overview
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}