import ConceptCard from "./ElementCard";

const concepts = [
  {
    name: "Laugh Track",
    popularity: 85,
  },
  {
    name: "Live Publikum",
    popularity: 70,
  },
  {
    name: "Hemmelig lag",
    popularity: 90,
  },
  {
    name: "Mat laging",
    popularity: 75,
  },
  {
    name: "Festival",
    popularity: 80,
  },
  {
    name: "Workshop",
    popularity: 65,
  },
];

const ElementGrid = () => {
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
          {concepts.map((concept) => (
            <ConceptCard
              key={concept.name}
              name={concept.name}
              popularity={concept.popularity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElementGrid;
