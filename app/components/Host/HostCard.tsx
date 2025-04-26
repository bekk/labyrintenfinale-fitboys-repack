import { useState } from "react";

import { PlusCircle, User } from "lucide-react";
import type { Host } from "../../../backend/dataset/hosts";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import toast from "react-hot-toast";

interface Props {
  host: Host;
  selectedHost: Host | null;
  setSelectedHost: (host: Host | null) => void;
}

const HostCard = ({ host, selectedHost, setSelectedHost }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`relative cursor-pointer group shadow-md hover:shadow-xl transition-all bg-white border border-gray-100 rounded-xl duration-300 ${
          selectedHost?.name === host.name
            ? "ring-2 ring-blue-500 scale-[1.02]"
            : "hover:shadow-lg"
        }`}
      >
        <article
          onClick={() => setIsOpen(true)}
          className="flex flex-col  p-6   transition-all duration-300 cursor-pointer  "
        >
          <div className="flex items-center gap-4 mb-3">
            {host.image ? (
              <div className="relative w-16 h-16 rounded-full ">
                <img
                  src={host.image || "/placeholder.svg"}
                  alt={host.name}
                  className="object-cover w-15 h-15 rounded-full"
                />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-400" />
              </div>
            )}
            <div>
              <h1 className="text-xl font-bold text-gray-800">{host.name}</h1>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-gray-500 line-clamp-2 text-sm">
              {host.description || "No description available"}
            </p>
          </div>
        </article>
        <button
          onClick={() => {
            toast.success(`Du har valgt ${host.name} som vert!`);
            setSelectedHost(host);
          }}
          className="w-full flex justify-end p-2"
        >
          <PlusCircle
            className={`w-6 h-6  transition-all duration-300 ${
              selectedHost?.name === host.name
                ? "text-blue-500 rotate-90"
                : "hover:text-blue-500 text-gray-500 group-hover:rotate-90"
            }`}
          />
        </button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
          {host.image && (
            <div className="relative w-full h-56">
              <img
                src={host.image || "/placeholder.svg"}
                alt={host.name}
                className="object-contain  h-56"
              />
            </div>
          )}
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {host.name}
              </DialogTitle>
              {/* <p className="text-gray-600 mt-1">{host.position}</p> */}
            </DialogHeader>
            <div className="mt-4">
              <p className="text-gray-700 leading-relaxed">
                {host.description || "No description available"}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HostCard;
