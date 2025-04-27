import { useState } from "react";
import {
  Menu,
  X,
  User,
  Settings,
  BarChart3,
  Brain,
  Database,
  Sparkles,
} from "lucide-react";
import { cn } from "~/lib/utils";

const navlinks = [
  {
    name: "Start",
    path: "/start",
    icon: <Sparkles className="mr-1 h-4 w-4" />,
  },
  {
    name: "Om oss",
    path: "/",
    icon: <Brain className="mr-1 h-4 w-4" />,
  },
  {
    name: "Priser",
    path: "/priser",
    icon: <Database className="mr-1 h-4 w-4" />,
  },
  {
    name: "Kontakt",
    path: "/kontakt",
    icon: <BarChart3 className="mr-1 h-4 w-4" />,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative w-full overflow-hidden ">
        <nav className="relative w-full p-4">
          <div className="mx-auto flex container bg-gray-200 rounded-full px-4 items-center justify-between">
            <div className="relative flex items-center">
              <a
                href="/"
                className=" px-6 py-3 text-2xl font-bold text-emerald-600 transition-all duration-300"
              >
                Reniew
                <span className="ml-2 text-sm font-normal text-gray-500">
                  Framtiden til norsk TV
                </span>
              </a>
            </div>

            <div className="hidden md:flex md:space-x-2">
              {navlinks.map((item) => (
                <div key={item.name} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-sky-500/10 rounded-lg blur-sm group-hover:opacity-100 opacity-0 transition-opacity"></div>
                  <a
                    href={`${item.path}`}
                    className="relative  rounded-lg px-4 py-2 font-medium text-gray-700 border border-indigo-500/30 transition-all duration-300 hover:border-sky-500/80 hover:text-indigo-800 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] flex items-center bg-white/50 backdrop-blur-sm"
                  >
                    {item.icon}
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-300 group-hover:w-full"></span>
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
          "absolute mt-4 z-50 md:hidden w-full ",
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
