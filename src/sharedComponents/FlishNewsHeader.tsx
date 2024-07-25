import { useState } from "react";
import newsLogo from "../assets/news-logo.jpg";
import SingleSelectDropDown, {
  SingleSelectDropDownOptionsTypes,
} from "../components/primitives/SingleSelectDropDown";
import SearchText from "../components/primitives/SearchText";

const entries = [
  {
    label: "Dawn News",
    value: "dawn_news",
  },
  {
    label: "Express Tribune",
    value: "express_tribune",
  },
  {
    label: "The Nation",
    value: "the_nation",
  },
];

const FlishNewsHeader = () => {
  const [selectNewsChannel, setSelectNewsChannel] =
    useState<SingleSelectDropDownOptionsTypes>(null);
  const [searchText, setSearchText] = useState("");

  const handleChaneSelectedNewChannel = (
    entry: SingleSelectDropDownOptionsTypes
  ) => {
    setSelectNewsChannel(entry);
  };

  return (
    <div className="bg-gray-50 grid grid-cols-[auto_2fr_1fr] gap-3 px-6 md:px-8 py-4 border-b border-gray-300 place-items-center">
      {/* Header Logo for flash news */}
      <div className="flex justify-start items-center space-x-1">
        <img src={newsLogo} alt="Logo" className="w-8 h-fit rounded-full shadow shadow-gray-700" />
        <span className="text-gray-400 italic">FlashNews</span>
      </div>

      {/* Select Channel for flash news */}
      <div className="w-full flex justify-start items-center space-x-1 px-3">
        <SingleSelectDropDown
          placeholderText="Select News Channel"
          entries={entries}
          selectedOption={selectNewsChannel}
          handleChangeOption={handleChaneSelectedNewChannel}
        />
      </div>
      <div className="w-full flex justify-start items-center gap-2">
        <SearchText text={searchText} setSearchValue={setSearchText} />
        <img src={newsLogo} alt="UM" className="w-7 h-7 rounded-full"/>
      </div>
    </div>
  );
};

export default FlishNewsHeader;
