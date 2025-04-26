import { Progress } from "../ui/progress";

interface Props {
  name: string;
  interest: number;
  profitability: number;
}

const DemographyCard = ({ name, interest, profitability }: Props) => {
  return (
    <div
      className="bg-white border rounded-lg p-4 cursor-pointer hover:border-blue-500 hover:shadow-md transition-all"
      onClick={() => {}}
    >
      <h3 className="font-medium text-gray-800">{name}</h3>
      <div className="mt-3 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Interesse</span>
          <span className="text-gray-800">Høy</span>
        </div>
        <Progress value={interest} className="h-1.5" />

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Lønnsomhet</span>
          <span className="text-gray-800">Medium</span>
        </div>
        <Progress value={profitability} className="h-1.5" />
      </div>
    </div>
  );
};

export default DemographyCard;
