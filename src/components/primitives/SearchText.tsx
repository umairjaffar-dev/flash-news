import { HiOutlineSearch } from "react-icons/hi";

type SearchTextProps = {
  text: string;
  setSearchValue: (value: string) => void;
};

const SearchText = ({ text, setSearchValue }: SearchTextProps) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        name="searchValue"
        value={text}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="Search..."
        className="text-md h-10 w-full rounded-md border bg-white ps-2 text-black placeholder:text-sm focus:outline-none active:outline-none 2xl:h-8 shadow-sm"
      />
      <HiOutlineSearch
        fontSize={16}
        className="absolute right-3 top-1/2 mt-[1px] -translate-y-1/2 text-gray-600"
      />
    </div>
  );
};

export default SearchText;
