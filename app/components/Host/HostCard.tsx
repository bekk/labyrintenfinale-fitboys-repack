import { useState } from "react";

import { User } from "lucide-react";
import type { Host } from "../../../backend/dataset/hosts";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface Props {
  host: Host;
}

const HostCard = ({ host }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article
        onClick={() => setIsOpen(true)}
        className="flex flex-col bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
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
            {/* <h3 className="text-sm text-gray-600">{host.position}</h3> */}
          </div>
        </div>

        <div className="mt-2">
          <p className="text-gray-500 line-clamp-2 text-sm">
            {host.description || "No description available"}
          </p>
        </div>
      </article>

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
