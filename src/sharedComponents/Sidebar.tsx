import { TbRefresh } from "react-icons/tb";
// import { AiOutlineHome } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";
import { LiaLightbulb } from "react-icons/lia";
import { GiGamepad } from "react-icons/gi";
import { PiAddressBookTabsThin } from "react-icons/pi";
import { CiMusicNote1 } from "react-icons/ci";
import { MdAmpStories } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 rounded-t-md shadow-md border border-gray-200 flex justify-center">
      <div className="w-full lg:w-[80%] px-2 py-1 grid grid-rows-[auto_1fr] gap-10 mt-5 h-full">
        <h1 className="text-2xl text-gray-500 font-semibold uppercase">
          <span className="underline decoration-blue-500 underline-offset-8">
            Short
          </span>
          cuts
        </h1>
        <ul className="h-full flex flex-col justify-start items-start gap-3">
          {/* <li className="flex items-center gap-2 cursor-pointer">
            <AiOutlineHome size={16} className="text-gray-500" />{" "}
            <span className="text-gray-900 text-lg">Home</span>
          </li> */}
          <li className="flex items-center gap-2 cursor-pointer">
            <TbRefresh size={16} className="text-gray-500" />{" "}
            <span className="text-gray-900 text-lg">Latest News</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <BiMessageDetail size={16} className="text-gray-500" />{" "}
            <span className="text-gray-900 text-lg">Opinion</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <TfiWorld size={16} className="text-gray-500" />
            <span className="text-gray-900 text-lg">International</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <LiaLightbulb size={16} className="text-gray-500" />
            <span className="text-gray-900 text-lg">Technology</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <GiGamepad size={16} className="text-gray-500" />
            <span className="text-gray-900 text-lg">Sports</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <PiAddressBookTabsThin size={16} className="text-gray-500" />
            <span className="text-gray-900 text-lg">Politics</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <CiMusicNote1 size={16} className="text-gray-500" />
            <span className="text-gray-900 text-lg">Entertainment</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <MdAmpStories size={16} className="text-gray-500" />
            <span className="text-gray-900 text-lg">Stories</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <MdMenuBook size={16} className="text-gray-500" />
            <span className="text-gray-900 text-lg">Educational</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <RiLogoutCircleLine size={16} className="text-gray-500" />
            <span className="text-gray-900 text-lg">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
