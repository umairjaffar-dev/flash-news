import FlishNewsHeader from "../sharedComponents/FlishNewsHeader";
import Wrapper from "../components/uiComponents/Wrapper";

const Rootlayout = () => {
  return (
    <div className="w-screen h-screen bg-gray-200 grid grid-rows-[auto_1fr] gap-1">
      <FlishNewsHeader />

      <Wrapper />
    </div>
  );
};

export default Rootlayout;
