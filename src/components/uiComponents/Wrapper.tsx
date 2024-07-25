import LiveNews from "../../pages/LiveNews";
import Sidebar from "../../sharedComponents/Sidebar";

const Wrapper = () => {
  return (
    <div className="w-full grid grid-cols-[2fr_8fr] gap-3 px-16">
      <Sidebar />
      <LiveNews />
    </div>
  );
};

export default Wrapper;
