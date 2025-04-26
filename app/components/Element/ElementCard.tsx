import { Progress } from "../ui/progress";

interface Props {
  name: string;
  popularity: number;
}

const ElementCard = ({ name, popularity }: Props) => {
  return (
    <div
      key={name}
      className="bg-white border rounded-lg overflow-hidden cursor-pointer hover:border-blue-500 hover:shadow-md transition-all"
      onClick={() => {}}
    >
      <div className=" bg-gray-100 relative">
        <div className=" p-4">
          <h3 className=" text-black text-2xl font-bold">{name}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Popularitet</span>
            <span className="text-gray-800">{popularity}%</span>
          </div>
          <Progress value={popularity} className="h-1.5" />
        </div>

        <div className="space-y-2 mt-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Demografi</span>
            <span className="text-gray-800">{popularity}%</span>
          </div>
          <Progress value={popularity} className="h-1.5" />
        </div>
      </div>
    </div>
  );
};

export default ElementCard;
