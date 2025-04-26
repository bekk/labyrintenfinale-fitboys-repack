import { elements } from "../../../backend/dataset/elements";
import ElementCard from "./ElementCard";
import type { Element } from "../../../backend/dataset/elements";

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
            <ElementCard
              key={element.name}
              element={element}
              selectedElement={selectedElement}
              setSelectedElement={setSelectedElement}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElementGrid;
