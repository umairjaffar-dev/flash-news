import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export type SingleSelectDropDownOptionsTypes = {
  value: string | number;
  label: string | number;
} | null;

const SingleSelectDropDown = ({
  placeholderText,
  entries,
  selectedOption,
  handleChangeOption,
}: {
  placeholderText: string;
  entries: Array<SingleSelectDropDownOptionsTypes>;
  selectedOption: SingleSelectDropDownOptionsTypes;
  handleChangeOption: (entry: SingleSelectDropDownOptionsTypes) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  //   console.log({ entries, placeholderText });

  function handleIsOpen() {
    setIsOpen(false);
  }

  return (
    <button
      className="relative flex h-10 w-full items-center justify-between rounded-md border border-lavender-500 bg-white px-3 text-xs text-lavender-700 shadow-md 2xl:h-8 2xl:w-48 2xl:text-sm"
      onClick={() => {
        setIsOpen((prev) => {
          return !prev;
        });
      }}
    >
      <span>{selectedOption?.label ?? placeholderText}</span>
      <FaAngleDown className="" />

      {/* DropDown Options div */}
      <div
        className={twMerge(
          "absolute left-0 right-0 top-[calc(100%_+_0.25rem)] z-10 max-h-[40vh]  overflow-auto rounded-md bg-white shadow-sm",
          isOpen && "border border-lavender-300"
        )}
      >
        <div
          className={twMerge(
            "grid grid-cols-1 transition-all",
            !isOpen && "grid-rows-[0fr]",
            isOpen && "grid-rows-[1fr]"
          )}
        >
          <ul className="space-y-0.5 overflow-hidden text-left">
            {entries.map((entry) => (
              <li
                key={entry?.value}
                className={twMerge(
                  "rounded-md px-3 py-1 text-xs hover:bg-lavender-300 2xl:py-2",
                  selectedOption === entry && "bg-gray-100"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  handleChangeOption(entry);

                  handleIsOpen();
                }}
              >
                {entry?.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
};

export default SingleSelectDropDown;
