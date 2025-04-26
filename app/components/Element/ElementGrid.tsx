import elementCard from "./ElementCard";
import type { Element } from "../../../backend/dataset/elements";
import { elements } from "../../../backend/dataset/elements";
import ElementCard from "./ElementCard";

interface Props {
  selectedElement: Element | null;
  setSelectedElement: (element: Element | null) => void;
}

const ElementGrid = ({ selectedElement, setSelectedElement }: Props) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Elementer
        </h1>
        <div className="text-sm text-gray-500">Steg 2</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <p className="text-gray-600 mb-6">Velg element for ditt TV program.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {elements.map((element) => (
            <div
              key={element.name}
              className={`relative cursor-pointer transition-all rounded-xl duration-300 ${
                selectedElement?.name === element.name
                  ? "ring-2 ring-blue-500 scale-[1.02]"
                  : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedElement(element)}
            >
              <ElementCard
                key={element.name}
                name={element.name}
                demographics={element.demographics}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElementGrid;
