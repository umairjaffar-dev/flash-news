import { NewsType } from "../../../utils/typeDefinations";
import { FaEye } from "react-icons/fa";
import { AiTwotoneMessage } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdShare } from "react-icons/md";

type NewsCardPropsType = {
  data: NewsType;
};

const NewsCard = ({ data }: NewsCardPropsType) => {
  const { logo, description, heading, image, published } = data;
  return (
    <div
      className="w-2/3 flex flex-col justify-start items-start gap-2 px-3 py-2 border border-gray-300 bg-gray-100 shadow-sm rounded-md"
    >
      <div className="w-full grid grid-cols-[auto_1fr] gap-2 place-items-center px-3 py-2">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 rounded-full shadow-sm"
        />
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <p className="w-full text-md text-gray-900 font-semibold">
            {heading}
          </p>
          <p className="w-full text-sm text-gray-600">{published}</p>
        </div>
      </div>
      {/* Image */}
      <div className="w-full flex flex-col">
        <img
          src={image}
          alt="image"
          className="w-full h-fit object-cover rounded-sm shadow-sm"
        />
        <div className="w-full flex justify-start items-center gap-8 mt-2">
          <div className="relative w-11 h-8 flex items-center p-1">
            <FaEye cursor="pointer" size={18} />
            <span className="absolute top-0 right-0 text-[12px] font-semibold text-black">
              1.2k
            </span>
          </div>
          <div className="relative w-11 h-8 flex items-center p-1">
            <AiTwotoneMessage size={18} cursor="pointer" />
            <span className="absolute top-0 right-2 text-[12px] font-semibold text-black">
              52
            </span>
          </div>
          <div className="relative w-11 h-8 flex items-center p-1">
            <IoIosHeartEmpty cursor="pointer" size={18} />
            <span className="absolute top-0 right-0 text-[12px] font-semibold text-black">
              2.2k
            </span>
          </div>
          <div className="relative w-11 h-8 flex items-center p-1">
            <MdShare size={18} cursor="pointer" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="bg-gray-100 py-1 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
