import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Clik" styles="rounded-sm bg-red-500 px-5 py-2" />
    </div>
  );
};
export default Landing;
