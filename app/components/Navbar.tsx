"use client";

import { useState } from "react";
import { Menu, X, User, Settings, Globe } from "lucide-react";
import { cn } from "~/lib/utils";

const navlinks = [
  {
    name: "Hjem",
    path: "/",
    shape: "polygon(10% 0%, 90% 0%, 100% 30%, 90% 100%, 10% 100%, 0% 70%)",
    mobileShape:
      "polygon(10% 0%, 90% 0%, 100% 30%, 90% 100%, 10% 100%, 0% 70%)",
  },
  {
    name: "Om oss",
    path: "/om-oss",
    shape: "polygon(0% 20%, 100% 0%, 90% 100%, 10% 90%)",
    mobileShape: "polygon(0% 20%, 100% 0%, 90% 100%, 10% 90%)",
  },
  {
    name: "Priser",
    path: "/priser",
    shape: "polygon(0% 0%, 100% 20%, 90% 100%, 10% 80%)",
    mobileShape: "polygon(10% 0%, 90% 10%, 100% 90%, 0% 100%",
  },
  {
    name: "Kontakt",
    path: "/kontakt",
    shape: "polygon(20% 0%, 100% 10%, 80% 100%, 0% 90%)",
    mobileShape: "polygon(20% 0%, 100% 10%, 80% 100%, 0% 90%)",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative w-full overflow-hidden bg-gray-50">
        <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-emerald-100/30 blur-3xl"></div>
        <div className="absolute -right-16 -top-10 h-40 w-40 rounded-full bg-purple-100/20 blur-2xl"></div>

        <nav className="relative w-full p-4">
          <div className="mx-auto flex container items-center justify-between">
            <div
              className="relative flex items-center"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 95% 30%, 100% 70%, 90% 100%, 30% 90%, 0% 100%, 5% 40%)",
              }}
            >
              <a
                href="/"
                className="bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-3 text-2xl font-bold text-emerald-600 shadow-[5px_5px_10px_#d1d1d1,_-5px_-5px_10px_#ffffff] transition-all duration-300 hover:shadow-[inset_5px_5px_10px_#d1d1d1,_inset_-5px_-5px_10px_#ffffff]"
              >
                Reniew
                <span className="ml-2 text-sm font-normal text-gray-500">
                  Framtiden av norsk TV
                </span>
              </a>
            </div>

            <div className="hidden md:flex md:space-x-2">
              {navlinks.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  style={{ clipPath: item.shape }}
                >
                  <a
                    href={`${item.path}`}
                    className="block bg-gray-50 px-4 py-2 font-medium text-gray-700 shadow-[3px_3px_6px_#d1d1d1,_-3px_-3px_6px_#ffffff] transition-all duration-300 hover:shadow-[inset_3px_3px_6px_#d1d1d1,_inset_-3px_-3px_6px_#ffffff] hover:text-emerald-600"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="hidden items-center space-x-4 md:flex">
              {[
                { icon: <User size={20} />, shape: "circle(50% at 50% 50%)" },
                {
                  icon: <Settings size={20} />,
                  shape:
                    "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  style={{ clipPath: item.shape }}
                >
                  <button className="block bg-gray-50 p-3 text-gray-700 shadow-[3px_3px_6px_#d1d1d1,_-3px_-3px_6px_#ffffff] transition-all duration-300 hover:shadow-[inset_3px_3px_6px_#d1d1d1,_inset_-3px_-3px_6px_#ffffff] hover:text-emerald-600">
                    {item.icon}
                  </button>
                </div>
              ))}
            </div>

            <div
              className="relative md:hidden"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="block bg-gray-50 p-3 text-gray-700 shadow-[3px_3px_6px_#d1d1d1,_-3px_-3px_6px_#ffffff] transition-all duration-300 hover:shadow-[inset_3px_3px_6px_#d1d1d1,_inset_-3px_-3px_6px_#ffffff]"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={cn(
          "absolute mt-4 md:hidden w-full ",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div
          className="bg-gray-50 p-6 shadow-[inset_5px_5px_10px_#d1d1d1,_inset_-5px_-5px_10px_#ffffff]"
          style={{
            clipPath: "polygon(0% 0%, 100% 5%, 95% 100%, 5% 95%)",
          }}
        >
          <div className="flex flex-col space-y-4">
            {navlinks.map((item) => (
              <div key={item.name} className="relative">
                <a
                  href={`${item.path}`}
                  className="block bg-gray-50 px-4 py-2 font-medium text-gray-700 shadow-[3px_3px_6px_#d1d1d1,_-3px_-3px_6px_#ffffff] transition-all duration-300 hover:shadow-[inset_3px_3px_6px_#d1d1d1,_inset_-3px_-3px_6px_#ffffff] hover:text-emerald-600"
                >
                  {item.name}
                </a>
              </div>
            ))}

            <div className="flex justify-around pt-4">
              {[
                { icon: <User size={20} />, shape: "circle(50% at 50% 50%)" },
                {
                  icon: <Settings size={20} />,
                  shape:
                    "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  style={{ clipPath: item.shape }}
                >
                  <button className="block bg-gray-50 p-3 text-gray-700 shadow-[3px_3px_6px_#d1d1d1,_-3px_-3px_6px_#ffffff] transition-all duration-300 hover:shadow-[inset_3px_3px_6px_#d1d1d1,_inset_-3px_-3px_6px_#ffffff] hover:text-emerald-600">
                    {item.icon}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
